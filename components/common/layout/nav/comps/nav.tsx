import * as React from "react";
import { Box, Flex, HStack } from "@chakra-ui/react";
import { Logo } from "./logo";
import { NavLinks } from "./navLinks";
import { LanguageSwitcher } from "./languageSwitcher";

interface IHeaderProps {
  inverted?: boolean;
}

export const Nav: React.FC<IHeaderProps> = ({ inverted }) => {
  return (
    <Box mt={12} height={88} color={inverted ? "white" : "brand.100"}>
      <Flex alignItems="center" justifyContent="space-between">
        <Logo />
        <Flex alignItems="center">
          <HStack spacing={8} alignItems="center">
            <NavLinks />
            <LanguageSwitcher />
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};
