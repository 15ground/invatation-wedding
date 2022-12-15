import BaseHeader from "@components/BaseHeader";
import ChildImage from "@components/ChildImage";
import FirstSection from "@components/FirstSection";
import { Box, Grid, Stack, styled, Typography } from "@mui/material";
import { theme } from "@theme";
const WrapperBase = styled(Stack)({
  height: "auto",
  backgroundColor: theme.palette.primary.main,
});
export default function HomePage() {
  return (
    <WrapperBase>
      <BaseHeader>
        <>
          {" "}
          <Typography
            sx={{
              fontFamily: "Mea Culpa !important",
            }}
            align="center"
            color="#fff"
            fontSize={21}
            mt={6.5}
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
          <Typography
            fontSize={11}
            width={327}
            sx={{ position: "absolute", bottom: 40, left: 35, zIndex: 2 }}
          >
            {`“Đây không phải là thiệp cưới. Đây là một thư mời chứa một tình cảm đặc biệt gửi đến 1 người đặc biệt của {inviter} theo 1 cách đặc biệt nhất!`}
          </Typography>
        </>
      </BaseHeader>
      <FirstSection />
      <Stack
        sx={{
          height: 525,
          background: "url(/images/background.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            top: 0,
            left: 0,
            position: "absolute",
            width: "100%",
            height: 350,
            background:
              "linear-gradient(180deg, #D5CDC8 35.42%, rgba(217, 217, 217, 0) 100%)",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            bottom: -3,
            left: 0,
            position: "absolute",
            width: "100%",
            height: 200,
            background:
              "linear-gradient(180deg, rgba(213, 205, 200, 0) 0%, #D5CDC8 82.55%)",
          }}
        />
        <Stack
          direction="row"
          p={1.5}
          justifyContent="space-between"
          sx={{ zIndex: 2 }}
        >
          <ChildImage image="/images/1.jpeg" />
          <ChildImage image="/images/2.jpeg" />
          <ChildImage image="/images/3.jpg" />
        </Stack>
        <Stack
          direction="row"
          mt={10}
          p={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            sx={{
              width: 160,
              height: 220,
              borderRadius: 1,
              background: "url(/images/4.jpeg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "rotate(-8.82deg)",
            }}
          >
            <Box
              sx={{
                width: 160,
                height: 110,
                border: "4px solid #705A4D",
                borderRadius: "5px 5px 0px 0px",
                position: "relative",
                transform: "rotate(26deg)",
                mt: 2,
                ml: -1,
                "&::before": {
                  content: '"Love"',
                  textAlign: "right",
                  color: "#fff",
                  position: "absolute",
                  width: "100%",
                  height: 20,
                  background: "#705A4D",
                  border: "4px solid #705A4D",
                  borderRadius: "0px 0px 5px 5px",
                  bottom: -15,
                  left: -4,
                },
              }}
            />
          </Box>
          <Typography zIndex={2} fontSize={11} width={160} color="#FFFFFF">
            {`{inviters} tin rằng: “Đời người sẽ trải qua rất nhiều điều. Tất cả
            chúng ta rồi sẽ già đi và thứ đọng lại trong trí nhớ chỉ có 1 vài
            khoảnh khắc nào đấy thôi.”`}
          </Typography>
        </Stack>
      </Stack>
      <Stack p={2} spacing={1}>
        <Typography fontSize={11}>
          Nên đây không phải là một đám cưới hoành tráng nhất.{" "}
        </Typography>
        <Typography fontSize={11}>
          Nhưng đây sẽ là một đám cưới đặc biệt vì có những khách mời đặc biệt -
          những người đã và vẫn thương nhau bằng chân tình, bằng thanh xuân và
          bằng thứ tình cảm mà khoảng cách địa lý hay thời gian cũng không còn
          là vấn đề.
        </Typography>
        <Typography fontSize={11}>
          {`{guest1} ơi, hãy để inviters được đón {guest1} ở bữa tiệc này nhé! Để{" "}
          {inviter} có cơ hội được chia sẻ niềm hạnh phúc này, được cùng{" "}
          {guest1} nâng ly và cùng nhau biến đêm ấy trở thành khoảnh khắc để
          mình luôn nhớ về nhau nhé!`}
        </Typography>
        <Typography fontSize={11}> Thương - Nhớ - Trân trọng!</Typography>
      </Stack>
    </WrapperBase>
  );
}
