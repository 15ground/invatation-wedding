import BaseHeader from "@components/BaseHeader";
import ChildImage from "@components/ChildImage";
import FirstSection from "@components/FirstSection";
import useMobile from "@hooks/useMobile";
import { Box, Stack, styled, Typography } from "@mui/material";
import { theme } from "@theme";
import { useParams } from "react-router-dom";
const WrapperBase = styled(Stack)({
  height: "auto",
  backgroundColor: theme.palette.primary.main,
});
export default function HomePage() {
  const params = useParams<{ id: string }>();
  console.log("🚀 ~ file: HomePage.tsx:14 ~ HomePage ~ params", params)
  const { isMobile, isSmallDesktop } = useMobile();
  return (
    <WrapperBase>
      <BaseHeader height={!isMobile ? 700 : 300}>
        <>
          <Typography
            sx={{
              fontFamily: "Mea Culpa !important",
            }}
            align="center"
            color="#fff"
            fontSize={!isMobile ? 52 : 21}
            mt={!isMobile ? 12 : 8.5}
          >
            Hiếu & Hải
            <Typography
              sx={{ fontFamily: "Medula One !important" }}
              align="center"
              color="#fff"
              fontSize={!isMobile ? 42 : 13}
            >
              24.12.2022
            </Typography>
          </Typography>
        </>
      </BaseHeader>
      <Stack direction="row" justifyContent="center">
        <Typography
          fontSize={!isMobile ? 20 : 11}
          minWidth={320}
          maxWidth={!isMobile ? "80%" : "100%"}
          p={2}
        >
          {`Đây không phải là thiệp cưới. Đây là một thư mời chứa một tình cảm đặc biệt gửi đến 1 người đặc biệt của {inviter} theo 1 cách đặc biệt nhất!`}
        </Typography>
      </Stack>
      <FirstSection />
      <Stack
        sx={{
          height: !isMobile ? 1500 : 525,
          background: "url(/images/background.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: !isMobile ? "cover" : "436px",
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
            height: "100%",
            background:
              "linear-gradient(175.81deg, #D5CDC8 10.37%, rgba(255, 255, 255, 0) 62.88%, #D5CDC8 89.91%)",
            zIndex: 1,
          }}
        />
        <Stack
          direction="row"
          p={1.5}
          justifyContent={"center"}
          sx={{ zIndex: 2 }}
          spacing={isSmallDesktop ? 1.5 : !isMobile ? 10 : 1.5}
        >
          <ChildImage image="/images/1.jpeg" />
          <ChildImage image="/images/2.jpeg" />
          <ChildImage image="/images/3.jpg" />
        </Stack>
        <Stack
          direction="row"
          mt={!isMobile ? 30 : 10}
          p={2}
          alignItems="center"
          justifyContent={!isMobile ? "space-around" : "space-between"}
          zIndex={2}
        >
          <Box
            sx={{
              width: !isMobile ? 400 : 160,
              height: !isMobile ? 500 : 220,
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
                width: !isMobile ? 400 : 160,
                height: !isMobile ? 270 : 110,
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
          <Typography
            zIndex={2}
            fontSize={!isMobile ? 20 : 11}
            width={!isMobile ? "50%" : 160}
            color="#FFFFFF"
          >
            {`{inviters} tin rằng: “Đời người sẽ trải qua rất nhiều điều. Tất cả
            chúng ta rồi sẽ già đi và thứ đọng lại trong trí nhớ chỉ có 1 vài
            khoảnh khắc nào đấy thôi.”`}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        mt={!isMobile ? -15 : 0}
        zIndex={2}
      >
        <Stack p={2} spacing={1} maxWidth={!isMobile ? "80%" : "auto"}>
          <Typography fontSize={!isMobile ? 20 : 11}>
            Nên đây không phải là một đám cưới hoành tráng nhất.{" "}
          </Typography>
          <Typography fontSize={!isMobile ? 20 : 11}>
            Nhưng đây sẽ là một đám cưới đặc biệt vì có những khách mời đặc biệt
            - những người đã và vẫn thương nhau bằng chân tình, bằng thanh xuân
            và bằng thứ tình cảm mà khoảng cách địa lý hay thời gian cũng không
            còn là vấn đề.
          </Typography>
          <Typography fontSize={!isMobile ? 20 : 11}>
            {`{guest1} ơi, hãy để inviters được đón {guest1} ở bữa tiệc này nhé! Để{" "}
          {inviter} có cơ hội được chia sẻ niềm hạnh phúc này, được cùng{" "}
          {guest1} nâng ly và cùng nhau biến đêm ấy trở thành khoảnh khắc để
          mình luôn nhớ về nhau nhé!`}
          </Typography>
          <Typography fontSize={!isMobile ? 20 : 11}>
            {" "}
            Thương - Nhớ - Trân trọng!
          </Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{
          background: "#fff",
          textAlign: "center",
        }}
        spacing={1}
        pt={2}
      >
        <Typography
          color={theme.palette.primary.dark}
          fontSize={!isMobile ? 28 : 11}
        >
          Bữa tiệc sẽ được diễn ra tại:
        </Typography>
        <Typography
          color={theme.palette.primary.dark}
          sx={{ fontFamily: "Mea Culpa !important" }}
          fontSize={!isMobile ? 52 : 21}
        >
          La An Garden - Wedding & Party
        </Typography>
        <Typography
          color={theme.palette.primary.dark}
          sx={{ fontFamily: "Maven Pro !important" }}
          fontWeight={600}
          fontSize={!isMobile ? 56 : 21}
        >
          16:00 | 24/12/2022
        </Typography>
        <Typography
          color={theme.palette.primary.dark}
          sx={{ fontFamily: "Maven Pro !important" }}
          fontSize={!isMobile ? 28 : 11}
        >
          Địa chỉ: 471 Hùng Vương - P. Tân Lập - Tp Buôn Ma Thuột
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mt: "20px !important" }}>
          <Box
            sx={{
              width: "40%",
              height: !isMobile ? 1000 : 250,
              background: "url(/images/5.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Box
            sx={{
              width: "60%",
              height: !isMobile ? 1000 : 250,
              background: "url(/images/6.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Stack>
      </Stack>
      <Stack
        sx={{
          height: !isMobile ? 1000 : 600,
          background: "url(/images/bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: isSmallDesktop
            ? "cover"
            : !isMobile
            ? "contain"
            : "cover",
          backgroundPosition: "center",
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Stack spacing={1}>
          <Stack p={3} spacing={1.5} mt={5}>
            <Stack direction="row" alignItems="flex-start" spacing={2}>
              <Typography fontSize={!isMobile ? 18 : 11}>16h00</Typography>
              <Typography fontSize={!isMobile ? 18 : 11}>
                Đón khách <br /> Chụp hình cùng nhau <br /> Buffet nhẹ
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="flex-start" spacing={2}>
              <Typography fontSize={!isMobile ? 18 : 11}>17h00</Typography>
              <Typography fontSize={!isMobile ? 18 : 11}>Làm lễ</Typography>
            </Stack>
            <Stack direction="row" alignItems="flex-start" spacing={2}>
              <Typography fontSize={!isMobile ? 18 : 11}>17h30</Typography>
              <Typography fontSize={!isMobile ? 18 : 11}>
                Cùng nhau thưởng thức những món ăn hấp dẫn trên nền nhạc violon
                nhẹ nhàng.
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="flex-start" spacing={2}>
              <Typography fontSize={!isMobile ? 18 : 11}>19h30</Typography>
              <Typography fontSize={!isMobile ? 18 : 11}>
                Quẩy thật sung cùng những trò chơi hấp dẫn
              </Typography>
            </Stack>
          </Stack>

          <Box
            sx={{
              background: "url(/images/bn_brown.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: !isMobile ? "100% 300px" : "115% 174px",
              backgroundPosition: "center",
              p: !isMobile ? "100px 0px" : "38px 0px",
              color: "#fff",
              fontSize: !isMobile ? "14px" : "11px",
              lineHeight: 1.7,
              display: "flex",
              justifyContent: "center",
              pl: !isMobile ? 0 : "52px",
            }}
          >
            Lưu ý: <br /> 1/ Đến đúng giờ để không bỏ lỡ bất kỳ điều thú vị gì.{" "}
            <br />
            2/ Dress code: Be - Đen - Trắng <br /> 3/ 1 chiếc áo khoác nên được
            mang theo vì {isMobile && <br />} Đắk Lắk nay lạnh lắm :)
          </Box>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={1}
            mt="40px !important"
          >
            <Box
              sx={{
                width: !isMobile ? 44 : 24,
                height: !isMobile ? 44 : 24,
                border: "2px solid #fff",
                borderRadius: "100%",
              }}
            />
            <Box
              sx={{
                width: !isMobile ? 48 : 28,
                height: !isMobile ? 48 : 28,
                background: "#fff",
                borderRadius: "100%",
              }}
            />
            <Box
              sx={{
                width: !isMobile ? 48 : 28,
                height: !isMobile ? 52 : 28,
                background: "#000",
                borderRadius: "100%",
              }}
            />
          </Stack>
        </Stack>
      </Stack>
      <Box
        sx={{
          height: !isMobile ? 1200 : 500,
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            background: "url(/images/7.jpeg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "85%",
            opacity: 0.5,
            // transform: "scale(1.2)",
          },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: !isMobile ? 185 : 120,
            background: "#fff",
            position: "absolute",
            top: !isMobile ? 60 : 0,
            zIndex: 2,
            borderRadius: 1,
            textAlign: "center",
            p: 2,
          }}
        >
          <Typography fontSize={!isMobile ? 20 : 11}>
            {`{inviter} biết {guest1} sẽ có rất nhiều công việc cần giải quyết và
            đôi khi thật khó để sắp xếp thời gian nhưng hãy xử lý công việc sớm
            để chung vui`}
            <br />
            {`cùng {inviters} nhé.`}
            <br />
            Vì sẽ thật buồn nếu bữa tiệc vắng đi <br /> một người thật đặc biệt.{" "}
          </Typography>

          <Typography fontSize={!isMobile ? 20 : 11} mt={1}>
            Thương thật thương!
          </Typography>
        </Box>
      </Box>
    </WrapperBase>
  );
}
