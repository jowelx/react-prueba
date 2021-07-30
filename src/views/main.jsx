import { Typography } from "@material-ui/core";
import { generalStyles } from "../styles/general";

const Main = () => {
    const styleGeneral = generalStyles();
    return (
        <div
            className={styleGeneral.mainContainer}
        >
            <Typography variant="h1" className={styleGeneral.mainTypography} 
            >
                DigiVax Enterprise  
            </Typography>
            <a href="/login">
                <Typography variant="h4">Login</Typography>
            </a>
            <a href="/register">
                <Typography variant="h4">Register</Typography>
            </a>
            <a href="/recovery-password">
                <Typography variant="h4">Recovery Password</Typography>
            </a>
            <a href="/create-password">
                <Typography variant="h4">Create Password</Typography>
            </a>
            <a href="/qr-code">
                <Typography variant="h4">Qr Code</Typography>
            </a>
            <a href="/vaccine-verify">
                <Typography variant="h4">Vaccine Verify</Typography>
            </a>
        </div>
    );
}

export default Main;