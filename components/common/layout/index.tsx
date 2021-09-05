import { Box } from "@chakra-ui/react";
import { Header, Footer } from "./nav";
import { DESIGN_WIDTH, MD_DESIGN_WIDTH } from "constants/";

export const Layout: React.FC = ({ children }) => {
  return (
    <Box position="relative" overflowX="hidden">
      <Box
        maxW={{ lg: DESIGN_WIDTH, md: MD_DESIGN_WIDTH }}
        m={{ lg: "auto", md: 0 }}
      >
        <Header />
        {children}
        <Footer />
      </Box>
    </Box>
  );
};
