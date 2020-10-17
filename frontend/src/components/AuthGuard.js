import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

//AuthGuard for private route. check if whether the current user object is null. If yes redirect to login page. Else render the target page

function AuthGuard({ component: Component, render, ...rest }) {
  const account = useSelector((state) => state.auth);
  
  if (Object.keys(account.user).length === 0 && account.user.constructor === Object) {
  
    return <Redirect to="/login" />;
  }
 
  return render ? render({ ...rest }) : <Component {...rest} />;
}

export default AuthGuard;
