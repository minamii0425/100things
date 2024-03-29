import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { supabase } from "../libs/supabase";
import React from "react";
import "react-dropzone-uploader/dist/styles.css";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import { theme } from "../utils/theme";

export const SessionContext =
    React.createContext<string | undefined>(undefined);

const MyApp = ({
    Component,
    pageProps: { session, ...pageProps },
    body,
}: any) => {
    console.log("NEXT_PUBLIC_NODE_ENV: " + process.env.NEXT_PUBLIC_NODE_ENV);
    return (
        <ChakraProvider theme={theme}>
            <SessionProvider>
                <Component {...pageProps} />
            </SessionProvider>
        </ChakraProvider>
    );
};

export default MyApp;
