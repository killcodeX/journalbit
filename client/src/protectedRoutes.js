import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoutes({
  auth,
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth == true) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
}

// if (auth == true) {
//   return <Route {...rest} component={component}/>;
// } else {
//   return <Redirect to="/login" />;
// }
