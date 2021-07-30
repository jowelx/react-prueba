import { Switch } from "react-router-dom";
import MainRecovery from "../views/ForgotPass/index";
import Login from "../views/Login/login";
import Register from "../views/Register/register";
import MainCreatePass from "../views/ForgotPass/createNewPass/index";
import QrCode from "../views/qrCode/qrCode";
import VaccineVerify from "../views/VaccineVerification/vaccineVerify";
import Main from "../views/main";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ component, ...options }) => {
  const isAuth = false;
  if (!isAuth) return <Route {...options} component={component} />;
  return <Redirect to="/" />;
};

const PublicRoutes = () => {
  return (
    <Switch>
      <PublicRoute exact path="/" component={Main} />
      <PublicRoute exact path="/login" component={Login} />
      <PublicRoute exact path="/register" component={Register} />
      <PublicRoute exact path="/recovery-password" component={MainRecovery} />
      <PublicRoute exact path="/create-password" component={MainCreatePass} />
      <PublicRoute exact path="/qr-code" component={QrCode} />
      <PublicRoute exact path="/vaccine-verify" component={VaccineVerify} />
    </Switch>
  );
};

export default PublicRoutes;
