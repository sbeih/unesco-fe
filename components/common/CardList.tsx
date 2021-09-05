import { SimpleGrid, VStack, Text } from "@chakra-ui/react";
import { Card, ICardProps } from "./Card";

export interface ICardListProps {
  cards: ICardProps[];
  title?: string;
  subtitle?: string;
  columns?: number;
}

export const CardList: React.FC<ICardListProps> = ({
  cards,
  title,
  subtitle,
  columns = 3,
}) => {
  return (
    <VStack spacing={9} alignItems={["center", "flex-start"]}>
      {title && (
        <Text fontSize="2xl" fontWeight="bold">
          {title}
        </Text>
      )}
      {subtitle && (
        <Text fontSize="xl" fontWeight="light">
          {subtitle}
        </Text>
      )}
      <SimpleGrid columns={{ lg: columns, md: 1 }} spacing={10}>
        {cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};
