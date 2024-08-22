"use client";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import { HeroImageRight } from "@/components/HeroImageRight";
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
      <HeroImageRight />
      <Text>
        Hello world 
      </Text>
      <ContactUs>
        
      </ContactUs>
    </Stack>
  );
}
