import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { styles } from './styles';
import { makeStyles } from '@material-ui/core/styles';

export const Footer = () => {
  const useStyles = makeStyles(() => styles);
  const classes = useStyles();

  return (
    <Box className={classes.footerContainer}>
      <Typography color="primary" variant="h3">
        Nautica El Faro - 0342-155172215
      </Typography>
    </Box>
  );
};
