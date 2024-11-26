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
  Button,
} from "@mantine/core";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Stack>
      <Text>Hello</Text>
      <Button
        onClick={() => {
          router.push("/write");
        }}
      >
        Click
      </Button>
    </Stack>
  );
}
