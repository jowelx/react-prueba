import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";


export const generalStyles = makeStyles({
    /*estilo del panel lateral*/ 
  
    containerBannerLeft: {
      background: "linear-gradient(rgb(200, 250, 245),rgb(200, 220, 255));",
      height: "100vh", 
      position: "relative",
      borderRight:"solid .1vw rgb(200,200,200)"
    
    },
    tittleP:{
      position:"relative",
      
      fontSize:"2vw",
      fontWeight:"600",
      padding:"1vw 1.5vw 1vw 1vw",
      top:"1vw",
      margin:"0% 10% 0% 8%",
      letterSpacing:".2vw"
    },
  
    circleleft: {
      width: "45%",
      height: "20%",
      background: "linear-gradient(rgb(250, 250, 250),rgb(200, 240, 255));",
      borderRadius: "0 0 0 100%",
      position: "absolute",
      boxShadow: "-.4vw 0vw 1vw .2vw rgba(150,190,220,0.4)",
      right: 0,
    },
    circleright: {
      background: "linear-gradient(rgb(200, 240, 255),rgb(250, 250, 250));",
      width: "45%",
      height: "20%",
      
      borderRadius: "0 100% 0 0",
      position: "absolute",
      bottom: 0,
      boxShadow: ".2vw -.5vw 1.1vw .4vw rgba(150,190,220,0.4)",
      left: 0,
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    circlePhone: {
      width: "60%",
      borderRadius: "50%",
      marginLeft:"18%",
      marginTop:"10%",
      boxShadow: "0vw .4vw .9vw -.1vw rgba(150,190,220,0.8)"
    },
    card:{
    width:"75%",
    background:"rgb(250,250,255)",
    borderRadius: "2% ",
    height:"27vw",
    boxShadow: "0vw .5vw .5vw .2vw rgba(140,180,200,0.6)"
    },
    card2:{
      width:"75%",
      background:"rgb(250,250,255)",
      borderRadius: "2% ",
      boxShadow: "0vw .5vw .5vw .2vw rgba(140,180,200,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      height: "50%",
    },
    marginCard:{
      marginTop:"10%",
      marginLeft:"12%"
    },
  
   tittleCard:{
    margin:"5% 5% 2% 5%",
    fontSize:"1.5vw",
    textAlign:"center"
   },
   textCard:{
    margin:"5% 8% 10% 8%",
    textAlign:"justify"
   },
  
  
   /*Formularios*/
   form:{
    background:"rgb(255,255,255)",
    marginTop:"5vw",
    borderRadius: "2%",
    boxShadow: "0vw .4vw .2vw .1vw rgba(190,190,200,0.8)",
    width:"40%",
    marginLeft:"25%",
    height:"70%"
   },
   form2:{
    
    background:"rgb(255,255,255)",
    marginTop:"5vw",
    borderRadius: "2%",
    boxShadow: "0vw .2vw .2vw .1vw rgba(190,190,200,0.8)",
    width:"40%",
    paddingLeft:"4vw",
    
    height:"75%"
   },
   inputWidth:{
    width:"25vw"
   },
   tittle:{
    position:"relative",
    fontSize:"2vw",
    fontWeight:"600",
    left:"0",
    top:"0vw",
    margin:"0% 0% 15% 0%",
    letterSpacing:".2vw"
  },
  
  letterSpacing:{
  
    letterSpacing:".15vw"
  },
  
  message:{
    margin:"0% 10% 0% 10%",
    background:"rgb(250,255,255)",
    marginTop:"10vw",
    padding:"0vw 8vw 5vw 8vw",
    borderRadius: "2%",
    boxShadow: "0vw .4vw .2vw .1vw rgba(190,190,200,0.8)"
  },
  circlemail: {
    width: "20%",
    padding:"1vw",
    background:"rgb(250,255,255)",
    borderRadius: "50%",
    marginLeft:"35%",
    marginTop:"5%",
    marginBottom:"10%",
    boxShadow: "0vw .4vw .5vw -.1vw rgba(150,190,220,0.8)"
  },
  colorCheck:{
    color: "rgb( 0, 234, 240 )"
  },
    input:{
      marginTop:"2vw",
    },
  
  
    marginTop: {
      marginTop: "4vw",
    },
    marginBottom: {
      marginBottom: "1vw",
    },
    buttonCenter: {
      padding: "12px 52px 12px 52px",
      color: "white",
      display: "block",
      margin: "auto"
    },
    alignItems: {
      display: "flex",
      alignItems: "center",
    },
    inputsLink: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    subray: {
      textDecoration: "underline",
      color: "rgb( 0, 234, 240 )",
      cursor: "pointer"
    },
    centerInput: {
      width: "80%",
      marginBottom: 33,
      "&& .MuiInputBase-input": {
        textAlign: "center",
      },
    },
  
    underline: {
      textDecoration: "underline",
      cursor: "pointer"
    },
    generalJustification: {
      marginBottom: 10
    },
    justify100: {
      marginBottom: 100
    },
    cursorPointer: {
      cursor: "pointer"
    },
    marginAuto: {
      margin: "auto"
    },
    backbuttom: {
      marginRight: 0,
      flexDirection: "row",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
    typography_back_buttom: {
      marginRight: 40
    },
    mainContainer: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    mainTypography: {
      marginBottom: "5%",
      marginTop: "10%"
    }
});
const theme = createTheme({
  palette: {
    primary: { main: "rgb( 0, 234, 240 )" },
  },
});
export default theme;