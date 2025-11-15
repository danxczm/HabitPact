import React, { useState } from 'react';
import styles from './Input.module.scss';

type FieldType = 'name' | 'email' | 'password' | 'text';

type Props = {
  field: FieldType;
  label?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (v: string) => void;
  className?: string;
};

export default function Input({
  field,
  label,
  value = '',
  placeholder = '',
  required = false,
  onChange,
  className = '',
}: Props) {
  const [val, setVal] = useState(value);
  const [touched, setTouched] = useState(false);

  const inferredType: string =
    field === 'email' ? 'email' : field === 'password' ? 'password' : 'text';

  const inferredMinLength: number = field === 'email' ? 0 : field === 'password' ? 6 : 0;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setVal(e.target.value);
    onChange?.(e.target.value);
  }

  function handleBlur() {
    setTouched(true);
  }

  function getError(): string | null {
    if (!required && !val) return null;
    if (required && !val) return 'This field is required';
    if (field === 'email') {
      // simple email check
      const ok = /^\S+@\S+\.\S+$/.test(val);
      if (!ok) return 'Enter a valid email';
    }
    if (field === 'password') {
      // gentle password guidance (not strict)
      if (val.length > 0 && val.length < 6) return 'Password is too short';
    }
    return null;
  }

  const error = touched ? getError() : null;

  return (
    <div className={`${styles.field} ${className}`} data-field={field}>
      {label ? (
        <label className={styles.label} htmlFor={`input-${field}`}>
          {label}
          {required ? <span className={styles.required}>*</span> : null}
        </label>
      ) : null}

      <div className={styles.inputWrap}>
        <input
          name={field}
          id={`input-${field}`}
          className={`${styles.input} ${error ? styles.invalid : ''}`}
          type={inferredType}
          autoComplete="off"
          minLength={inferredMinLength}
          value={val}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!error}
          aria-describedby={error ? `err-${field}` : undefined}
          required={required}
        />
      </div>

      {error ? (
        <div className={styles.error} id={`err-${field}`} role="alert">
          {error}
        </div>
      ) : (
        <div className={styles.hint} aria-hidden>
          {/* keep layout stable */}
        </div>
      )}
    </div>
  );
}
