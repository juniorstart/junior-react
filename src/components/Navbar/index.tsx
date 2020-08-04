import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';
import cs from 'classnames';
import { isTokenValid, logout } from 'helpers/auth/session';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userIsLogin = isTokenValid();

  const getAuthenticatedNavLinks = () => (
    <>
      <NavLink exact className="nav__link" to="/">
        Todo list
      </NavLink>
      <NavLink className="nav__link" to={routes.recruitments.path}>
        Recruitments
      </NavLink>
      <button className="nav__btn mt-4 md:mt-0" type="button" onClick={logout}>
        Logout
      </button>
    </>
  );

  const getNotAuthenticatedNavLinks = () => (
    <>
      <NavLink exact className="nav__link" to={routes.login.path}>
        Login
      </NavLink>
      <NavLink className="nav__btn mt-4 md:mt-0" to={routes.register.path}>
        Register
      </NavLink>
    </>
  );

  return (
    <div className="container z-10 mx-auto px-8 py-4 items-center flex justify-between absolute top-0 inset-x-0 bg-white rounded-b-lg shadow-lg flex-wrap md:flex-no-wrap">
      <div>Junior start</div>
      <button
        type="button"
        className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="md:hidden text-black">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </div>
      </button>
      <nav
        className={cs('w-full flex-col text-center md:w-auto md:block', {
          flex: isOpen,
          hidden: !isOpen,
        })}
      >
        {userIsLogin ? getAuthenticatedNavLinks() : getNotAuthenticatedNavLinks()}
      </nav>
    </div>
  );
};

export default Navbar;
