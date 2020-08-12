import React from 'react';
import { isAuthenticated } from 'helpers/auth/session';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

interface Props {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  path: string;
  exact?: boolean;
}

const AuthRequiredRoute: React.FC<Props> = ({ component, path, exact }) => {
  return isAuthenticated() ? (
    <Route exact={exact} path={path} component={component} />
  ) : (
    <Redirect to={{ pathname: '/login' }} />
  );
};

export default AuthRequiredRoute;
