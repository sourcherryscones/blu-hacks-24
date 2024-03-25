import { redirect } from '@sveltejs/kit';
import db from '$lib/db.js';

const users = db.collection("users");

export async function load ({ cookies, url }) {
  const session = cookies.get('session');

  if (session && (url.pathname == '/login' || url.pathname == '/signup')) {
    throw redirect(307, '/');
  }
  
  if (!session) {
    throw redirect(307, '/login');
  }

  const username = cookies.get('session');
  const o = await users.findOne({username});
  const {max_calories, max_protein, max_fat, max_carb, calories, protein, fat, carb, water, foods} = o.daily;

  return {
    username,
    user: {
      max_calories,
      max_protein,
      max_carb,
      max_fat,
      calories,
      protein,
      carb,
      fat,
      water,
      foods,
    }
  }
}
