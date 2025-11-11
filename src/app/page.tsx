'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/Button/Button';

export default function Home() {
  const router = useRouter();
  const toSignUpPage = () => router.push('/signup');

  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <header>
        <Button variant="primary" size="lg" type="submit" onClick={toSignUpPage}>
          Sign Up
        </Button>
      </header>
    </div>
  );
}
