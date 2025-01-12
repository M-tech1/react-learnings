import MenuData from "./data";
import MenuItem from "./menu-item";
import MenuList from "./menu-list";
import "./styles.css";

export default function TreeViewMenu({ MenuData = [] }) {
  // console.log("this is from side menu", sidemenu);

  return (
    <>
      <div className="tree-view-menu">
        <MenuList list={MenuData} />
      </div>
    </>
  );
}
