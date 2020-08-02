import React, { useEffect } from 'react';
import cs from 'classnames';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { registerUser, selectRegister } from 'routes/Register/registerSlice';
import msg from 'helpers/errorMessages';
import { useHistory } from 'react-router-dom';
import { routes } from 'routes';

const schema = yup.object().shape({
  firstName: yup.string().required(msg.required).max(30, msg.max),
  lastName: yup.string().required(msg.required).max(30, msg.max),
  email: yup.string().email(msg.email).required(msg.required),
  login: yup
    .string()
    .required(msg.required)
    .min(6, msg.min)
    .max(30, msg.max)
    .matches(/^[a-zA-Z].*/, msg.login),
  password: yup
    .string()
    .required(msg.required)
    .min(6, msg.min)
    .max(30, msg.max)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).*/, msg.password),
});

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  login: string;
  password: string;
}

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loginError, success } = useSelector(selectRegister);

  const { register, handleSubmit, errors, setError, clearErrors } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => {
    dispatch(registerUser(data));
  };

  useEffect(() => {
    if (loginError) {
      setError('login', {
        type: 'manual',
        message: loginError,
      });
    }
  }, [loginError, setError]);

  useEffect(() => {
    if (success) {
      clearErrors();
      history.push(routes.login.path);
    }
  }, [success]);

  const { firstName, lastName, email, login, password } = errors;

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <div className="form__control pr-3">
          <label htmlFor="firstName" className="form__label">
            First Name
            <input
              ref={register}
              type="text"
              name="firstName"
              id="firstName"
              className={cs('form__field', { 'form__field--error': firstName })}
              placeholder="John"
            />
          </label>
          <p className="form__error">{firstName?.message}</p>
        </div>

        <div className="form__control pl-3">
          <label htmlFor="lastName" className="form__label">
            Last Name
            <input
              ref={register}
              type="text"
              name="lastName"
              id="lastName"
              className={cs('form__field', { 'form__field--error': lastName })}
              placeholder="Doe"
            />
          </label>
          <p className="form__error">{lastName?.message}</p>
        </div>
      </div>
      <div className="form__control">
        <label htmlFor="email" className="form__label">
          E-mail
          <input
            ref={register}
            type="text"
            name="email"
            className={cs('form__field', { 'form__field--error': email })}
            id="email"
            placeholder="john.doe@mail.com"
          />
        </label>
        <p className="form__error">{email?.message}</p>
      </div>
      <div className="form__control">
        <label htmlFor="login" className="form__label">
          Login
          <input
            ref={register}
            type="text"
            name="login"
            className={cs('form__field', { 'form__field--error': login })}
            id="login"
            placeholder="Johndoe21"
          />
        </label>
        <p className="form__error">{login?.message}</p>
      </div>

      <div className="form__control">
        <label htmlFor="password" className="form__label">
          Password
          <input
            ref={register}
            type="password"
            name="password"
            id="password"
            className={cs('form__field', { 'form__field--error': password })}
            placeholder="********"
          />
        </label>
        <p className="form__error">{password?.message}</p>
      </div>

      <div className="form__control">
        <button type="submit" className="btn btn--primary block w-full">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
