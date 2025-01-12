import Tabs from "./tabs";
import "./tab-styles.css";
export default function TabTest() {
  function RandomComp() {
    return (
      <div className="border border-solid border-l-purple-800 w-[10rem] h-[30rem] ">
        <h1>Tab 2 random content from function components</h1>;
      </div>
    );
  }
  const tabs = [
    {
      label: "Tab 1",
      content: <div>tab1 content for testing </div>,
    },
    {
      label: "Tab 2",
      content: <div>tab2 content for testing </div>,
    },

    {
      label: "Tab 3",
      content: <RandomComp />,
    },
  ];

  function handleChange(currentTabIndex) {
    // console.log(currentTabIndex);
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <Tabs tabsContent={tabs} onChange={handleChange} />
      </div>
    </>
  );
}
