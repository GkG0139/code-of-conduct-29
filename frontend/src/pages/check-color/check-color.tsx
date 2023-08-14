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
import { Student } from '../../types';
import StyledMermaidImage from '../../components/mermiad-image';

function CheckColor() {
  const [data, setData] = useState<Student | null | undefined>(undefined);
  const [isLoading, setLoading] = useState(false);
  const [id, setId] = useState(''); // State for the student ID

  const handleSearch = React.useCallback(async () => {
    const url = `http://localhost:3000/api/student/${id}`;

    try {
      setLoading(true);
      const response = await axios.get<Student[]>(url);
      if (!response.data) {
        setData(null);
        // eslint-disable-next-line no-console
        console.error('No data received');
      } else setData(response.data[0]);
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
    if ('id' in data) return <SearchResult data={data} />;
    return null;
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
