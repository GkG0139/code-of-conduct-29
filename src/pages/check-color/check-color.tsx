import axios from 'axios';
import React, { useState } from 'react';

import {
  Button, Center, Stack, TextInput, Title,
} from '@mantine/core';

import SearchResult from '../../components/SearchResult';
import { Student } from '../../types';

function CheckColor() {
  const [data, setData] = useState<Student | null>(null);
  const [id, setId] = useState(''); // State for the student ID

  const handleSearch = React.useCallback(async (): Promise<void> => {
    const url = `http://localhost:3000/api/student/${id}`;

    try {
      const response = await axios.get<Student[]>(url);
      // eslint-disable-next-line no-console
      if (!response.data) console.error('No data received');
      else setData(response.data[0]);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }, [id]);

  return (
    <Center maw="100%" h="100%" mx="auto">
      <Stack spacing="lg" align="center">
        <Title order={2} size="h1">
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
        <Button variant="outline" radius="lg" size="lg" onClick={handleSearch}>
          ตรวจสอบ
        </Button>
        {data ? <SearchResult data={data} /> : <div>No data found</div>}
      </Stack>
    </Center>
  );
}

export default CheckColor;
