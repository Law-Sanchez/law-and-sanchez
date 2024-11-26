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
  ScrollArea,
  Center,
} from "@mantine/core";
import {
  Calendar,
  DatePicker,
  DatesProvider,
  YearPickerInput,
} from "@mantine/dates";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import classes from "./Calendar.module.css";
import { useForm } from "@mantine/form";

export default function Home() {
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const form = useForm({
    initialValues: {
      year: null,
      make: "",
      model: "",
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
  const times = [
    "10:00 am",
    "11:00 am",
    "12:00 pm",
    "1:00 pm",
    "2:00 pm",
    "3:00 pm",
    "4:00 pm",
    "5:00 pm",
    "6:00 pm",
    "7:00 pm",
    "8:00 pm",
    "9:00 pm",
    "10:00 pm",
  ];
  const timeComponents = times.map((time, id) => (
    <Button
      key={id}
      onClick={() => {
        const index = selectedTimes.indexOf(time);
        const newList = [...selectedTimes];
        if (index > -1) {
          newList.splice(index, 1);
        } else {
          newList.push(time);
        }
        setSelectedTimes(newList);
      }}
      bg={selectedTimes.includes(time) ? "green" : "blue"}
    >
      {time}
    </Button>
  ));

  const [date, setDate] = useState<Date | null>(null);
  console.log(form.values);
  return (
    <Container>
      <Box h={50}></Box>
      <Stack>
        <Title ta={"center"}>Schedule an Appointment with us!</Title>
        {/* <Text size="xl">Hello</Text> */}
        <form onSubmit={form.onSubmit(() => {})}>
          <SimpleGrid cols={{ xs: 1, sm: 2 }}>
            <Center>
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
            </Center>
            <ScrollArea scrollbars="y" h={430}>
              <Stack>{timeComponents}</Stack>
            </ScrollArea>
          </SimpleGrid>
          <Group>
            <YearPickerInput
              label="Year"
              placeholder="Pick date"
              {...form.getInputProps("year")}
            />
            <TextInput
              label="Make"
              placeholder="Car make"
              {...form.getInputProps("make")}
            />
            <TextInput
              label="Model"
              placeholder="Car model"
              {...form.getInputProps("model")}
            />
          </Group>
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
            {...form.getInputProps("message")}
          />

          <Group ta="center" mt="xl">
            <Button type="submit" size="md">
              Schedule
            </Button>
          </Group>
        </form>
      </Stack>
    </Container>
  );
}
