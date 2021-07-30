import { Button, Typography } from "@material-ui/core";
import clsx from "clsx";
import TextFieldWithLabel from "../../components/textFieldWithLabel";
import { useHistory } from "react-router-dom";

const SendMessage = ({ styleGeneral, styleRecoveryPass, setstep }) => {
  let history = useHistory();
  return (
    <>
    <div className={styleRecoveryPass.formReco}>
      <Typography className={styleRecoveryPass.marginTop}variant="h4">Password recovery</Typography>
      <Typography
        variant="subtitle1"
        
      >
        Enter your email to reset password
      </Typography>
      <TextFieldWithLabel
        id="email"
        placeholder="Your Email"
        label="Email"
        type="email"
        className={styleRecoveryPass.inputMargin}
      />
      <div
        className={styleRecoveryPass.container_buttons_send_message}
      >
        <Button
          variant="contained"
          color="primary"
          className={styleGeneral.buttonCenter}
          onClick={() => setstep(2)}
        >
          Next
        </Button>
        <Typography
          variant="subtitle1"
          className={clsx(styleRecoveryPass.basic_marginTop_send_message, styleGeneral.cursorPointer)}
          onClick={() => history.push("")}
        >
          Cancel
        </Typography>
      </div>
      </div>
    </>
  );
};

export default SendMessage;
