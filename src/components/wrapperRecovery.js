import { Typography } from "@material-ui/core";
import { generalStyles } from "../styles/general";
import { useHistory } from "react-router-dom";

const WrapperRecovery = ({ children }) => {
  const styleGeneral = generalStyles();
  let history = useHistory();

  return (
    <div
      className={styleGeneral.wrapper_recovery}
    >
      <Typography variant="h6" className={styleGeneral.header_wrapper_recovery}>
        DigiVax Enterprise
      </Typography>
      <div className={styleGeneral.general_width}>{children}</div>
      <Typography
        variant="subtitle2"
        className={styleGeneral.footer_wrapper_recovery}
      >
        Already have an account?
        <span
          className={styleGeneral.textSubray}
          onClick={() => history.push("")}
        >
          {" "}
          Sign in
        </span>
      </Typography>
    </div>
  );
};

export default WrapperRecovery;
