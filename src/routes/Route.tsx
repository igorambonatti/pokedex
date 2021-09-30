import React from 'react';
import {
  RouteProps as ReactRouterProps,
  Route as ReactRouterRoute,
} from 'react-router-dom';

interface RouteProps extends ReactRouterProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...props
}) => {
  return (
    <ReactRouterRoute
      {...props}
      render={({ location }) => {
        return <Component />;
      }}
    />
  );
};

export default Route;
