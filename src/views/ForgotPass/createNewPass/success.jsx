import { Button, Typography } from "@material-ui/core";
import clsx from "clsx";
import iconSuccess from "../../../assets/iconSuccess.png";
import { useHistory } from "react-router-dom";
import { recoveryStyle } from "../../../styles/recoveryPass";

const Success = ({ styleGeneral }) => {
  let history = useHistory();
  const styleRecovery = recoveryStyle();
  return (
    <div className={styleRecovery.formReco}>
      <Typography variant="h4">Success!</Typography>
      <img src={iconSuccess} className={styleRecovery.success} alt="imgIcon" />
      <Typography variant="subtitle1" className={styleRecovery.margin_typography_success}>
        Password updated successfully!
      </Typography>

      <Button variant="contained" color="primary" className={clsx(styleGeneral.buttonCenter, styleRecovery.Mt)} onClick={() => history.push("")}>
        Go to login page
      </Button>
    </div>
  );
};

export default Success;
