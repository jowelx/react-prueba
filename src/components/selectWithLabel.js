import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Typography } from "@material-ui/core";
import { generalStyles } from "../styles/general";

const selectWithLabel = ({ fullWidth, placeholder, label, variant }) => {
  const styleGeneral = generalStyles();
  return (
    <>
      <Typography variant="body1" className={styleGeneral.generalJustification}>
        {label}
      </Typography>
      <Select fullWidth={fullWidth} placeholder={placeholder} variant={variant} defaultValue="">
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </>
  );
};

export default selectWithLabel;
