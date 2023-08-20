import { Box, Title } from '@mantine/core';
import styled from 'styled-components';
import DefaultImage from '../assets/images/mermaid.png';
import RubyTangle from '../assets/images/Red_Octopus.png';
import LemonPuff from '../assets/images/Yellow_PufferFish.png';
import WaveBlue from '../assets/images/Blue_Dolphin.png';
import RosyLotl from '../assets/images/Pink_Axolotl.png';
import JadyExplorer from '../assets/images/Green_Turtle.png';
import SunnyFin from '../assets/images/Orange_ClownFish.png';
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
    padding: 1rem;
  }
`;

const StyleTitle1 = styled(Title)`
  color: #313866;
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const StyleTitle2 = styled(Title)`
  color: #313866;
  font-size: 2rem;

  @media (max-width: 820px) {
    font-size: 1.5rem;
  }
`;

const StyleTitle3 = styled(Title)`
  font-size: 3rem;

  @media (max-width: 820px) {
    font-size: 2.5rem;
  }
`;

const ResponsiveImage = styled.img`
  max-width: 18rem;
  width: auto;
  height: auto;

  @media (max-width: 820px) {
    max-width: 15rem;
  }

  animation: moving 1s infinite alternate;
  filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.40));

  @keyframes moving {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
  }
`;

interface ColorToImageMap {
  [key: string]: string;
}
interface SearchResultProps {
  data: Data | null;
}

const colorToImageMap: ColorToImageMap = {
  RubyTangle,
  LemonPuff,
  WaveBlue,
  RosyLotl,
  JadyExplorer,
  SunnyFin,
};

function SearchResult({ data }: SearchResultProps) {
  const color = data?.color;
  const colorImageSrc = color
    ? colorToImageMap[color] || DefaultImage
    : DefaultImage;
  if (data?.color === 'undefined') {
    return (
      <Box bg="rgba(255, 255, 255, 0.85)" p="xl" sx={{ borderRadius: '20px' }}>
        <StyleTitle1
          color="#3A3A3A"
          order={3}
          weight={800}
          align="center"
          sx={{ textShadow: '0px 4px 5px rgba(0, 0, 0, 0.25)' }}
        >
          Group Colors
        </StyleTitle1>
        <Title
          color="#3A3A3A"
          order={3}
          weight={800}
          align="center"
          size="2rem"
          sx={{ textShadow: '0px 4px 5px rgba(0, 0, 0, 0.25)' }}
        >
          ไม่มีข้อมูลจ้า🥲
          <br />
          ลองใส่ใหม่นะ
        </Title>
      </Box>
    );
  }
  return (
    <Box bg="rgba(255, 255, 255, 0.85)" p="xl" sx={{ borderRadius: '20px' }}>
      <StyleTitle2
        color="#3A3A3A"
        order={3}
        weight={800}
        align="center"
        size="h2"
        sx={{ textShadow: '0px 4px 5px rgba(0, 0, 0, 0.25)' }}
      >
        Group Colors
      </StyleTitle2>
      <Container>
        <StyleTitle3
          color={data?.colorCode ?? '#313866'}
          order={3}
          weight={800}
          align="center"
          sx={{ textShadow: '0px 4px 5px rgba(0, 0, 0, 0.25)' }}
        >
          {data?.color}
        </StyleTitle3>
        <ResponsiveImage
          src={colorImageSrc}
          aria-hidden
          alt="Color Image"
          style={data?.color === 'WaveBlue' ? { maxHeight: '12rem' } : {}}
        />
      </Container>
    </Box>
  );
}

export default SearchResult;
