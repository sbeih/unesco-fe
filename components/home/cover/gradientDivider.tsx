import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const GradientDivider: React.FC = () => {
  const { locale } = useRouter();
  const isRTl = locale === "ar";
  return (
    <Box
      bgGradient="linear-gradient(264.72deg, #F0F0ED 12.7%, rgba(240, 240, 237, 0) 80.88%)"
      height="950px"
      width="20%"
      zIndex={1}
      display={["none", "block"]}
      transform={isRTl ? "unset" : "scaleX(-1)"}
    ></Box>
  );
};

export const GradientVerticalDivider: React.FC = () => {
  return (
    <Box
      position="absolute"
      width="429px"
      height="1373px"
      insetEnd="356px"
      top="20px"
      background="linear-gradient(264.72deg, #F0F0ED 28.7%, rgba(240, 240, 237, 0) 98.08%)"
      zIndex={2}
      transform="rotate(90deg)"
    ></Box>
  );
};
