import { Box, Title } from '@mantine/core';

import TurtleImage from '../assets/images/turtle.png';
import { Data } from '../types';

interface SearchResultProps {
  data: Data | null;
}

function SearchResult({ data }: SearchResultProps) {
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
      <img src={TurtleImage} aria-hidden alt="Turtle Image" />
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
    </Box>
  );
}

export default SearchResult;
