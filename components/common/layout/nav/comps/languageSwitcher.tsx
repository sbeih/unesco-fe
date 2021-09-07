import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const LanguageSwitcher: React.FC = () => {
  const { locale } = useRouter();
  const currentLanguageLabel = languages.find(
    (lang) => lang.lang === locale
  )?.label;

  return (
    <Menu>
      <MenuButton as={Button} variant="white" size="md" color="brand.100">
        {currentLanguageLabel}
      </MenuButton>
      <MenuList borderColor="brand.700" zIndex={2}>
        {languages.map((lang) => (
          <LanguageItem key={lang.lang} {...lang} />
        ))}
      </MenuList>
    </Menu>
  );
};

interface IMenuItemProps {
  label: string;
  lang: string;
  symbol: string;
}

const LanguageItem: React.FC<IMenuItemProps> = ({ label, lang, symbol }) => {
  const { asPath, push } = useRouter();
  return (
    <MenuItem
      _focus={{ bgColor: "brand.700" }}
      command={symbol}
      onClick={async () => await push(asPath, undefined, { locale: lang })}
    >
      {label}
    </MenuItem>
  );
};

const languages = [
  {
    lang: "ar",
    label: "عربي",
    symbol: "أب",
  },
  {
    lang: "en",
    label: "English",
    symbol: "Ab",
  },
  {
    lang: "fr",
    label: "Française",
    symbol: "Ab",
  },
];
