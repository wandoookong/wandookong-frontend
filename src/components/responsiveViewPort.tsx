import React from "react";
import { useMediaQuery } from "react-responsive";

export const IsMobile = () => {
  const mobile = useMediaQuery({ query: "(max-width: 360px;)" });
  return mobile;
};
