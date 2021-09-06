import { Box, Img } from "@chakra-ui/react";
import SlickSlider from "react-slick";

interface IImageSliderProps {
  images: string[];
}

export const ImageSlider: React.FC<IImageSliderProps> = ({ images }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };
  return (
    <Box width="100%">
      <SlickSlider {...settings}>
        {images.map((img, i) => (
          <Img key={i} src={img} height={["400px", "679px"]} />
        ))}
      </SlickSlider>
    </Box>
  );
};
