import { Stack, Box } from "@chakra-ui/react";
// TODO: convert to comosite component
// TODO: RTL left/right issues - whole app
// TODO: spacing/sizes numbers in theme - not px

interface ILayout {
  left: React.ReactNode;
  right: React.ReactNode;
}
export const Layout: React.FC<ILayout> = ({ left, right }) => (
  <Stack
    direction={["column", "row"]}
    width="100%"
    height="100%"
    spacing="47px"
    alignItems="flex-start"
  >
    <Box width={["100%", "68.8%"]}>{right}</Box>
    <Box width={["100%", "33.2%"]}>{left}</Box>
  </Stack>
);
