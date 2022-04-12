import React from "react";
import { Box, Typography } from "@material-ui/core";
import { styles } from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import { ImageWithPlaceHolder } from "../ImageWithPlaceHolder/ImageWithPlaceHolder";

interface SlideProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  body?: string;
  image?: any;
  bodyImageSrc?: string;
  bodyImageAlt?: string;
  bodyImageWidth?: number;
  bodyImageHeight?: number;
  onClick?: any;
}
export const Slide: React.FC<SlideProps> = ({
  src,
  alt,
  width,
  height,
  title,
  body,
  bodyImageSrc,
  bodyImageAlt,
  bodyImageWidth,
  bodyImageHeight,
  onClick,
}) => {
  const useStyles = makeStyles(() => styles);
  const classes = useStyles();
  return (
    <Box className={classes.slide}>
      <ImageWithPlaceHolder src={src} alt={alt} width={width} height={height} />
      <Typography variant="body1">{title}</Typography>
      {bodyImageSrc && (
        <Box className={classes.imgContainer}>
          <ImageWithPlaceHolder
            src={bodyImageSrc}
            alt={bodyImageAlt}
            width={bodyImageWidth}
            height={bodyImageHeight}
            onClick={onClick}
          />
        </Box>
      )}
      {body && (
        <Typography variant="h3" color="primary" className={classes.slideBody}>
          {body}
        </Typography>
      )}
    </Box>
  );
};
