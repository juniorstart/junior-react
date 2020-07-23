import React from 'react';
import Page from 'components/Page';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';

const Products: React.FC = () => {
  return (
    <Page>
      <h1 className="text-xl mb-4">Products</h1>
      <NavLink className="underline text-blue-600" to={routes.products.single.link(12)}>
        Product 12
      </NavLink>
    </Page>
  );
};

export default Products;
