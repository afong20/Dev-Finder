import {NavBar} from "./../navigation"
import Head from "next/head";
function DefaultLayout({children, ...props}) {
    return (
        <>
            <Head>
                <title>Drinks Ahoy!</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <NavBar/>
            {children}
        </>
    );
}

export default DefaultLayout;