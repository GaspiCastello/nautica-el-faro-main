import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { styles } from './styles';
import { makeStyles } from '@material-ui/core/styles';

import { ImageWithPlaceHolder } from '../ImageWithPlaceHolder/ImageWithPlaceHolder';

interface ImageAndLogoProps {
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageLayout?: string | undefined;
  logoSrc?: string;
  logoAlt?: string;
  logoWith?: number;
  logoHeight?: number;
  logoTitle?: string;
}

export const ImageAndLogo: React.FC<ImageAndLogoProps> = ({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  logoSrc,
  logoAlt,
  logoWith,
  logoHeight,
  logoTitle,
}) => {
  const useStyles = makeStyles(() => styles);
  const classes = useStyles();

  return (
    <Box className={classes.imgTitleContainer}>
      <ImageWithPlaceHolder
        src={imageSrc}
        alt={imageAlt}
        layout="responsive"
        width={imageWidth}
        height={imageHeight}
        quality={100}
      />
      <Box className={classes.logoTitleContainer}>
        {logoSrc && <ImageWithPlaceHolder src={logoSrc} alt={logoAlt} width={logoWith} height={logoHeight} />}
        <Typography variant="h1" color="secondary">
          {logoTitle}
        </Typography>
      </Box>
    </Box>
  );
};
