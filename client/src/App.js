import React, { useEffect } from "react";
import { Switch, Route, useLocation, useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyStorage } from "./redux/actions/useractions";
import Home from "./container/Home";
import Header from "./components/header";
import Login from "./container/Auth/login";
import Register from "./container/Auth/register";
import Profile from "./container/UserProfile";
import UserDetailForm from "./container/Auth/accsetting";
import ProtectedRoutes from "./protectedRoutes";
import "./App.css";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(verifyStorage());
    // if (auth) {
    //   history.push('/')
    // }
  }, [auth]);

  return (
    <>
      {location.pathname !== "/login" &&
      location.pathname !== "/register" &&
      location.pathname !== "/account-setting" ? (
        <Header />
      ) : null}
      <Switch>
        <ProtectedRoutes exact path="/" auth={auth} component={Home} />
        <ProtectedRoutes
          exact
          path="/profile/:id"
          auth={auth}
          component={Profile}
        />
        <ProtectedRoutes
          exact
          path="/account-setting"
          auth={auth}
          component={UserDetailForm}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default App;
