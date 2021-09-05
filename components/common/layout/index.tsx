import { Box } from "@chakra-ui/react";
import { Header, Footer } from "./nav";
import { DESIGN_WIDTH } from "constants/";

export const Layout: React.FC = ({ children }) => {
  return (
    <Box position="relative" overflow="hidden">
      <Box maxW={DESIGN_WIDTH} m="auto">
        <Header />
        {children}
        <Footer />
      </Box>
    </Box>
  );
};
