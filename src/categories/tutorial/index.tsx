import React from "react";
import Accordian from "../../components/accordian";
import RandomColor from "../../components/randon-color";
import StarRating from "../../components/star-rating";
import ImageSlidder from "../../components/image-slidder";
import LoadMore from "../../components/load-more";
import ModalTest from "../../components/custom-modal/modal-test";
import TabTest from "../../components/custom-tabs/tab-test";
import FeatureFlags from "../../components/feature-flag";
import FeatureFlagGlobalState from "../../components/feature-flag/context";
import GithubProfileFinder from "../../components/github-profile-finder";
import LightDarkMode from "../../components/light-dark-mode";
import QrCode from "../../components/qr-code";
import ScrollIndicator from "../../components/scroll-indicator";
import SearchAutoComplete from "../../components/search-autocomplete";
import TicTacToe from "../../components/tic-tach-toe";
import TreeViewMenu from "../../components/tree-view";
import menu from "../../components/tree-view/data";

export default function Tutorials() {
  return (
    <>
      <Accordian />
      <RandomColor />
      <StarRating noOfStar={10} />
      <ImageSlidder
        url={"https://picsum.photos/v2/list"}
        page={"3"}
        limit={"10"}
      />
      <LoadMore />
      {/* <TreeViewMenu MenuData={menu} /> */}
      <QrCode />
      <TabTest />
      <LightDarkMode />
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      <ModalTest />
      <GithubProfileFinder />
      <SearchAutoComplete />
      <TicTacToe />

      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
    </>
  );
}
