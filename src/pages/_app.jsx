import { Provider } from "next-auth/client";
import LuxonUtils from "@date-io/luxon";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import "../styles/styles.css";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <MuiPickersUtilsProvider utils={LuxonUtils}>
                <Provider session={pageProps.session}>
                    <Component {...pageProps} />
                </Provider>
            </MuiPickersUtilsProvider>
        </>
    );
}

export default MyApp;
