import { generalStyles } from "../styles/general";

const BannerLeft = ({ children }) => {
  const styleGeneral = generalStyles();
  return (
    <div className={styleGeneral.containerBannerLeft}
    >
      <div
        className={styleGeneral.circleleft}
      ></div>

      {children}
      <div
        className={styleGeneral.circleright}
      ></div>
    </div>
  );
};

export default BannerLeft;
