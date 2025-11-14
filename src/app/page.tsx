'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/Button/Button';

export default function Home() {
  const router = useRouter();
  const toSignUpPage = () => router.push('/signup');
  const toLogInPage = () => router.push('/login');

  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <header>
        <Button variant="primary" size="lg" type="submit" onClick={toSignUpPage}>
          Sign Up
        </Button>
        <Button variant="primary" size="lg" type="submit" onClick={toLogInPage}>
          Log In
        </Button>
      </header>
    </div>
  );
}
