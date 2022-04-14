import React from 'react';
import { Box } from '@material-ui/core';
import { styles } from './styles';
import { makeStyles } from '@material-ui/core/styles';
import contact from '../../assets/contact.svg';
import ubicacion from '../../assets/location.png';
import clock from '../../assets/clock.svg';
import { Slide } from '../Slide/Slide';
import miniaturaUbic from '../../assets/ubicacionMiniatura.png';

export const Slides = () => {
  const useStyles = makeStyles(() => styles);
  const classes = useStyles();

  const openInNewTab = () => {
    const newWindow = window.open('https://goo.gl/maps/PnkvJZKZgMgJYaFa8', '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Box className={classes.slidesContainer}>
      <Slide src={contact} alt="contact" width={32} height={32} title="Contacto" body="0342-155-172215 (Martin)" />
      <Slide
        src={ubicacion}
        alt="ubicacion"
        width={32}
        height={34}
        title="Ubicación"
        onClick={openInNewTab}
        bodyImageSrc={miniaturaUbic}
        bodyImageAlt="miniaturaUbic"
        bodyImageWidth={250}
        bodyImageHeight={200}
      />
      <Slide
        src={clock}
        alt="clock"
        width={32}
        height={32}
        title="Horarios"
        body="De Miercoles a Lunes de 18hs a 21hs (Martes cerrado)"
      />
    </Box>
  );
};
