import {
  Button, Center, Stack, TextInput, Title,
} from '@mantine/core';

function CheckColor() {
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
        />
        <Button variant="outline" radius="lg" size="lg">
          ตรวจสอบ
        </Button>
      </Stack>
    </Center>
  );
}

export default CheckColor;
