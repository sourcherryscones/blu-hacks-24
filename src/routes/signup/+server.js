import { error } from '@sveltejs/kit';
import db from '$lib/db.js';

const users = db.collection("users");


export async function POST({ request }){
  const {username, password, weight, height, activity_level, goal} = await request.json();

  const user = {
    username,
    password,
    daily: {
        calories: 0,
        max_calories: 1000,
        carb: 0,
        max_carb: 5,
        fat: 0,
        max_fat: 5,
        protein: 0,
        max_protein: 5,
        water: 0
    }
  };

  //db things
  if (await users.findOne({ username })) 
    error(400, `user ${username} already exists`);

  const res = await users.insertOne(user);
  console.log(res);

  return new Response('signed up');
}
