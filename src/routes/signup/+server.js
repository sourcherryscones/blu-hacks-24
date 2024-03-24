import { error } from '@sveltejs/kit';
import db from '$lib/db.js';

const users = db.collection("users");


export async function POST({ request }){
  const {username, password, weight, height, activity_level, goal} = await request.json();

  const user = {
    username,
    password
  };

  //db things
  if (await users.findOne({ username })) 
    error(400, `user ${username} already exists`);

  const res = await users.insertOne(user);
  console.log(res);

  return new Response('signed up');
}
