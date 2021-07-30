import { makeStyles } from "@material-ui/core/styles";

export const QrCodeStyles = makeStyles({
  content:{
    background:"rgb(210,250,250)",
    width:"40%",
    borderRadius: "2%",
    boxShadow: "0vw .4vw .2vw .1vw rgba(190,190,200,0.8)",
    margin:"4% 0% 0% 30%"
  },
  contentItems:{
    textAling:"justify",
    margin: "0% 20% 0% 20%",
    padding:"4vw 0vw 4vw 0vw"
  }
});
