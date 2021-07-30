import { useState } from "react";
import { generalStyles } from "../../../styles/general";
import CreatePass from "./createPass";
import Success from "./success";

const MainCreatePass = () => {
  const styleGeneral = generalStyles();
  const [step, setstep] = useState(1);

  return (
  <>
      {step === 1 && (
        <CreatePass styleGeneral={styleGeneral} setstep={setstep} />
      )}
      {step === 2 && <Success styleGeneral={styleGeneral} />}
    </>
  );
};

export default MainCreatePass;
