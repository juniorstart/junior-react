import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PathLink from 'helpers/path-link-url/PathLink';
import AuthRequiredRoute from 'components/AuthRequiredRoute';
import HomePage from './Home';
import Recruitments from './Recruitments';
import Register from './Register';
import Login from './Login';
import NewRecruitment from './Recruitments/NewRecruitment';

export const routes = {
  home: new PathLink('/'),
  register: new PathLink('/register'),
  login: new PathLink('/login'),
  recruitments: {
    root: new PathLink('/recruitments'),
    newRecruitment: new PathLink('/recruitments/new'),
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
        <AuthRequiredRoute exact path={routes.recruitments.root.path} component={Recruitments} />
        <AuthRequiredRoute
          path={routes.recruitments.newRecruitment.path}
          component={NewRecruitment}
        />
      </Switch>
    </Suspense>
  );
}

export default withRouter(Routes);
