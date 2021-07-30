import { Grid, Typography } from "@material-ui/core";
import BannerLeft from "../../components/bannerLeft";
import { generalStyles } from "../../styles/general";
import { loginStyle } from "../../styles/login";
import FormLogin from "./formLogin";
import Phone from "../../assets/phone.png";
import clsx from "clsx";

const Login = ()=>{
  const styleGeneral = generalStyles();

  return(
  
  <Grid container spacing={0}>
        <Grid item xs={3}>
          <BannerLeft>
          <div >
          <Typography className={clsx(styleGeneral.center,styleGeneral.tittleP)}>
          DigiVax Enterprise
              </Typography>
          </div>
            <div className={clsx(styleGeneral.marginCard,styleGeneral.card)}>
    
            <img src={Phone} className={styleGeneral.circlePhone} alt="imgPhone" />
              
             <Typography className={clsx(styleGeneral.center,styleGeneral.tittleCard)}>
                Digitize your COVID-19 <br /> vaccination card
              </Typography>
              <Typography className={clsx(styleGeneral.textCard)}>
                Scan your vaccination card and
                easily add it to your iOS or Android
                device for free
               
              </Typography>
            </div>
          </BannerLeft>
        </Grid>
        <Grid item xs={9}>
   <FormLogin />
        </Grid>
      </Grid>
    
  )
}
export default Login;
