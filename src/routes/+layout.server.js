import { redirect } from '@sveltejs/kit';

export async function load ({ cookies, url }) {
  const session = cookies.get('session');

  console.log('layout');
  if (session && (url.pathname == '/login' || url.pathname == '/signup')) {
    console.log('redirect')
    throw redirect(307, '/');
  }
}
