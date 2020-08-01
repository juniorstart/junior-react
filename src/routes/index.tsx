import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PathLink from 'helpers/path-link-url/PathLink';
import AuthRequiredRoute from 'components/AuthRequiredRoute';
import HomePage from './Home';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Register from './Register';
import Login from './Login';

export const routes = {
  home: new PathLink('/'),
  register: new PathLink('/register'),
  login: new PathLink('/login'),
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
        <Route path={routes.register.path} component={Register} />
        <Route path={routes.login.path} component={Login} />
        <AuthRequiredRoute path={routes.products.root.path} component={Products} />
        <Route path={routes.products.single.path} component={SingleProduct} />
      </Switch>
    </Suspense>
  );
}

export default withRouter(Routes);
