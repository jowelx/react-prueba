import { Button, Typography } from "@material-ui/core";
import clsx from "clsx";
import TextFieldWithLabel from "../../components/textFieldWithLabel";
import { generalStyles } from "../../styles/general";
import { registerStyle } from "../../styles/register";
import BackButtom from "../../components/backButtom";
import InputsLabel from "../../components/inputs";
const Step1 = ({ setstep }) => {
  const styleGeneral = generalStyles();
 
  return (
    <div className={styleGeneral.form2}>
      <Typography  className={clsx(styleGeneral.marginBottomGeneral,styleGeneral.tittle)}>
        Enter your <br/>organization name
      </Typography>
      <InputsLabel id="organization-name" placeholder="Enter Organization name" label="Organization name" type="string"/>
      <div className={clsx(styleGeneral.center, styleGeneral.marginTop)}>
        <BackButtom setstep={setstep} number={1} styleGeneral={styleGeneral} />
        <Button variant="contained" color="primary" className={clsx(styleGeneral.buttonCenter)} onClick={() => setstep(3)} >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step1;
