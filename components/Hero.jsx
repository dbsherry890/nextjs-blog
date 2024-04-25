import cx from "clsx";
import { Title, Text, Container, Button, Overlay } from "@mantine/core";
import classes from "./Hero.module.css";

export default function _Hero() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>Insert blurb here</Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Some more information here. Some more information here. Some more
            information here. Some more information here.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Book Now
          </Button>
          <Button
            className={cx(classes.control, classes.secondaryControl)}
            size="lg"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
// https://res.cloudinary.com/peerspace-inc/image/upload/dmzo2x3qemrmzymuulzz.jpg
