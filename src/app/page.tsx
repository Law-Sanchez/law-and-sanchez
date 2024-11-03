"use client";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import { GetInTouch } from "@/components/GetInTouch/GetInTouch";
import { HeroImageRight } from "@/components/HeroImageRight/HeroImageRight";
import { Team } from "@/components/Team/Team";
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
  Container,
} from "@mantine/core";

export default function Home() {
  return (
    <Stack>
      <HeroImageRight />
      <Text></Text>
      {/* <ContactUs></ContactUs> */}
      <Container w={"100%"}>
        <Team />
        <Box h={20}></Box>
        <GetInTouch />
      </Container>
    </Stack>
  );
}
