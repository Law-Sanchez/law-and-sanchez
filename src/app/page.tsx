"use client";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import { GetInTouch } from "@/components/GetInTouch/GetInTouch";
import { HeroImageRight } from "@/components/HeroImageRight/HeroImageRight";
import { Service } from "@/components/Service/Service";
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
      {/* <Image src={"images/logo/logo.png"}></Image> */}
      <Container w={"100%"}>
        <Service />
        <Box h={50}></Box>
        <Team />
        <Box h={50}></Box>
        <GetInTouch />
      </Container>
    </Stack>
  );
}
