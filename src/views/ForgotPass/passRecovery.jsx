import { Typography } from "@material-ui/core";
import clsx from "clsx";

const PassRecovery = ({ styleGeneral, styleRecoveryPass }) => {
  return (
    <div className={styleRecoveryPass.formReco}>
      <Typography variant="h4">Thank you!</Typography>
      <Typography
        variant="subtitle1"
        className={styleRecoveryPass.marginTop}
      >
        Click the link we emailed to{" "}
        <span className={styleRecoveryPass.marginTop}>Wilhelmopen@gmail.com</span> <br /> to

        create your new password
      </Typography>
      <Typography
        variant="subtitle1"
        className={styleRecoveryPass.marginTop}
      >
        <span
          className={clsx(styleGeneral.textSubray, styleRecoveryPass.fontStyle)}
        >
          Resend
        </span>{" "}
        in 00:30 <br />
        (or write to us at help@mydigivax.com)
      </Typography>
    </div>
  );
};

export default PassRecovery;
