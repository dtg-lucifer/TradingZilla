import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/loginForm.css";
import Navbar from "../components/Navbar";
import { useRouter as router } from "next/router";
import { Provider } from "react-redux";
import Footer from "../components/Footer";
import HeadName from "../components/HeadName";
import IndexNav from "../components/IndexNav";
import { SessionProvider } from "next-auth/react";
import { AnimatePresence } from "framer-motion";
import store from "../store/store";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    let urlPath = router().pathname;
    let urlPathArr = urlPath.split("/");
    if (urlPathArr.length == 2) {
        return (
            <Provider store={store}>
                <SessionProvider session={session}>
                    <AnimatePresence exitBeforeEnter>
                        <HeadName />
                        {urlPath == "/" ? <IndexNav /> : <Navbar />}
                        <Component {...pageProps} />
                        <Footer />
                    </AnimatePresence>
                </SessionProvider>
            </Provider>
        );
    } else {
        return (
            <Provider store={store}>
                <SessionProvider session={session}>
                    <AnimatePresence exitBeforeEnter>
                        <HeadName />
                        {!urlPathArr.includes("auth") && <Navbar />}
                        <Component {...pageProps} />
                        <Footer />
                    </AnimatePresence>
                </SessionProvider>
            </Provider>
        );
    }
}

export default MyApp;
