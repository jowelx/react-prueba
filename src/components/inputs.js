import { TextField, Typography } from "@material-ui/core";
import { generalStyles } from "../styles/general";


const InputsLabel  = ({ placeholder, label, type, disable = false, className, style, id }) => {
  const styleGeneral = generalStyles();
  return (
    <div  style={style}>
      <Typography  className={styleGeneral.letterSpacing}>
        {label}
      </Typography>
      <TextField className={styleGeneral.inputWidth} disabled={disable}m id={id}m variant="outlined"m placeholder={placeholder}m type={type}m fullWidthm />
    </div>
  );
};

export default InputsLabel ;
