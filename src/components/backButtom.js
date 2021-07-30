import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Typography } from "@material-ui/core";

export default function BackButtom({ setstep, number, styleGeneral }) {
  return (
    <div onClick={() => setstep(number)}>
      <KeyboardBackspaceIcon />
      <Typography >
        Back
      </Typography>
    </div>
  );
}
