import useMobile from "@hooks/useMobile";
import { Stack, Typography } from "@mui/material";
import React from "react";

export default function FirstSection() {
  const { isMobile } = useMobile();
  return (
    <Stack direction="row" justifyContent="center">
      <Stack sx={{ p: 2 }} spacing={1} maxWidth={!isMobile ? "80%" : "auto"}>
        <Typography fontSize={!isMobile ? 20 : 11}>{`guest1`} ơi!</Typography>
        <Typography fontSize={!isMobile ? 20 : 11}>
          Lá thư này được viết để thông báo về 1 ngày rất đặc biệt - là ngày mà
          {`inviter`} sẽ chính thức khép lại cuộc đời độc thân. {`inviter`} rất
          muốn gặp và nhận được lời chúc phúc của {`guest1`}.
        </Typography>
        <Typography fontSize={!isMobile ? 20 : 11}>
          Nên Noel này, lúc 16h00 ngày 24/12/2022, {`guest2`} nhất định phải có
          mặt nhé!
        </Typography>
      </Stack>
    </Stack>
  );
}
