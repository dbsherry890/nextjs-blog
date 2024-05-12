import { Anchor, Group, ActionIcon, rem } from "@mantine/core";
import { BrandTwitter, BrandYoutube, BrandInstagram } from "tabler-icons-react";
import Logo from "./Logo";
import classes from "./Footer.module.css";
import Link from "next/link";

const links = [
  { link: "/about", label: "About" },
  { link: "/contact", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Store" },
];

export default function Footer() {
  const items = links.map((link) => (
    <Link key={link.label} href={link.link} size="sm">
      {link.label}
    </Link>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Logo height={80} />

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <BrandTwitter
            // style={{ width: rem(18), height: rem(18) }}
            // stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <BrandYoutube />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <BrandInstagram />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
