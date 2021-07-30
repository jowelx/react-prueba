import { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import BannerLeft from "../../components/bannerLeft";
import { generalStyles } from "../../styles/general";
import { registerStyle } from "../../styles/register";
import clsx from "clsx";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import ConfirmEmail from "./confirmEmail";
import { useHistory } from "react-router-dom";
import DoneIcon from "@material-ui/icons/Done";

const Register = () => {
  const styleGeneral = generalStyles();
  const styleRegister = registerStyle();
  const [step, setstep] = useState(1);
  let history = useHistory();

  return (
    <>
           <Grid container spacing={0}>
        <Grid item xs={3}>
          <div className={styleRegister.containerAlreadySignIn}>
            <div className={styleGeneral.center}>
              <Typography variant="subtitle2" className={styleRegister.marginRight}>
                Already have an account?
              </Typography>
              <Button color="primary" variant="outlined" onClick={() => history.push("")}>
                Sign in
              </Button>
            </div>
          </div>
          <BannerLeft>
          <div>
          <Typography className={clsx(styleGeneral.center,styleGeneral.tittleP)}>
          DigiVax Enterprise
              </Typography>
          </div>
            <div className={clsx(styleGeneral.marginCard,styleGeneral.card2)}>
              <div>
                <Typography variant="h6">
                  3 easy steps to setup <br /> your organization
                </Typography>
                <Typography className={styleRegister.containerNumbers} >
                  <div className={clsx( styleRegister.circle, styleGeneral.center )}>
                    {step > 1 ? <DoneIcon className={styleGeneral.colorCheck} /> : 1}
                  </div>
                  Your email
                </Typography>
                <Typography className={styleRegister.containerNumbers}>
                  <div className={clsx( styleRegister.circle, styleGeneral.center )} >
                    {step > 2 ? <DoneIcon className={styleGeneral.colorCheck} /> : 2}
                  </div>
                  Organization name
                </Typography>
                <Typography  className={styleRegister.containerNumbers} >
                  <div className={clsx( styleRegister.circle, styleGeneral.center )} >
                    {step > 3 ? <DoneIcon className={styleGeneral.colorCheck} /> : 3}
                  </div>
                  Organization link
                </Typography>
              </div>
            </div>
          </BannerLeft>
        </Grid>
        <Grid item xs={9}>
          <div className={clsx(styleGeneral.center, styleGeneral.fullHeight)}>
            {step === 1 && <Step1 setstep={setstep} />}
            {step === 2 && <Step2 setstep={setstep} />}
            {step === 3 && <Step3 setstep={setstep} />}
            {step === 4 && <ConfirmEmail />}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;
