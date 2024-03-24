import { redirect } from '@sveltejs/kit';

export async function load ({ cookies }) {
  const session = cookies.get('session');

  console.log(session);
  if (!session) {
    console.log('redirect')
    throw redirect(307, '/login');
  }
}
