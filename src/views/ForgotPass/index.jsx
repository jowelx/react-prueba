import { useState } from "react";
import { generalStyles } from "../../styles/general";
import { recoveryStyle } from "../../styles/recoveryPass"
import PassRecovery from "./passRecovery";
import SendMessage from "./sendMessage";

const MainRecovery = () => {
  const [step, setstep] = useState(1);
  const styleGeneral = generalStyles();
  const styleRecovery = recoveryStyle();
  return (
  <>
      {step === 1 && (
        <SendMessage styleGeneral={styleGeneral} styleRecovery={styleRecovery} setstep={setstep} />
      )}
      {step === 2 && <PassRecovery styleGeneral={styleGeneral} styleRecovery={styleRecovery}/>}
    </>
  );
};

export default MainRecovery;
