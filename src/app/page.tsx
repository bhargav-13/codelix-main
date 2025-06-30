import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the home route group
  redirect('/home');
}
