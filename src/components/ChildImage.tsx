import useMobile from "@hooks/useMobile";
import { Box } from "@mui/material";
import React from "react";
type Props = {
  image: string;
};
export default function ChildImage(props: Props) {
  const { isMobile } = useMobile();
  return (
    <Box
      sx={{
        width: !isMobile ? 375 : "33%",
        height: !isMobile ? 460 : 165,
        borderRadius: 1,
        background: `url(${props.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
