import cx from "clsx";
import { Title, Text, Container, Button, Overlay, Space } from "@mantine/core";
import classes from "./Hero.module.css";
import _Hours from "./Hours";

export default function _Hero() {
  return (
    <div className="relative pt-[180] bg-[url('https://res.cloudinary.com/peerspace-inc/image/upload/dmzo2x3qemrmzymuulzz.jpg')] bg-cover h-[50vh] w-full flex">
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className="relative z-10 pt-[.5rem] space-y-[1rem] flex flex-col w-screen items-center justify-center ">
        {/* <div className={classes.hours}>
          <_Hours />
        </div> */}
        <Container h={120} className="text-white  text-center">
          <Title className="">Love your look!</Title>
          <Text size="lg" className="">
            Providing the haircut you deserve. <br />
            Some more information here.
          </Text>
          <Space h="xl" />

          <div>
            <Button
              className={classes.control}
              variant="white"
              size="lg"
              component="a"
              href="/book"
            >
              Book Now
            </Button>
            <Button
              className={cx(classes.control, classes.secondaryControl)}
              size="lg"
            >
              Gallery
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
// https://res.cloudinary.com/peerspace-inc/image/upload/dmzo2x3qemrmzymuulzz.jpg
