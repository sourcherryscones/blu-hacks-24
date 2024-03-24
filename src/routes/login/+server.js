import { error } from '@sveltejs/kit';
import db from '$lib/db.js';

const users = db.collection("users");


export async function POST({ request, cookies }){
  const { username, password } = await request.json();
  const user = await users.findOne({ username });

  if (!user)
    error(404, `user ${username} does not exist`);
  if (user.password !== password) 
    error(403, `user ${username} password incorrect`);

  cookies.set("session", username, { path: "/" });

  return new Response('signed up');
}
