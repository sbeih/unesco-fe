import { Box } from "@chakra-ui/react";
import { ImageSlider } from "./imageSlider";

interface ITopProps {
  images: string[];
}

export const Top: React.FC<ITopProps> = ({ images }) => {
  return (
    <Box>
      <ImageSlider images={images} />
    </Box>
  );
};
