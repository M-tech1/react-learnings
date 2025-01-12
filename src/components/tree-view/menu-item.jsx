import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./styles.css";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  function handleToggleChildren(getCurrentlabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  }

  console.log(displayCurrentChildren);

  return (
    <>
      <li className="  flex flex-col gap-4 my-2">
        <div className="menu-items bg-blue-500 m  gap-3">
          <p className="">{item.label}</p>
          {item && item.children && item.children.length ? (
            <>
              {" "}
              <span onClick={() => handleToggleChildren(item.label)}>
                {displayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus />}
              </span>
            </>
          ) : null}
        </div>
        {item &&
        item.children &&
        item.children.length > 0 &&
        displayCurrentChildren[item.label] ? (
          <MenuList list={item.children} />
        ) : null}
      </li>
    </>
  );
}
