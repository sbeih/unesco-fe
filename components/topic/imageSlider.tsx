import { Flex, Img } from "@chakra-ui/react";
import ScrollContainer from "react-indiana-drag-scroll";

interface IImageSliderProps {
  images: string[];
}

export const ImageSlider: React.FC<IImageSliderProps> = ({ images }) => {
  return (
    <ScrollContainer className="scroll-container" vertical={false}>
      <Flex
        width="100%"
      >
        {images.map((img, i) => (
          <Img key={i} src={img} height={["400px", "679px"]} me="40px" />
        ))}
      </Flex>
    </ScrollContainer>
  );
};
