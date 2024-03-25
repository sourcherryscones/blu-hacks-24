import { error, json } from '@sveltejs/kit';
import db from '$lib/db.js';

const users = db.collection("users");


export async function GET ({ url }) {
  const query = (url.searchParams.get('query') ?? "").trim();
  
  if (!query)
    error(400, "bad query");

  const res = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json',
      'x-app-id': '156b682d',
      'x-app-key': '04ce01540559c05dbe12627096b063d2'
    },
    body: JSON.stringify({
      "query": "two small bagels"
    })
  })

  if (res.status !== 200) {
    const { message } = await res.json();
    error(400, `Nutritionix request failed with: ${message}`);
  }

  const o = (await res.json()).foods[0];
  const { 
    alt_measures,
    food_name: name,
    serving_weight_grams: unit,
    nf_calories: cal,
    nf_protein: prot,
    nf_total_carbohydrate: carb,
    nf_total_fat: fat,
  } = o;

  const measures = alt_measures.map(i => { return { weight: i.serving_weight, text: `${i.qty} ${i.measure}` } }) 
  
  return json({
    measures,
    name,
    cal: cal/unit,
    prot: prot/unit,
    carb: carb/unit,
    fat: fat/unit
  });
}

export async function POST ({ request, cookies }) {
  const username = cookies.get('session');
  const { measure, name, cal, prot, carb, fat } = await request.json();

  const incs = {
    'daily.fat': Math.round(fat * measure.weight),
    'daily.calories': Math.round(cal * measure.weight),
    'daily.protein': Math.round(prot * measure.weight),
    'daily.carb': Math.round(carb * measure.weight),
  }

  const res = await users.updateOne({ username }, {
    $inc: incs,
    $push: { 'daily.foods': { name, quantity: measure.text, cal: incs['daily.calories'] } }
  });

  if (res.modifiedCount != 1) 
    error(500, 'mongo update failed');

  return new Response('updated');
}
