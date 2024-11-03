import { Container, Title, Text, Button } from "@mantine/core";
import classes from "./HeroImageRight.module.css";
import { useRouter } from "next/navigation";

export function HeroImageRight() {
  const router = useRouter();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Automotive Repairs,{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}
              >
                Delivered
              </Text>{" "}
            </Title>

            <Text className={classes.description} mt={30}>
              We bring high quality car repairs to you!
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: "pink", to: "yellow" }}
              size="xl"
              className={classes.control}
              mt={40}
              onClick={() => router.push("/schedule")}
            >
              Schedule Service
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
