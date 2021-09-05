import { Link, Text, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import { SearchIcon } from "@/icons/index";
import { FormattedMessage } from "react-intl";

export const NavLinks: React.FC = () => {
  return (
    <>
      <Box mt={[10, 0]}>
        <SearchIcon />
      </Box>
      {links.map((link, i) => (
        <NavLink key={i} label={link.label} href={link.href} />
      ))}
    </>
  );
};

type INavLinkProps = NavLinkType;

const NavLink: React.FC<INavLinkProps> = ({ label, href }) => {
  return (
    <Link as={NextLink} href={href}>
      <a>
        <Text fontSize="md" fontWeight="400">
          <FormattedMessage id={label} />
        </Text>
      </a>
    </Link>
  );
};

type NavLinkType = {
  label: string;
  href?: string;
};

const links: NavLinkType[] = [
  {
    label: "common.nav.logo.links.1",
    href: "/",
  },
  {
    label: "common.nav.logo.links.2",
    href: "/",
  },
  {
    label: "common.nav.logo.links.3",
    href: "/",
  },
  {
    label: "common.nav.logo.links.4",
    href: "/",
  },
  {
    label: "common.nav.logo.links.5",
    href: "/",
  },
  {
    label: "common.nav.logo.links.6",
    href: "/",
  },
  {
    label: "common.nav.logo.links.7",
    href: "/",
  },
  {
    label: "common.nav.logo.links.8",
    href: "/",
  },
];
