import { ReactElement, ReactNode } from "react";
import React from "react";
import NavBar from "../navBar/navBar";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import { Box } from "@material-ui/core";
import { Footer } from "../Footer/Footer";

const Layout = ({ children }: { children: ReactNode }): ReactElement => {
  const useStyles = makeStyles(() => styles);
  const classes = useStyles();
  return (
    <Box className={classes.totalContainer}>
      <NavBar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
