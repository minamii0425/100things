import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { supabase } from "../libs/supabase";
import React from "react";
import "react-dropzone-uploader/dist/styles.css";

export const SessionContext =
  React.createContext<string | undefined>(undefined);

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // セッションの取得
  const [pageSession, setPageSession] = useState<string | undefined>(undefined);

  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    // console.log(data.session);
    setPageSession(data.session?.user.id);
  };

  getSession();

  return (
    <ChakraProvider>
      <SessionContext.Provider value={pageSession}>
        <Component {...pageProps} />
      </SessionContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
