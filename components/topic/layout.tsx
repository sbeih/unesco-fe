import { HStack, Box } from "@chakra-ui/react";
// TODO: convert to comosite component
// TODO: RTL left/right issues - whole app
// TODO: spacing/sizes numbers in theme - not px

interface ILayout {
  left: React.ReactNode;
  right: React.ReactNode;
}
export const Layout: React.FC<ILayout> = ({ left, right }) => (
  <HStack width="100%" height="100%" spacing="47px" alignItems="flex-start">
    <Box width="68.8%">
      {right}
    </Box>
    <Box width="33.2%">
      {left}
    </Box>
  </HStack>
);
