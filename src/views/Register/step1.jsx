import { Button, Typography, Checkbox } from "@material-ui/core";
import clsx from "clsx";
import TextFieldWithLabel from "../../components/textFieldWithLabel";
import { generalStyles } from "../../styles/general";
import { registerStyle } from "../../styles/register";
import InputsLabel from "../../components/inputs";
const Step1 = ({ setstep }) => {
  const styleGeneral = generalStyles();

  return (
    <div className={clsx(styleGeneral.form2)}>
      <Typography className={styleGeneral.tittle}>
        DigiVax Partner 
        <br/>Sign Up
      </Typography>
      <InputsLabel id="step-email" placeholder="Your E-mail" label="E-mail" type="email" />
      <InputsLabel id="step-pass" placeholder="Your password" label="Password" type="password"/>
      <InputsLabel id="step-confirmpass" placeholder="confirm password" label="Confirm Password" type="password" />
      <div className={clsx(styleGeneral.alignItems)} >
        <Checkbox color="default" inputProps={{ "aria-label": "checkbox with default color" }} className={styleGeneral.alignCheck}/>
        <Typography variant="subtitle2">
          Agree to
          
          <span className={styleGeneral.underline}>
            User Privacy Policy
          </span>{" "}
          and{" "}
          <span className={styleGeneral.underline}>
            Terms of Service
          </span>
        </Typography>
      </div>

      <Button variant="contained" color="primary" className={styleGeneral.buttonCenter} onClick={() => setstep(2)}>
        Next
      </Button>
    </div>
  );
};

export default Step1;
