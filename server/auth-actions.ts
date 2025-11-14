'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export async function registerEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const password = formData.get('password') as string;
  const email = formData.get('email') as string;

  await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
    },
    headers: await headers(),
  });

  redirect('/');
}

export async function loginEmail(formData: FormData) {
  const password = formData.get('password') as string;
  const email = formData.get('email') as string;

  await auth.api.signInEmail({
    body: {
      email,
      password,
    },
    headers: await headers(),
  });

  redirect('/');
}

export async function signOut() {
  await auth.api.signOut({
    headers: await headers(),
  });

  redirect('/');
}
