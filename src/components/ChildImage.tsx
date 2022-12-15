import { Box } from "@mui/material";
import React from "react";
type Props = {
  image: string;
};
export default function ChildImage(props: Props) {
  return (
    <Box
      sx={{
        width: 110,
        height: 165,
        borderRadius: 1,
        background: `url(${props.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
