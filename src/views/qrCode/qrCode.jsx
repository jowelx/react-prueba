import { Typography } from "@material-ui/core";
import { QrCodeStyles } from "../../styles/qr";
import QrCodeImage from "../../assets/qrCode.png";

const QrCode = () => {
  const qrStyles = QrCodeStyles();

  return (
    <div className={qrStyles.content}>
      <div className={qrStyles.contentItems}>
        <Typography className={qrStyles.digiVax_enterprise_qrCode}
        >
          DigiVax Enterprise
        </Typography>
        <Typography variant="body1" className={qrStyles.typography_qrCode}>
          Hi, Mark. Please present the below QR code to  Getty team member
          when providing self-attested
          proof of COVID-19 vaccination
        </Typography>
        <div className={qrStyles.marginQr}>
          <img src={QrCodeImage} width={200} height={200} alt="qrCode" />
        </div>
        <Typography  className={qrStyles.basic_margin_qrCode}>
          Your QR code
        </Typography>
        <Typography variant="subtitle1" className={qrStyles.basic_margin_qrCode}>
          Present this QR code to a Getty team member via your smartphone {" "}
          or physical copy when requested
        </Typography>
        <Typography variant="body2" className={qrStyles.textBot}>
          Please do not share your QR code except with authorized Getty team
          members
        </Typography>
      </div>
    </div>
  );
};

export default QrCode;
