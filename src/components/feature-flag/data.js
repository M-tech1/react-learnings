const dummyApiResponse = {
  showLightAndDarkMode: false,
  showTicTacToeBoard: true,
  showRandomColorGeneration: true,
  showAccordian: false,
  showTreeView: true,
};

function featureFlasDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("some error occord, pls try again");
  });
}

export default featureFlasDataServiceCall;
