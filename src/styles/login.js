import { makeStyles } from "@material-ui/core/styles";

export const loginStyle = makeStyles({
  wrapperLogin: {
    height: "75%",
    flexDirection: "column",
    textAlign: "center",
  },
  forgotPassword: {
    textAlign: "end",
  },
  circle: {
    height: "200px",
    width: "200px",
    borderRadius: "50%",
    background: "white",
    position: "relative",
  },
  typography_form_login: {
    marginBottom: "5%",
    cursor: "pointer"
  },
  text_field_form_login: {
    marginBottom: 20
  }
});
