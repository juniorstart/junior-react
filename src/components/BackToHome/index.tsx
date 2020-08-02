import React from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'routes';

const BackToHome: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push(routes.home.path);
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="absolute mt-4 ml-4 z-10 top-0 left-0 text-primary-500 rounded-full p-2 border border-primary-500 hover:bg-primary-500 hover:text-white md:mt-10 md:ml-10"
    >
      <svg className="w-6 fill-current" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default BackToHome;
