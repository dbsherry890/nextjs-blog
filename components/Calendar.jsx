import { useState } from "react";
import { RangeCalendar } from "@mantine/dates";

function _Calendar() {
  const [value, setValue] = useState();

  return <RangeCalendar value={value} onChange={setValue} />;
}

export default _Calendar;
