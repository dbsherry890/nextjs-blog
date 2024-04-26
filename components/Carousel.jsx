import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { Button, Paper, Title, useMantineTheme, Text } from "@mantine/core";
import classes from "./Carousel.module.css";

const data = [
  {
    image:
      "https://st4prdbebeautiful4s4ci.blob.core.windows.net/www-bebeautiful-in/Best-and-the-most-trendy-haircuts-for-teenage-girls_01.jpg",
    title: "So good! Coming back!",
    category: "Becca",
  },
  {
    image:
      "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2014/03/haircuts-for-girls-featured.jpg?fit=1280%2C720&ssl=1",
    title: "Mandy rocks!",
    category: "Susan",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89mfxkUjK6ithNS8vwIODEPFPaJUGszJlzjqs_wzdEw&s",
    title: "New favorite place!",
    category: "Nicole",
  },
  {
    image:
      "https://greathaircutsaustin.com/wp-content/uploads/2021/11/84A2EA7F-EF68-4192-8772-DB7431DD0348.jpeg",
    title: "Couldn't be happier!",
    category: "Dan",
  },
  {
    image:
      "https://wimpoleclinic.com/wp-content/uploads/Bold-and-curly-344x360.jpg",
    title: "Yes Yes Yes!",
    category: "Pam",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod/images/jane-fonda-attends-the-25th-annual-screen-actors-guild-news-photo-1090698662-1554301330.jpg",
    title: "Love Love Love!",
    category: "Angela",
  },
];

function Card({ image, title, category }) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      {/* <Button variant="white" color="dark">
        Read article
      </Button> */}
    </Paper>
  );
}

export default function _Carousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: "85%", sm: "33%" }}
      slideGap={{ base: "xl", sm: 2 }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
