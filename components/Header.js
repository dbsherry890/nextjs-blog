import { useState } from "react";
import { Container, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "./Logo";
import classes from "./Header.module.css";
import Link from "next/link";

const links = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/pricing", label: "Pricing" },
  { link: "/contact", label: "Contact" },
  { link: "/book", label: "Book" },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        // event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Logo height={60} className={classes.logo} />

        <Group gap={10} visibleFrom="sm">
          {items}
        </Group>
        <Link href="/about" key="yuh"></Link>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        {/* <div className={classes.phone}>860-335-6336</div> */}
      </Container>
    </header>
  );
}
