import {
  Avatar,
  Text,
  Button,
  Paper,
  Card,
  useMantineTheme,
} from "@mantine/core";
import { Icon, IconProps } from "@tabler/icons-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export function ServiceCard(props: {
  title: string;
  desc: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
}) {
  const theme = useMantineTheme();
  return (
    <Card
      // key={feature.title}
      shadow="md"
      radius="md"
      // className={classes.card}
      padding="xl"
    >
      <props.icon size={100} stroke={2} color={theme.colors.red[6]} />
      <Text fz="lg" fw={500} mt="md">
        {props.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {props.desc}
      </Text>
    </Card>
  );
}
