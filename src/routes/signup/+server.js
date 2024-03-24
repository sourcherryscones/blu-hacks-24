import db from '$lib/db.js';

const coll = db.collection("users");


export async function POST({ request }){
  const {username, password, weight, height, activity_level, goal} = await request.json();

  const user = {
    username,
    password
  };

  //db things
  const res = await coll.insertOne(user);
  console.log(res);

  return new Response('signed up');
}
