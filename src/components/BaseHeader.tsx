import { Box } from "@mui/material";
import React from "react";

export default function BaseHeader({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <Box
      sx={{
        width: "100%",
        height: 250,
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(255, 255, 255, 0) 38.14%), url(/images/header.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        "&::before": {
          content: '""',
          top: 0,
          left: 0,
          position: "absolute",
          width: "100%",
          height: 80,
          background:
            "linear-gradient(180deg, #D8D8D8 0%, rgba(213, 205, 200, 0) 82.55%)",
        },
        "&::after": {
          content: '""',
          bottom: -3,
          left: 0,
          position: "absolute",
          width: "100%",
          height: 80,
          background:
            "linear-gradient(180deg, rgba(213, 205, 200, 0) 0%, #D5CDC8 82.55%)",
        },
      }}
    >
      {children}
    </Box>
  );
}
