import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PathLink from 'helpers/path-link-url/PathLink';
import AuthRequiredRoute from 'components/AuthRequiredRoute';
import HomePage from './Home';
import Recruitments from './Recruitments';
import Register from './Register';
import Login from './Login';

export const routes = {
  home: new PathLink('/'),
  register: new PathLink('/register'),
  login: new PathLink('/login'),
  recruitments: new PathLink('/products'),
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
        <AuthRequiredRoute path={routes.recruitments.path} component={Recruitments} />
      </Switch>
    </Suspense>
  );
}

export default withRouter(Routes);
