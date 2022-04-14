import React from 'react';
import { Box } from '@material-ui/core';
import rioPonton from '../../assets/rioPonton.png';
import logoGris from '../../assets/logoNauticaGray.svg';
import { Slides } from '../Slides/Slides';
import { ImageAndLogo } from '../ImageAndLogo/ImageAndLogo';
import galpones from '../../assets/galpones.png';
import galponAbierto from '../../assets/galponAbierto.png';
import sauce17 from '../../assets/sauce17.png';
const Landing = () => {
  return (
    <Box>
      <ImageAndLogo
        imageSrc={rioPonton}
        imageAlt="rioPonton"
        imageWidth={1200}
        imageHeight={478}
        logoSrc={logoGris}
        logoAlt="logoGris"
        logoWith={132}
        logoHeight={166}
        logoTitle="Vivi el río Coronda"
      />
      <Slides />
      <ImageAndLogo imageSrc={galpones} imageAlt="galpones" imageWidth={1200} imageHeight={478} />
      <ImageAndLogo imageSrc={galponAbierto} imageAlt="galponAbierto" imageWidth={1200} imageHeight={478} />
      <ImageAndLogo imageSrc={sauce17} imageAlt="sauce17" imageWidth={1200} imageHeight={478} />
    </Box>
  );
};

export default Landing;
