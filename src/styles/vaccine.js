import { makeStyles } from "@material-ui/core/styles";

export const vaccineStyles = makeStyles((theme) => ({
  contentMain: {
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentItems: {
    height: "auto",
    width: "40%",
    padding:"0vw 2vw 0vw 2vw",
    borderRadius: "2%",
    marginBottom:"2vw",
    boxShadow: "0vw .4vw .2vw .1vw rgba(190,190,200)",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",

    },
  },
  basic_margin_top: {
    marginTop: 20
  },
  typography_vaccine_verify: {
    marginBottom: "5%",
    marginTop: "5%",
    textAlign: "center" 
  },
  circleImg: {
    height: "9vw",
    width: "9vw",
    borderRadius: "50%",
    background: "rgb(20,20,20)",
    position: "relative",
    boxShadow: "0vw .2vw .2vw .1vw rgba(190,190,200)",
    margin: "3vw 0",
  },
  margin_x_y_step_vaccine: {
    margin: "3vw 0"
  },
  step_margin_top: {
    marginTop: 30

  },
  margin_b_butttom: {
    marginBottom: 30
  },
  container_policy: {
    marginBottom: 20,
    marginTop: 30
  }

}));
