import { extendTheme } from "@chakra-ui/react";

const fonts = {
  body: "Almarai",
  heading: "Almarai",
  mono: "Almarai",
};

const fontSizes = {
  xs: "12px",
  sm: "14px",
  md: "18px",
  lg: "19px",
  xl: "24px",
  "2xl": "36px",
  "3xl": "44px",
  "4xl": "48px",
};

const colors = {
  brand: {
    100: "#000000",
    200: "#000000CC",
    300: "#00000099",
    400: "#535353",
    500: "#F0F0ED",
    600: "#EEEEEE",
  },
};

const styles = {
  global: {
    body: {
      background: "brand.500",
      color: "brand.100",
    },
  },
};

const direction = (locale: string) => (locale === "ar" ? "rtl" : "ltr");

const components = {
  Button: {
    sizes: {
      md: {
        width: "99px",
        height: "53px",
        fontSize: "sm",
      },
      lg: {
        width: "173px",
        height: "64px",
        fontSize: "md",
      },
    },
    variants: {
      primary: {
        color: "white",
        bgColor: "brand.100",
      },
      white: {
        color: "brand",
        bgColor: "white",
        border: "1px solid #EEE",
      },
    },
  },
};

const themeOverrides = (locale: string) => ({
  fonts,
  colors,
  styles,
  fontSizes,
  components,
  direction: direction(locale),
});

const customTheme = (locale: string) => {
  console.log({ tO: themeOverrides(locale) });
  return extendTheme(themeOverrides(locale));
};

export default customTheme;
