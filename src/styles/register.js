import { makeStyles } from "@material-ui/core/styles";

export const registerStyle = makeStyles({
  circle: {
    background: "white",
    fontWeight:"600",
    borderRadius: "50%",
    width:"2vw",
    height:"2vw",
    marginRight: "1vw",
  },
  containerSteps: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "70%",
  },
  containerNumbers: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
  },
  containerAlreadySignIn: {
    padding: "25px 35px",
    position: "absolute",
    zIndex: 10,
    right: 0,
  },
  marginRight: {
    marginRight: "1vw"
  },
  marginTop:{
    marginTop: "1vw"
  },
  containerPolicy: {
    marginBottom: 20,
    marginTop: 30, 
  },
  justifyTypography: {
    marginBottom: 35,
  }
});
