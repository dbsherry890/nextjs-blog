import Link from "next/link";
import { Card, Image, Text } from "@mantine/core";
import classes from "./card.module.css";
// import NextImage from "next/image";

export default function _Card({ title, description, src }) {
  return (
    <Card
      shadow="md"
      // padding="xl"
      component={Link}
      href="#"
      target="_blank"
      className={classes.card}
    >
      <Card.Section>
        <Image src={src} alt="yup" className={classes.img} />
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
