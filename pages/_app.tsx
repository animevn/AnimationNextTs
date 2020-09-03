import React, {useEffect} from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme/theme";
import {AppProps} from "next/app";

export default function MyApp(props:AppProps) {
  const {Component, pageProps} = props;

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  const mainStyle = {
    display:"flex",
    justifyContent:"space-between",
    minHeight:"100vh"
  };

  // noinspection HtmlUnknownTarget
  return (
    <>
      <Head>
        <title>My page</title>
        <link rel="icon" href="/next.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box flexDirection="column" style={mainStyle}>

          <Component {...pageProps} />

        </Box>

      </ThemeProvider>

    </>
  );
}


