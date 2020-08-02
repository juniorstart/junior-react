import React, { useEffect } from 'react';
import cs from 'classnames';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { loginUser, selectLogin } from 'routes/Login/loginSlice';
import msg from 'helpers/errorMessages';
import { setToken, isTokenValid } from 'helpers/auth/session';
import { useHistory } from 'react-router-dom';
import { routes } from 'routes';

const schema = yup.object().shape({
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
  login: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loginError, token } = useSelector(selectLogin);

  const { register, handleSubmit, errors, setError } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (loginError?.message) {
      setError('login', { type: 'manual', message: '' });
      setError('password', { type: 'manual', message: '' });
    }
  }, [loginError, setError]);

  useEffect(() => {
    if (token && isTokenValid(token)) {
      setToken(token);
      history.push(routes.products.root.path);
    }
  }, [token, history]);

  const { login, password } = errors;

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {loginError?.message && (
        <div className="rounded bg-red-200 text-red-600 mb-6">
          <p className="p-4 font-medium">Invalid username or password</p>
        </div>
      )}

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
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
