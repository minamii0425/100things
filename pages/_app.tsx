import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { supabase } from "../libs/supabase";
import React from "react";
import "react-dropzone-uploader/dist/styles.css";

export const SessionContext =
    React.createContext<string | undefined>(undefined);

const MyApp = ({
    Component,
    pageProps: { session, ...pageProps },
    body,
}: any) => {
    // セッションの取得
    const [pageSession, setPageSession] =
        useState<string | undefined>(undefined);

    const getSession = async () => {
        const { data, error } = await supabase.auth.getSession();
        // console.log(data.session?.user);
        setPageSession(data.session?.user.id);
    };

    getSession();
    const test = "test";

    return (
        <ChakraProvider>
            <SessionContext.Provider value={pageSession}>
                <Component {...pageProps} />
            </SessionContext.Provider>
        </ChakraProvider>
    );
};

export default MyApp;
