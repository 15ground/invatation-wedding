import { Box, Stack, styled, Typography } from "@mui/material";
import { theme } from "@theme";
const WrapperBase = styled(Stack)({
  width: "100%",
  height: "100vh",
  backgroundColor: theme.palette.primary.main,
});
export default function HomePage() {
  return (
    <WrapperBase>
      <Box
        sx={{
          width: "100%",
          height: 250,
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(255, 255, 255, 0) 38.14%), url(/images/header.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          position: "relative",
          "&::before": {
            content: '""',
            top: 0,
            left: 0,
            position: "absolute",
            width: "100%",
            height: 88,
            background:
              "linear-gradient(180deg, #705A4D 0%, rgba(213, 205, 200, 0) 82.55%);",
          },
          "&::after": {
            content: '""',
            bottom: 0,
            left: 0,
            position: "absolute",
            width: "100%",
            height: 88,
            background:
              "linear-gradient(180deg, rgba(213, 205, 200, 0) 0%, #D5CDC8 82.55%);",
          },
        }}
      >
        <Typography
          sx={{ fontFamily: "Mea Culpa !important" }}
          align="center"
          color="#fff"
          fontSize={21}
          mt={7}
        >
          Hiếu & Hải
          <Typography
            sx={{ fontFamily: "Medula One !important" }}
            align="center"
            color="#fff"
            fontSize={13}
          >
            24.12.2022
          </Typography>
        </Typography>
      </Box>
    </WrapperBase>
  );
}
