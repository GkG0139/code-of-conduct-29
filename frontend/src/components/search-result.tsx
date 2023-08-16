import { Box, Title } from '@mantine/core';
import styled from 'styled-components';
import DefaultImage from '../assets/images/mermaid.png';
import Red from '../assets/images/Red_Octopus.png';
import Yellow from '../assets/images/Yellow_PufferFish.png';
import Blue from '../assets/images/Blue_Dolphin.png';
import Pink from '../assets/images/Pink_Axolotl.png';
import Green from '../assets/images/Green_Turtle.png';
import Orange from '../assets/images/Orange_ClownFish.png';
import { Data } from '../types';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: auto;
  @media (max-width: 820px) {
    flex-direction: column;
    padding: 1rem;
  }

  @media (min-width: 821px) {
    flex-direction: row;
    padding: 3rem;
  }
`;

const ResponsiveImage = styled.img`
  max-width: 20rem;
  width: auto;
  height: auto;

  @media (max-width: 1024px) {
    max-width: 90%;
  }

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

interface ColorToImageMap {
  [key: string]: string;
}
interface SearchResultProps {
  data: Data | null;
}

const colorToImageMap: ColorToImageMap = {
  Red: Red,
  Yellow: Yellow,
  Blue: Blue,
  Pink: Pink,
  Green: Green,
  Orange: Orange,
};

function SearchResult({ data }: SearchResultProps) {
  const color = data?.color;
  const colorImageSrc = color
    ? colorToImageMap[color] || DefaultImage
    : DefaultImage;

  return (
    <Box bg="rgba(255, 255, 255, 0.85)" p="xl" sx={{ borderRadius: '20px' }}>
      <Title
        color="#3A3A3A"
        order={3}
        weight={800}
        align="center"
        size="h2"
        sx={{ textShadow: '0px 4px 5px rgba(0, 0, 0, 0.25)' }}
      >
        Group Colors
      </Title>
      <Container>
        <Title
          color={data?.colorCode ?? 'white'}
          order={3}
          weight={800}
          align="center"
          size="4rem"
          sx={{ textShadow: '0px 4px 5px rgba(0, 0, 0, 0.25)' }}
        >
          {data?.color}
        </Title>
        <ResponsiveImage src={colorImageSrc} aria-hidden alt="Color Image" />
      </Container>
    </Box>
  );
}

export default SearchResult;
