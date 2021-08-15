import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

export default function ProtectedRoutes({ component: Component }) {
    
  let auth = false;
  if (auth == true) {
    return <Component />;
  } else {
    return <Redirect to="/login" />;
  }
}
