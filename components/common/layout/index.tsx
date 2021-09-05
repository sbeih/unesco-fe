import { Box } from "@chakra-ui/react";
import { Header, Footer } from "./nav";
import { DESIGN_WIDTH, MD_DESIGN_WIDTH } from "constants/";

export const Layout: React.FC = ({ children }) => {
  return (
    <Box position="relative" overflowX="hidden">
      <Box maxW={[MD_DESIGN_WIDTH, DESIGN_WIDTH]} m={[5, "auto"]}>
        <Header />
        {children}
        <Footer />
      </Box>
    </Box>
  );
};
