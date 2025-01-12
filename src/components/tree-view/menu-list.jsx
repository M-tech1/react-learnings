import { useState } from "react";
import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {
  // console.log("from list", list);

  return (
    <ul className=" ml-2">
      {list && list.length
        ? list.map((listItems) => <MenuItem item={listItems} />)
        : null}
    </ul>
  );
}
