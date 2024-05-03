"use client";
// import { useState } from "react";
import { Container, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "./Logo";
import classes from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BurgerMenu from "./BurgerMenu";

const links = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/pricing", label: "Pricing" },
  { link: "/contact", label: "Contact" },
  { link: "/book", label: "Book" },
];

export default function _Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const pathname = usePathname();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={pathname === link.link || undefined}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Logo height={50} className={classes.logo} />

        <Group gap={10} visibleFrom="sm">
          {items}
        </Group>
        <div className="visible md:hidden">
          <BurgerMenu />
        </div>
        <div className="hover:underline hidden md:block">(860)-335-6336</div>
      </Container>
    </header>
  );
}
