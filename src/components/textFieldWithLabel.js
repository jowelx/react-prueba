import { TextField, Typography } from "@material-ui/core";
import { generalStyles } from "../styles/general";

const TextFieldWithLabel = ({
  placeholder,
  label,
  type,
  disable = false,
  className,
  style,
  id
}) => {
  const styleGeneral = generalStyles();
  return (
    <div className={className} style={style}>
      <Typography variant="body1" className={styleGeneral.generalJustification}>
        {label}
      </Typography>
      <TextField
        disabled={disable}
        id={id}
        variant="outlined"
        placeholder={placeholder}
        type={type}
        fullWidth
      />
    </div>
  );
};

export default TextFieldWithLabel;
