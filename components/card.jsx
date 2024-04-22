import Link from "next/link";
import { Card, Image, Text } from "@mantine/core";
import classes from "./card.module.css";

export default function _Card() {
  return (
    <Card
      shadow="sm"
      padding="lg"
      component={Link}
      href="#"
      target="_blank"
      className={classes.card}
    >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          h={160}
          alt="No way!"
        />
      </Card.Section>

      <Text fw={500} size="md" mt="md">
        This looking good aight okay
      </Text>

      <Text mt="md" c="dimmed" size="sm">
        This some card text mmkay
      </Text>
    </Card>
  );
}
