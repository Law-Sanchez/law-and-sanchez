import {
  Avatar,
  Text,
  Button,
  Paper,
  SimpleGrid,
  Stack,
  Title,
} from "@mantine/core";
import { ServiceCard } from "./ServiceCard";
import {
  IconCookie,
  IconDropCircle,
  IconFilter,
  IconGasStation,
  IconGauge,
  IconUser,
  IconWheel,
} from "@tabler/icons-react";

export function Service() {
  const items = [
    {
      title: "Oil changes",
      desc: "PLACEHOLDER",
      icon: IconGasStation,
    },
    {
      title: "Tire rotations",
      desc: "PLACEHOLDER",
      icon: IconWheel,
    },
    {
      title: "Oil filters",
      desc: "PLACEHOLDER",
      icon: IconDropCircle,
    },
    {
      title: "Air filters",
      desc: "PLACEHOLDER",
      icon: IconFilter,
    },
  ];
  const cards = items.map((item, id) => (
    <ServiceCard
      title={item.title}
      desc={item.desc}
      icon={item.icon}
      key={id}
    />
  ));
  return (
    <Stack>
      <Title>Our Services</Title>
      <Text size="xl">
        Regular automobile maintenance is crucial for ensuring the longevity and
        safety of your vehicle. We understand the importance of these practices
        and aim to provide you quick, high quality services across the board.
      </Text>
      <SimpleGrid cols={{ base: 2, md: 3 }}>{cards}</SimpleGrid>
    </Stack>
  );
}
