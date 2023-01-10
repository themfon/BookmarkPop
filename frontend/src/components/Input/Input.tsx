import React from 'react';
import styles from './input.module.css';
import EyeSlash from '../../assets/icons/eye-slash.svg';

type Props = {
  label?: string;
  placeholder: string;
  name: string;
  type?: string;
  value?: string;
  error?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  info?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  label,
  placeholder,
  name,
  type = 'text',
  value,
  onChange,
  error,
  isDisabled = false,
  isRequired = false,
  info,
}: Props) => {
  const [show, setShow] = React.useState(false);
  const isPassword = type === 'password';
  return (
    <div className={styles.formControl}>
      {label && (
        <label className={styles.formLabel} htmlFor={name}>
          {label} {isRequired && <span className={styles.formRequired}>*</span>}{' '}
        </label>
      )}

      <div className={styles.iconContainer}>
        <input
          className={`${styles.formInput}  ${error ? styles.errorInput : ''}`}
          name={name}
          id={name}
          placeholder={placeholder}
          type={isPassword && show ? 'text' : type}
          required={isRequired}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
        />

        {isPassword && (
          <span className={styles.passwordIcon} onClick={() => setShow(!show)}>
            {show ? <EyeSlash /> : <EyeSlash />}
          </span>
        )}
      </div>

      {info && <span className={styles.infoText}>{info}</span>}
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default Input;
