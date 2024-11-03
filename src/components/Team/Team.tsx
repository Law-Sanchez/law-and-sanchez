import {
  Avatar,
  Text,
  Button,
  Paper,
  SimpleGrid,
  Stack,
  Title,
} from "@mantine/core";
import { EmployeeCard } from "./EmployeeCard";

export function Team() {
  const items = [
    {
      name: "Lawrence",
      role: "Mechanic",
      desc: "Experienced mechanic",
      img: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    },
    {
      name: "Bob",
      role: "Assistant",
      desc: "Experienced mechanic",
      img: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    },
    {
      name: "Frank",
      role: "Engineer",
      desc: "Oil replacer",
      img: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    },
  ];
  const employeeCards = items.map((item) => (
    <EmployeeCard
      name={item.name}
      role={item.role}
      desc={item.desc}
      img={item.img}
      key={item.name}
    />
  ));
  return (
    <Stack>
      <Title>Meet our team</Title>
      <SimpleGrid cols={{ base: 2, md: 3 }}>{employeeCards}</SimpleGrid>
    </Stack>
  );
}
