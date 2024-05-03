import { Menu, Burger } from "@mantine/core";
import Link from "next/link";

export default function BurgerMenu() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Burger />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>
          <div>
            <Link href="/">Home</Link>
          </div>
        </Menu.Item>
        <Menu.Item>
          <a href="/about">About</a>
        </Menu.Item>
        <Menu.Item>
          <Link href="/gallery">Gallery</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/contact">Contact</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/book">Book</Link>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
