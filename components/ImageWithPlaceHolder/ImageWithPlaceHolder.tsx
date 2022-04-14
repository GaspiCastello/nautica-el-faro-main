import React from "react";
import Image from "next/image";
// import logoGris from "../../assets/logoNauticaGray.svg";

interface ImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  layout?: "fixed" | "intrinsic" | "responsive" | undefined;
  quality?: number;
  onClick?: any;
}
export const ImageWithPlaceHolder: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  layout,
  quality,
  onClick,
}) => {
  return (
    <Image
      src={src || "logoGris"}
      alt={alt || "logoGris"}
      width={width || 32}
      height={height || 32}
      layout={layout || "fixed"}
      quality={quality || 100}
      onClick={onClick}
    />
  );
};
