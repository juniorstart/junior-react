import React from 'react';
import cs from 'classnames';

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

interface Input {
  label: string;
  id: string;
  name?: string;
  className?: string;
  error?: string;
  inputRef: () => RefReturn;
}

const Checkbox: React.FC<Input> = ({ label, id, error, name, className, inputRef }) => {
  return (
    <label htmlFor={id} className="form__label">
      <input
        className={cs('form-checkbox h-5 w-5 mr-4 text-primary-500', className)}
        id={id}
        type="checkbox"
        name={name || ''}
        ref={inputRef}
      />
      {label}
      {error && <p className="form__error">{error}</p>}
    </label>
  );
};

export default Checkbox;
