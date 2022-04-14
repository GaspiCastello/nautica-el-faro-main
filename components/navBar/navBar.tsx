import React from 'react';
import Image from 'next/image';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Toolbar, AppBar, Box } from '@material-ui/core';
import { styles } from './styles';

import NauticaLogoBlue from '../../assets/logoNauticaBlue.svg';
import Phone from '../../assets/phone.svg';

export default function NavBar() {
  const useStyles = makeStyles(() => styles);
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Box className={classes.leftContainer}>
            <Image src={NauticaLogoBlue} alt="logo" width={80} height={52} />

            <Typography color="primary" variant="h2">
              COMPLEJO NAUTICO EL FARO
            </Typography>
          </Box>
          <Box className={classes.rightContainer}>
            <Image src={Phone} alt="phone" width={24} height={24} />
            <Typography className={classes.phoneContact} color="primary" variant="h2">
              0342-155172215
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
