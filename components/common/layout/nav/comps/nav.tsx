import * as React from "react";
import { Box, Flex, Stack, Button } from "@chakra-ui/react";
import { Logo } from "./logo";
import { NavLinks } from "./navLinks";
import { LanguageSwitcher } from "./languageSwitcher";

interface IHeaderProps {
  inverted?: boolean;
}

export const Nav: React.FC<IHeaderProps> = ({ inverted }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>();
  return (
    <Box
      mt={12}
      height={["fit-content", 88]}
      color={inverted ? "white" : "brand.100"}
    >
      <Flex
        direction={["column", "row"]}
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo inverted={inverted} />
        <Button
          display={["block", "none"]}
          onClick={() => setIsOpen(!isOpen)}
          variant="ghost"
          size="lg"
        >
          ☰
        </Button>
        <Box display={[isOpen ? "block" : "none", "block"]}>
          <Flex alignItems="center">
            <Stack
              direction={["column", "row"]}
              spacing={8}
              alignItems="center"
            >
              <NavLinks />
              <LanguageSwitcher />
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
