import { Typography } from "@material-ui/core";
import { generalStyles } from "../../styles/general";
import Letter from "../../assets/letter.png";

const ConfrimEmail = () => {
  const styleGeneral = generalStyles();
  return (
    <div className={styleGeneral.message}>
    <img src={Letter} alt="letter" className={styleGeneral.circlemail} />
    <Typography  className={styleGeneral.marginBottomGeneral}>
      Please confirm your email
    </Typography>
    <Typography  >
      We emailed a confirmation like to <b>John@gmail.com</b> <br /> Please
      check your email to confirm account
    </Typography>
    <Typography >
      Didn’t receive a confirmation email?{" "}
      <span className={styleGeneral.subray}>
        Send again
      </span>
    </Typography>
  </div>
  );
};

export default ConfrimEmail;
