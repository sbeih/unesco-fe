import {
  Link,
  Text,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { SearchIcon } from "@/icons/index";
import { FormattedMessage } from "react-intl";

enum LinkType {
  Dropdown,
  Link,
}

export const NavLinks: React.FC = () => {
  return (
    <>
      <Box mt={[10, 0]}>
        <SearchIcon />
      </Box>
      {links.map((link, i) => (
        <>
          {link.type === LinkType.Dropdown ? (
            <NavLinkDropDown
              key={i}
              label={link.label}
              navLinks={link.navLinks!}
            />
          ) : (
            <NavLink key={i} label={link.label} href={link.href} />
          )}
        </>
      ))}
    </>
  );
};

type INavLinkProps = {
  label: string;
  href: string;
};

const NavLink: React.FC<INavLinkProps> = ({ label, href }) => (
  <Link as={NextLink} href={href}>
    <a>
      <Text fontSize="md" fontWeight="400">
        <FormattedMessage id={label} />
      </Text>
    </a>
  </Link>
);

interface INavLinkDropDownProps {
  navLinks: NavLinkType[];
  label: string;
}

const NavLinkDropDown: React.FC<INavLinkDropDownProps> = ({
  navLinks,
  label,
}) => {
  return (
    <Menu>
      <MenuButton>
        <Text fontSize="md" fontWeight="400">
          <FormattedMessage id={label} />
        </Text>
      </MenuButton>
      <MenuList zIndex={2} borderColor="brand.700">
        {navLinks.map((link, i) => (
          <MenuItem _focus={{ bgColor: "brand.700" }}>
            <NavLink key={i} {...link} />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

type NavLinkType = {
  label: string;
  href: string;
  type?: LinkType;
  navLinks?: NavLinkType[];
};

const links: NavLinkType[] = [
  {
    label: "common.nav.logo.links.1",
    href: "/",
    type: LinkType.Dropdown,
    navLinks: [
      { label: "common.nav.logo.links.1", href: "/" },
      { label: "common.nav.logo.links.1", href: "/" },
    ],
  },
  {
    label: "common.nav.logo.links.2",
    href: "/",
    type: LinkType.Link,
  },
  {
    label: "common.nav.logo.links.3",
    href: "/",
    type: LinkType.Link,
  },
  {
    label: "common.nav.logo.links.4",
    href: "/",
    type: LinkType.Link,
  },
  {
    label: "common.nav.logo.links.5",
    href: "/",
    type: LinkType.Link,
  },
  {
    label: "common.nav.logo.links.6",
    href: "/",
    type: LinkType.Link,
  },
  {
    label: "common.nav.logo.links.7",
    href: "/",
    type: LinkType.Link,
  },
  {
    label: "common.nav.logo.links.8",
    href: "/",
    type: LinkType.Link,
  },
];
