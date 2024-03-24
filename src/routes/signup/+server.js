export async function POST({ request }){
    const {username, password, weight, height, activity_level, goal} = await request.json();
    //db things
}