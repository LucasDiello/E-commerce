/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";


const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        Cookies.get("email") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default ProtectedRoute;
