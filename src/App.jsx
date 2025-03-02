// import Accordian from "./components/accordian";
// import RandomColor from "./components/randon-color";
// import StarRating from "./components/star-rating";
// import ImageSlidder from "./components/image-slidder";
// import LoadMore from "./components/load-more";
// import TreeViewMenu from "./components/tree-view";
// import menu from "./components/tree-view/data";
// import QrCode from "./components/qr-code";
// import LightDarkMode from "./components/light-dark-mode";
// import ScrollIndicator from "./components/scroll-indicator";
// import TabTest from "./components/custom-tabs/tab-test";
// import ModalTest from "./components/custom-modal/modal-test";
// import GithubProfileFinder from "./components/github-profile-finder";
// import SearchAutoComplete from "./components/search-autocomplete";
// import TicTacToe from "./components/tic-tach-toe";
// import FeatureFlagGlobalState from "./components/feature-flag/context";
// import FeatureFlags from "./components/feature-flag";
// import Button from "./components/reusable-component/button";

import TableComp from "./components/reusable-component/tables/table1";
import Table from "./components/reusable-component/tables/table2";
import {
  ITableHead,
  ITableBody,
  ITableDropdownOptions,
} from "./components/reusable-component/tables/table2/data";
import {
  dummyData,
  columns,
} from "./components/reusable-component/tables/table1/data";
import React from "react";

export default function App() {
  return (
    <>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStar={10} /> */}
      {/* <ImageSlidder
        url={"https://picsum.photos/v2/list"}
        page={"3"}
        limit={"10"}
      /> */}
      {/* <LoadMore /> */}
      {/* Treeview components // recussive Nav  */}
      {/* <TreeViewMenu MenuData={menu} /> */}
      {/* <QrCode /> */}
      {/* <TabTest /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <ModalTest /> */}
      {/* <GithubProfileFinder /> */}
      {/* <SearchAutoComplete /> */}
      {/* <TicTacToe /> */}
      {/* Feature Flag implementation */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}
      {/* ***** reusable components ***** */}
      {/* <Button onClick={() => console.log("testing button")} /> */}

      {/* <Table
        headers={ITableHead}
        body={ITableBody}
        title="User List"
        subTitle="Manage your users here"
        showSerialNumber={true}
        dropdownOptions={ITableDropdownOptions}
      />
       */}
      <div className="content-center justify-center p-10">
        <TableComp columns={columns} data={dummyData} />
      </div>
    </>
  );
}
