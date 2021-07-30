import { Button, Typography } from "@material-ui/core";
import TextArea from "../../components/textArea";
import BackButtom from "../../components/backButtom";
import { generalStyles } from "../../styles/general";
import { registerStyle } from "../../styles/register";

const Step3 = ({ setstep }) => {
  const styleGeneral = generalStyles();
  return (
    <div className={styleGeneral.form2}>
      <Typography  className={styleGeneral.tittle}  >
        Create your organization's <br />DigiVax  registration link
      </Typography>
      <div className={styleGeneral.inputsLink}>
        <TextArea placeholder="School74" type="string" className={styleGeneral.centerInput} />
        <Typography className={styleGeneral.marginBottom} >
          .mydigivax.com
        </Typography>
      </div>
      <div className={styleGeneral.center}>
        <BackButtom setstep={setstep} number={2} styleGeneral={styleGeneral}/>
        <Button variant="contained" color="primary" className={styleGeneral.buttonCenter} onClick={() => setstep(4)} >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step3;
