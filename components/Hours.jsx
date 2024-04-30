import React from "react";
import classes from "./Hours.module.css";

export default function _Hours() {
  return (
    <div>
      <ul className={classes.hours_list}>
        <li>Monday: 9am - 5pm </li>
        <li>Tuesday: 9am - 5pm </li>
        <li>Wednesday: 9am - 5pm </li>
        <li>Thursday: 9am - 5pm </li>
        <li>Friday: 9am - 5pm </li>
        <li>Saturday: by appt </li>
      </ul>
    </div>
  );
}
