import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PathLink from 'helpers/path-link-url/PathLink';
import HomePage from './Home';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Register from './Register';

export const routes = {
  home: new PathLink('/'),
  register: new PathLink('/register'),
  products: {
    root: new PathLink('/products'),
    single: new PathLink('/products/:id', (id) => `/products/${id}`),
  },
};

function Routes() {
  return (
    <Suspense fallback={<div />}>
      {' '}
      {/* TODO: Loader */}
      <Switch>
        <Route exact path={routes.home.path} component={HomePage} />
        <Route exact path={routes.register.path} component={Register} />
        <Route exact path={routes.products.root.path} component={Products} />
        <Route exact path={routes.products.single.path} component={SingleProduct} />
      </Switch>
    </Suspense>
  );
}

export default withRouter(Routes);
