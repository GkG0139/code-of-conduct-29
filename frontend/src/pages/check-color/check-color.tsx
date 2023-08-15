import axios from 'axios';
import React, { useState } from 'react';

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
import getColorByColorCode from '../../utils';

function CheckColor() {
  const [data, setData] = useState<Data | null | undefined>(undefined);
  const [isLoading, setLoading] = useState(false);
  const [id, setId] = useState(''); // State for the student ID

  const handleSearch = React.useCallback(async () => {
    const url = `https://script.google.com/macros/s/AKfycbxBMhF9LQ71WRAuAbevIz4R_ja8AFoq-wtEHp_wfFLvGQCbO6G-J6KCp_3_tr9prBA/exec?searchText=${id}`;

    try {
      setLoading(true);
      const response = await axios.get<{ backgroundColor: string }>(url);
      if (!response.data) {
        setData(null);
        // eslint-disable-next-line no-console
        console.error('No data received');
      } else
        setData({
          color: getColorByColorCode(response.data.backgroundColor),
          colorCode: response.data.backgroundColor,
        });
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
      <Center maw="100%" h="100%" mx="auto">
        <Stack spacing="lg" align="center" maw="80vw">
          <Title order={2} size="h1" align="center">
            ตรวจสอบสีของสายรหัสคุณ
          </Title>
          <TextInput
            placeholder="รหัสนักศึกษา"
            radius="md"
            size="lg"
            withAsterisk
            value={id}
            onChange={(event) => setId(event.currentTarget.value)}
          />
          <Button
            variant="outline"
            radius="lg"
            size="lg"
            onClick={handleSearch}
            loading={isLoading}
          >
            ตรวจสอบ
          </Button>
          {renderTheResultSection()}
        </Stack>
      </Center>
    </BackgroundImage>
  );
}

export default CheckColor;
