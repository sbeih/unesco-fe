import { Box, Img } from "@chakra-ui/react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { MapItem } from "./mapItem";
import { useRouter } from "next/router";

export const MapImage: React.FC = () => {
  const { locale } = useRouter();
  const isRTl = locale === "ar";
  return (
    <Box
      width={"1246px"}
      position="absolute"
      left="-109px"
      height="774px"
      overflow="hidden"
      display={["none", "block"]}
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
            left={isRTl ? "-262px" : "0"}
            right={isRTl ? "-262px" : "0"}
            top="60px"
            background="linear-gradient(180deg, rgba(240, 240, 237, 0) 0%, #F0F0ED 100%)"
          />
          <Img src="/images/map.png" width="2040px" height="1115px" alt="map" />
          <MapItem
            cityResourceString="home.cover.map.Nablus"
            left="808px"
            top="140px"
            href="/city/1"
          />
          <MapItem
            cityResourceString="home.cover.map.Ramallah"
            left="682px"
            top="340px"
            href="/city/1"
          />
          <MapItem
            cityResourceString="home.cover.map.jerusalem"
            left="736px"
            top="445px"
            href="/city/1"
          />
          <MapItem
            cityResourceString="home.cover.map.hebron"
            left="618px"
            top="632px"
            href="/city/1"
          />
          <MapItem
            cityResourceString="home.cover.map.Gaza"
            left="101px"
            top="601px"
            href="/city/1"
          />
          <MapItem
            cityResourceString="home.cover.map.Khan"
            left="10px"
            top="775px"
            href="/city/1"
          />
        </TransformComponent>
      </TransformWrapper>
    </Box>
  );
};
