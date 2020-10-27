import React from 'react';
import cs from 'classnames';

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

interface Input {
  label?: string;
  id: string;
  name?: string;
  className?: string;
  error?: string;
  inputRef?: () => RefReturn;
}

const Input: React.FC<Input> = ({ label, id, error, name, className, inputRef }) => {
  return (
    <label htmlFor={id} className="form__label">
      {label}
      <input
        id={id}
        type="text"
        name={name || ''}
        className={cs('form__field', className)}
        ref={inputRef}
      />
      {error && <p className="form__error">{error}</p>}
    </label>
  );
};

export default Input;
