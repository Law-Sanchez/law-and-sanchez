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
  Button,
  Textarea,
  TextInput,
} from "@mantine/core";
import { Calendar, DatePicker, DatesProvider } from "@mantine/dates";
import dayjs from "dayjs";
import { useState } from "react";
import classes from "./Calendar.module.css";
import { useForm } from "@mantine/form";

export default function Home() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });
  const [date, setDate] = useState<Date | null>(null);
  return (
    <Container ta={"center"}>
      <Title ta={"center"}>Schedule an Appointment with us!</Title>

      <form onSubmit={form.onSubmit(() => {})}>
        <DatesProvider settings={{ consistentWeeks: true }}>
          <DatePicker
            size="xl"
            value={date}
            onChange={setDate}
            allowDeselect
            maxLevel="month"
            type="default"
          />
        </DatesProvider>

        <SimpleGrid cols={{ sm: 1, md: 2 }} mt="xl">
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps("email")}
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps("subject")}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps("subject")}
        />

        <Group ta="center" mt="xl">
          <Button type="submit" size="md">
            Schedule
          </Button>
        </Group>
      </form>
    </Container>
  );
}
