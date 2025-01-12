import Accordian from "./components/accordian";
import RandomColor from "./components/randon-color";
import StarRating from "./components/star-rating";
import ImageSlidder from "./components/image-slidder";
import LoadMore from "./components/load-more";
import TreeViewMenu from "./components/tree-view";
import menu from "./components/tree-view/data";
import QrCode from "./components/qr-code";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutoComplete from "./components/search-autocomplete";
import TicTacToe from "./components/tic-tach-toe";
function App() {
  // console.log("munu date", menu);

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
      <TicTacToe />
    </>
  );
}

export default App;
