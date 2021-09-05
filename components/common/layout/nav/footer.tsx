import { Center, Box } from "@chakra-ui/layout";
import { Nav } from "./comps/nav";

export const Footer: React.FC = () => {
  return (
    <footer>
      <Center
        height="292px"
        width="100vw"
        bgColor="brand.100"
        position="absolute"
        left={0}
        mt={20}
      >
        <Box>
          <Nav inverted />
        </Box>
      </Center>
    </footer>
  );
};
