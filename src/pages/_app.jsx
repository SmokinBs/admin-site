import { UserProvider } from "@auth0/nextjs-auth0";
import LuxonUtils from "@date-io/luxon";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <MuiPickersUtilsProvider utils={LuxonUtils}>
                <UserProvider>
                    <Component {...pageProps} />
                </UserProvider>
            </MuiPickersUtilsProvider>
        </>
    );
}

export default MyApp;
