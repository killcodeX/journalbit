import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoutes({ auth, component, ...rest}) {
    
  if (auth == true) {
    return <Route {...rest} component={component}/>;
  } else {
    return <Redirect to="/login" />;
  }
}
