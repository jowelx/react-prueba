import { Button, Typography } from "@material-ui/core";
import TextFieldWithLabel from "../../components/textFieldWithLabel";
import { generalStyles } from "../../styles/general";
import InputsLabel from "../../components/inputs";
import clsx from "clsx";
import { useHistory } from "react-router-dom";

const FormLogin = () => {
  const styleGeneral = generalStyles();

  let history = useHistory();

  return (
    <div className={clsx(styleGeneral.center,styleGeneral.form)}>
    <div >
      <Typography  className={styleGeneral.tittle}>
        DigiVax Partner
        <br/> Login
      </Typography>
      <InputsLabel  id="email" placeholder="Email" label="Email" type="email"  />
      <InputsLabel  id="pass" placeholder="Your Password" label="Password" type="password"/>

      <Typography 
      
      onClick={() => 
        history.push("/recovery-password")
      }>
        Forgot password?
      </Typography>
      <Button color="primary" variant="contained" className={clsx(styleGeneral.buttonCenter, styleGeneral.marginBottom)}  >
        Sign in
      </Button>
    </div>
  </div>
  );
};

export default FormLogin;
