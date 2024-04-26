import Link from "next/link";
import { Card, Image, Text } from "@mantine/core";
import classes from "./card.module.css";

export default function _Card({ title, description, src }) {
  return (
    <Card
      shadow="md"
      component={Link}
      href="#"
      target="_blank"
      className={classes.card}
    >
      <Card.Section>
        <Image src={src} className={classes.img} mah={200} />
      </Card.Section>

      <Text fw={500} size="md" mt="md">
        {title}
      </Text>

      <Text mt="md" c="dimmed" size="sm">
        {description}
      </Text>
    </Card>
  );
}
