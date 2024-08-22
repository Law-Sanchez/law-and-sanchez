"use client";
import ProjectCard from "@/components/ProjectCard";
import {
  Box,
  Card,
  Group,
  Image,
  Stack,
  Title,
  Text,
  Divider,
  SimpleGrid,
} from "@mantine/core";

export default function Home() {
  return (
    <Stack>
      <Stack align="center">
        <Card withBorder shadow="sm" h={300} p={0}>
          <Image src="/images/car.png" />
        </Card>
        <Text
          size="50px"
          h="60px"
          fw={700}
          variant="gradient"
          gradient={{ from: "red", to: "orange", deg: 90 }}
        >
          Law and Sanchez
        </Text>
        <Text size="25px" h="30px" fw={400} c="red">
          Automotive service... unlike any other
        </Text>
      </Stack>
      <Stack pl={"xl"}>
        <Title>Services</Title>
      </Stack>
    </Stack>
  );
}
