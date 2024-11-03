import { Avatar, Text, Button, Paper } from "@mantine/core";

export function EmployeeCard({
  name,
  role,
  desc,
  img,
}: {
  name: string;
  role: string;
  desc: string;
  img: string;
}) {
  return (
    <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
      <Avatar src={img} size={120} radius={120} mx="auto" />
      <Text ta="center" fz="lg" fw={500} mt="md">
        {name}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        {role}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        {desc}
      </Text>
    </Paper>
  );
}
