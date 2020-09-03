import React from "react";
import {Box} from "@material-ui/core";
import Head from "next/dist/next-server/lib/head";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const useStyle = makeStyles(theme=>createStyles({

  containerStyle:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    minHeight:"100vh"
  },

  mainStyle:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    marginTop:"5rem",
    [theme.breakpoints.down(600)]:{
      flexDirection:"column"
    }
  }

}));

interface PageLayoutProps {
  children:React.ReactNode,
  headTitle:string
}

export default function PageLayout(props:PageLayoutProps) {

  const classes = useStyle();
  const margin = {xs:2, sm:3, md:5, lg:6, xl:9};

  return (
    <>
      <Head>
        <title>{props.headTitle}</title>
      </Head>

      <div className={classes.containerStyle}>

        <Header />

        <Box component="main"
             className={classes.mainStyle}
             mx={margin}
        >

          {props.children}

        </Box>

        <Footer/>

      </div>

    </>
  )

}