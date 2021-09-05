import { Box } from "@chakra-ui/react";

export const GradientDivider: React.FC = () => {
  return (
    <Box
      bgGradient="linear-gradient(264.72deg, #F0F0ED 12.7%, rgba(240, 240, 237, 0) 82.08%)"
      height="950px"
      width="20%"
      zIndex={1}
      display={["none", "block"]}
    ></Box>
  );
};
