import type { AppProps } from "next/app";
import Head from "next/head";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PacmanLoader from "react-spinners/PacmanLoader";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "@/styles/index.css";
import { BrowserRouter } from "react-router-dom";

const MyApp = ({ Component, pageProps }: AppProps) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>SecRent</title>
            </Head>
           
            {loading ? (
                <PacmanLoader
                    color={"#283EA3"}
                    loading={loading}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    style={{ position: "fixed", top: "45%", left: "45%" }}
                />
            ) : (
                <>
                    <NavBar />
                    <Component {...pageProps} />
                    <Footer />
                </>
            )}
        </>
    );
};

export default MyApp;
