import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';

interface Props {
  children: ReactNode;
}

const Page: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="flex items-center container mx-auto">
        <NavLink
          className=" p-4 text-purple-700 hover:bg-purple-700 hover:text-white"
          to={routes.home.link()}
        >
          Home
        </NavLink>
        <NavLink
          className="p-4 text-purple-700 hover:bg-purple-700 hover:text-white"
          to={routes.products.root.link()}
        >
          Products
        </NavLink>
      </div>
      <div className="container mx-auto p-4">{children}</div>
    </div>
  );
};

export default Page;
