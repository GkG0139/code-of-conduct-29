import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

import {
  BackgroundImage,
  Button,
  Center,
  Stack,
  TextInput,
  Title,
} from '@mantine/core';

import UnderSeaBackgroundImage from '../../assets/images/background.png';
import MermaidImage from '../../assets/images/mermaid.png';
import SearchResult from '../../components/search-result';
import { Data } from '../../types';
import StyledMermaidImage from '../../components/mermiad-image';

const StyledTitle = styled(Title)`
  color: #313866;
  font-size: 2rem;
  margin-top: 7rem;

  @media (max-width: 480px) {
    margin-top: 6rem;
  }

  @media (min-width: 481px) {
    font-size: 3rem;
    margin-top: 6rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
    margin-top: 5.5rem;
  }
`;

const StyledTextInput = styled(TextInput)`
  width: 100%;
  max-width: 50vw;
  color: white;

  input {
    background-color: transparent;
    border-color: white;
    border-radius: 1.5rem;
    color: white;
    transition: border-color 0.3s;
  }

  input:focus {
    border-color: white;
    outline: none;
  }

  input::placeholder {
    color: white;
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    max-width: 30vw;
  }
`;

function CheckColor() {
  const [data, setData] = useState<Data | null | undefined>(undefined);
  const [isLoading, setLoading] = useState(false);
  const [id, setId] = useState('');

  const handleSearch = React.useCallback(async () => {
    const url = `https://script.google.com/macros/s/AKfycbxBMhF9LQ71WRAuAbevIz4R_ja8AFoq-wtEHp_wfFLvGQCbO6G-J6KCp_3_tr9prBA/exec?searchText=${id}`;

    try {
      setLoading(true);
      const response = await axios.get<{ backgroundColor: string }>(url);

      if (!response.data) {
        setData(null);
        // eslint-disable-next-line no-console
        console.error('No data received');
      } else {
        const colorCode = response.data.backgroundColor;
        let color;

        switch (colorCode) {
          case '#f44a4a':
          case '#ff6d6d':
            color = 'RubyTangle';
            break;
          case '#00b050':
          case '#92d050':
            color = 'JadyExplorer';
            break;
          case '#0070c0':
          case '#00b0f0':
            color = 'WaveBlue';
            break;
          case '#ffff33':
          case '#f5ff79':
            color = 'LemonPuff';
            break;
          case '#f6b26b':
          case '#ffe699':
            color = 'SunnyFin';
            break;
          case '#ff99f8':
          case '#ffd9fc':
            color = 'RosyLotl';
            break;
          default:
            color = 'undefined';
            // eslint-disable-next-line no-console
            console.error('Invalid color code');
            break;
        }

        setData({ color, colorCode });
      }
    } catch (error) {
      setData(null);
      // eslint-disable-next-line no-console
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  const renderTheResultSection = () => {
    if (data === null) return <div>No data found</div>;
    if (data === undefined) {
      return (
        <StyledMermaidImage src={MermaidImage} alt="Mermiad" height={500} />
      );
    }
    return <SearchResult data={data} />;
  };

  return (
    <BackgroundImage
      src={UnderSeaBackgroundImage}
      maw="100%"
      h="100%"
      mx="auto"
    >
      <form onSubmit={(event) => event.preventDefault()}>
        <Center maw="100%" h="100%" mx="auto">
          <Stack spacing="lg" align="center" maw="80vw">
            <StyledTitle order={2} size="h1" align="center">
              ตรวจสอบสีของสายรหัส
            </StyledTitle>
            <StyledTextInput
              placeholder="รหัสนักศึกษา"
              size="lg"
              withAsterisk
              value={id}
              onChange={(event) => setId(event.currentTarget.value)}
              type="number"
            />
            <Button
              variant="outline"
              radius="lg"
              size="lg"
              onClick={handleSearch}
              loading={isLoading}
              type="submit"
              sx={{
                color: 'white',
                borderColor: 'white',
                backgroundColor: 'transparent',
                ':hover': {
                  backgroundColor: 'white',
                  opacity: 0.5,
                  borderColor: 'white',
                  color: 'black',
                  transition: 'all 0.3s',
                },
              }}
            >
              ตรวจสอบ
            </Button>
            {renderTheResultSection()}
          </Stack>
        </Center>
      </form>
    </BackgroundImage>
  );
}

export default CheckColor;
