import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";

export default function useMobile() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallDesktop = useMediaQuery("(width:1024px)");

  return { isMobile, isSmallDesktop };
}
