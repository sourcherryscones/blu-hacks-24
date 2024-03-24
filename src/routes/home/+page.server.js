import db from '$lib/db.js';

const users = db.collection("users");

export async function load({ cookies }){
    const username = cookies.get('session');
    const {max_calories, max_protein, max_fat, max_carb, calories, protein, fat, carb} = await users.findOne({username})
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