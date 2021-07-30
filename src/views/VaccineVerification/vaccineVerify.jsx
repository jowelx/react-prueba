import { Button, Typography, Grid, Checkbox } from "@material-ui/core";
import clsx from "clsx";
import { generalStyles } from "../../styles/general";
import { vaccineStyles } from "../../styles/vaccine";
import TextFieldWithLabel from "../../components/textFieldWithLabel";
import BasicDatePicker from "../../components/datePicker";
import SelectWithLabel from "../../components/selectWithLabel";
import iconVaccine from "../../assets/iconVaccine.png";

const VaccineVerify = () => {
  const VerifyStyles = vaccineStyles();
  const styleGeneral = generalStyles();

  return (
    <div className={VerifyStyles.contentMain}>
      <div className={VerifyStyles.contentItems}>
        <Typography >
          DigiVax Enterprise
        </Typography>
        <img className={VerifyStyles.circleImg} src={iconVaccine} alt="iconVaccine" />
        <Typography >
          Getty COVID-19 Vaccine Verification
        </Typography>
        <Typography variant="subtitle1">
          Getty has partnered with DigiVax Enterprise to securely receive
          employees <br /> self-attested proof of COVID-19 vaccination
        </Typography>
        <Typography variant="h6" className={VerifyStyles.marginTop}>
          Step 1/2. Personal
        </Typography>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} xs={12}>
            <TextFieldWithLabel id="first-name" placeholder="First name" label="First name" type="string" className={VerifyStyles.basic_margin_top} />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <TextFieldWithLabel id="last-name" placeholder="Last name" label="Last name" type="string" className={VerifyStyles.basic_margin_top} />
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <TextFieldWithLabel id="email" placeholder="Email" label="Email" type="string" className={VerifyStyles.basic_margin_top}
            />
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <TextFieldWithLabel id="phone" placeholder="Phone" label="Phone" type="string" className={VerifyStyles.basic_margin_top}
            />
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <BasicDatePicker className={VerifyStyles.basic_margin_top} />
          </Grid>
        </Grid>
        <Typography variant="h6" className={VerifyStyles.margin_x_y_step_vaccine}>
          Step 2/2. Work
        </Typography>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} xs={12}>
            <SelectWithLabel  fullWidth placeholder="Age" variant="outlined" label="Where do you work?"
            />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <SelectWithLabel  fullWidth placeholder="Age" variant="outlined" label="Who is your employer?"
            />
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <TextFieldWithLabel id="describes-you" placeholder="Which best describes you? " label="Which best describes you? " type="string" 
            />
          </Grid>
        </Grid>
        <div
          className={clsx(styleGeneral.alignItems, VerifyStyles.container_policy)}
        >
          {
            <Checkbox defaultChecked color="default" className={styleGeneral.alignCheck}
            />
          }
          <Typography variant="subtitle2">
            Agree to{" "}
            <span className={styleGeneral.underline}>
              User Privacy Policy
            </span>{" "}
            and{" "}
            <span className={styleGeneral.underline}>
              Terms of Service
            </span>
          </Typography>
        </div>
        <Button variant="contained" color="primary" className={clsx(styleGeneral.buttonCenter)}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default VaccineVerify;
