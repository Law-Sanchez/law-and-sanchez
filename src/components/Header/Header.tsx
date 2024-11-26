import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Stack,
} from "@mantine/core";
// import { MantineLogo } from '@mantinex/mantine-logo';
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";
import classes from "./Header.module.css";
import { useRouter } from "next/navigation";

const linkData = [
  {
    title: "About",
    link: "/",
  },
  {
    title: "Schedule",
    link: "/schedule",
  },

  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Page 4",
    link: "/",
  },
];

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const theme = useMantineTheme();

  const router = useRouter();

  function links(burger: boolean) {
    return linkData.map((item, id) => (
      <UnstyledButton
        className={classes.link}
        key={id}
        onClick={(event) => {
          event.preventDefault();
          router.push(item.link);
          if (burger) toggleDrawer();
        }}
      >
        {item.title}
      </UnstyledButton>
    ));
  }

  return (
    <header className={classes.header}>
      <Group justify="space-between" h="100%">
        {/* <MantineLogo size={30} /> */}
        <Box size={30} />

        <Group h="100%" gap={0} visibleFrom="sm">
          {links(false)}
        </Group>

        <Group visibleFrom="sm">
          {/* <Button variant="default">Log in</Button>
          <Button>Sign up</Button> */}
        </Group>

        <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          hiddenFrom="sm"
          color="white"
        />
      </Group>
      <Drawer
        opened={drawerOpened}
        onClose={toggleDrawer}
        position={"right"}
        offset={8}
        radius={"md"}
        size={"sm"}
        style={{ backgroundClip: "red" }}
      >
        <Stack>{links(true)}</Stack>
      </Drawer>
    </header>
  );
}
