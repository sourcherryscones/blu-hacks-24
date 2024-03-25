import { error } from '@sveltejs/kit';
import db from '$lib/db.js';

const users = db.collection("users");


export async function GET ({ url }) {
  const query = url.searchParams.get('query');
  
  if (!query)
    error(400, "bad query");

  query = query.trim();

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
    .then(res => res.json());

  if (res.status !== 200)
    error(400, "Nutritionix request failed");

  console.log(res);

  const o = res.foods[0];
  const { 
    alt_measures: measures,
    food_name: name,
    serving_weight_grams: unit,
    nf_calories: cal,
    nf_protein: prot,
    nf_total_carbohydrate: carb,
    nf_total_fat: fat,
  } = o;

  measures = measures.map(i => { return { weight: i.serving_weight, text: `${i.qty} ${i.measure}` } }) 
  
  return {
    measures,
    name,
    cal: cal/unit,
    prot: prot/unit,
    carb: carb/unit,
    fat: fat/unit
  };
}

export async function POST ({ request, cookies }) {
  const username = cookies.get('session');
  const { measure, name, cal, prot, carb, fat } = request.json();

  const incs = {
    fat: fat * measure.weight,
    cal: cal * measure.weight,
    prot: prot * measure.weight,
    carb: carb * measure.weight,
  }

  const res = await users.replaceOne({ username }, {
    $inc: incs,
    $push: { foods: name }
  });

  if (res.modifiedCount != 1) 
    error(500, 'mongo update failed');

  return Response('updated');
}
