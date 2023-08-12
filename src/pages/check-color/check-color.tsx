import {
  Button, Center, Stack, TextInput, Title,
} from '@mantine/core';
import { useState } from 'react';
import axios from 'axios';
import SearchResult from '../../components/SearchResult';

interface Student {
  id: string;
  fullname: string;
  firstname: string;
  lastname: string;
  nickname: string;
  color: string;
  colorCode: string;
}

function CheckColor() {
  const [data, setData] = useState<Student | null>(null);
  const [id, setId] = useState(''); // State for the student ID

  const handleSearch = async () => {
    const url = `http://localhost:3000/api/student/${id}`;

    try {
      const response = await axios.get<Student[]>(url);
      if (!response.data) {
        // eslint-disable-next-line no-console
        console.error('No data received');
        return;
      }
      setData(response.data[0]);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  const handleClick = () => {
    handleSearch();
  };

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
        <Button variant="outline" radius="lg" size="lg" onClick={handleClick}>
          ตรวจสอบ
        </Button>
        {data ? <SearchResult data={data} /> : <div>No data found</div>}
      </Stack>
    </Center>
  );
}

export default CheckColor;
