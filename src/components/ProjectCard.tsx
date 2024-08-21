"use client";
import { Card, Title, Image, Text, useMantineTheme } from "@mantine/core";
import { useHover } from "@mantine/hooks";

export default function ProjectCard({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) {
  const theme = useMantineTheme();
  const { hovered, ref } = useHover();
  return (
    <Card
      ml={"xl"}
      withBorder
      shadow="sm"
      ref={ref}
      style={
        hovered
          ? {
              outlineColor: theme.colors.red[3],
              outlineWidth: 5,
              outlineStyle: "solid",
            }
          : {}
      }
    >
      <Card.Section>
        <Image src={src} height={160} fit="contain" alt="ezcheck" py={20} />
      </Card.Section>
      <Title order={2}>{title}</Title>
      <Text>{description}</Text>
    </Card>
  );
}
