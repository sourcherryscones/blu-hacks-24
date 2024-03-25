import { redirect } from '@sveltejs/kit';

import db from '$lib/db.js';
const users = db.collection("users");

export async function load ({ cookies }) {
  const session = cookies.get('session');

  //console.log(session);
  if (!session) {
    //console.log('redirect')
    throw redirect(307, '/login');
  }

  const username = cookies.get('session');
  const o = await users.findOne({username});
  //console.log(o)
  const {max_calories, max_protein, max_fat, max_carb, calories, protein, fat, carb} = o.daily;
  return {
    user: {
      max_calories,
      max_protein,
      max_carb,
      max_fat,
      calories,
      protein,
      carb,
      fat
    }
  }
}
