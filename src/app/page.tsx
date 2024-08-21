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
        <Card withBorder shadow="sm" h={300} w={300} radius={200} p={0}>
          <Image src="/my-site/images/ljz.png" />
        </Card>
        <Text
          size="50px"
          h="60px"
          fw={700}
          variant="gradient"
          gradient={{ from: "red", to: "orange", deg: 90 }}
        >
          Lucas Zheng
        </Text>

        <Text size="25px" h="30px" fw={400} c="red">
          Problem solver and programmer
        </Text>
      </Stack>
      <Stack pl={"xl"}>
        <Title>Projects</Title>
        <SimpleGrid cols={3}>
          <ProjectCard
            src="/my-site/images/ezcheck.png"
            title="EZCheck"
            description="A novel authentication IoT system to secure maker lab tools."
          />
          <ProjectCard
            src="/my-site/images/ezfind.png"
            title="EZFind"
            description="A novel inventory finding and tracking system."
          />
          <ProjectCard
            src="/my-site/images/underwater360.png"
            title="Underwater360"
            description="A novel authentication IoT system to secure maker lab tools."
          />
          <ProjectCard
            src="/my-site/images/flysafe.png"
            title="FlySafe"
            description="Cheapest, modern AGL plane flight altimeter."
          />
          <ProjectCard
            src="/my-site/images/underwater360.png"
            title="Underwater360"
            description="A novel authentication IoT system to secure maker lab tools."
          />
          <ProjectCard
            src="/my-site/images/underwater360.png"
            title="Underwater360"
            description="A novel authentication IoT system to secure maker lab tools."
          />
        </SimpleGrid>
        <Title>Minis</Title>
        <SimpleGrid cols={3}>
          <ProjectCard
            src="/my-site/images/ezcheck.png"
            title="EZCheck"
            description="A novel authentication IoT system to secure maker lab tools."
          />
          <ProjectCard
            src="/my-site/images/ezcheck.png"
            title="EZCheck"
            description="A novel authentication IoT system to secure maker lab tools."
          />
          <ProjectCard
            src="/my-site/images/ezcheck.png"
            title="EZCheck"
            description="A novel authentication IoT system to secure maker lab tools."
          />
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}
