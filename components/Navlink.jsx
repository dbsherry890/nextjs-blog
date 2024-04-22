import { NavLink } from "@mantine/core";
import Link from "next/link";

export default function _NavLink() {
  return (
    <>
      <NavLink href="/" component={Link} label="Home" />
      <NavLink href="/users" component={Link} label="Users" />
      <NavLink href="#required-for-focus" label="With right section" />
      <NavLink href="#required-for-focus" label="Disabled" disabled />
      <NavLink
        href="#required-for-focus"
        label="With description"
        description="Additional information"
      />
      <NavLink
        href="#required-for-focus"
        label="Active subtle"
        variant="subtle"
        active
      />
      <NavLink href="#required-for-focus" label="Active light" active />
      <NavLink
        href="#required-for-focus"
        label="Active filled"
        variant="filled"
        active
      />
    </>
  );
}
