'use client';

import { useState } from 'react';
import styles from '@/components/Input/Input.module.scss';
import Input from '@/components/Input/Input';
import { loginEmail } from '../../../server/auth-actions';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <form className={styles.form} action={loginEmail}>
        <Input
          field="email"
          label="Email"
          value={email}
          onChange={setEmail}
          placeholder="email@example.com"
          required
        />
        <Input
          field="password"
          label="Password"
          value={password}
          onChange={setPassword}
          placeholder="Create a password"
          required
        />
        <button type="submit" className={styles.submit} disabled={!email || !password}>
          Submit
        </button>
      </form>
    </div>
  );
}
