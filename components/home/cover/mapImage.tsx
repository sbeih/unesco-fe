import { Box, Img } from "@chakra-ui/react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { IMapItemProps, MapItem } from "./mapItem";
import { useRouter } from "next/router";
import { GradientVerticalDivider } from "./gradientDivider";
import { TAG_PAGE } from "@/common/routes";
const mapItems: IMapItemProps[] = [
  {
    cityResourceString: "home.cover.map.Nablus",
    left: "808px",
    top: "140px",
    href: `${TAG_PAGE}/1`,
  },
  {
    cityResourceString: "home.cover.map.Jenin",
    left: "729px",
    top: "-6px",
    href: `${TAG_PAGE}/1`,
  },
  {
    cityResourceString: "home.cover.map.Tobas",
    left: "911px",
    top: "44px",
    href: `${TAG_PAGE}/1`,
  },
  {
    cityResourceString: "home.cover.map.tulkarim",
    left: "602px",
    top: "62px",
    href: `${TAG_PAGE}/1`,
  },
  {
    cityResourceString: "home.cover.map.Ramallah",
    left: "682px",
    top: "340px",
    href: `${TAG_PAGE}/1`,
  },
  {
    cityResourceString: "home.cover.map.Qalqilia",
    left: "581px",
    top: "191px",
    href: `${TAG_PAGE}/1`,
  },
  {
    cityResourceString: "home.cover.map.Salfit",
    left: "664px",
    top: "242px",
    href: `${TAG_PAGE}/1`,
  },
  {
    cityResourceString: "home.cover.map.Ariha",
    left: "878px",
    top: "317px",
    href: `${TAG_PAGE}/1`,
  },
  {
    cityResourceString: "home.cover.map.jerusalem",
    left: "736px",
    top: "445px",
    href: `${TAG_PAGE}/1`,
  },
  {
    cityResourceString: "home.cover.map.beitlahim",
    left: "784px",
    top: "561px",
    href: `${TAG_PAGE}/1`,
  },
  {
    cityResourceString: "home.cover.map.hebron",
    left: "618px",
    top: "632px",
    href: `${TAG_PAGE}/1`,
  },
  {
    cityResourceString: "home.cover.map.Gaza",
    left: "101px",
    top: "601px",
    href: `${TAG_PAGE}/1`,
  },
  {
    cityResourceString: "home.cover.map.Khan",
    left: "16px",
    top: "738px",
    href: `${TAG_PAGE}/1`,
  },
];

export const MapImage: React.FC = () => {
  const { locale } = useRouter();
  const isRTl = locale === "ar";
  return (
    <Box
      width={"1246px"}
      position="absolute"
      insetEnd="-109px"
      height="774px"
      overflow="hidden"
      display={["none", "none", "none", "none", "block"]}
    >
      <TransformWrapper
        velocityAnimation={{ disabled: true }}
        panning={{ velocityDisabled: true }}
        alignmentAnimation={{ disabled: true }}
      >
        <TransformComponent>
          <Box
            position="absolute"
            width="2040px"
            height="942px"
            insetEnd={"-262px"}
            top="60px"
            background="linear-gradient(180deg, rgba(240, 240, 237, 0) 0%, #F0F0ED 100%)"
            zIndex={1}
          />
          <Img
            src="/images/map.png"
            width="2040px"
            height="1115px"
            alt="map"
            transform={isRTl ? "unset" : "scaleX(-1)"}
          />
          {mapItems.map((itemProps: IMapItemProps) => (
            <MapItem {...itemProps} />
          ))}
          <GradientVerticalDivider />
        </TransformComponent>
      </TransformWrapper>
    </Box>
  );
};
