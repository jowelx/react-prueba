import { Button, Typography } from "@material-ui/core";
import clsx from "clsx";
import TextFieldWithLabel from "../../../components/textFieldWithLabel";
import { recoveryStyle } from "../../../styles/recoveryPass";

const CreatePass = ({ styleGeneral, setstep }) => {
  const styleRecovery = recoveryStyle();
  return (
    <div className={styleRecovery.formReco}>
      <Typography variant="h4">Create new password</Typography>

      <TextFieldWithLabel id="pass" placeholder="Password" label="Password" type="password" />
      <TextFieldWithLabel id="confirmpass" placeholder="Repeat password" label="Repeat password" type="password" />
      <Button variant="contained" color="primary" className={clsx(styleGeneral.buttonCenter, styleRecovery.Mt)} onClick={() => setstep(2)}
      >
        Next
      </Button>
    </div>
  );
};

export default CreatePass;
