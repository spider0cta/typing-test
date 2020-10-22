var eventsModule = (function (dModule, uModule, cModule, wModule) {
  var addEventListeners = function () {
    //character typing event listener
    //click on download button event listener
    //click on restart button event listener
  };

  return {
    //init function, initializes the test before start
    init: function (duration, textNumber) {
      // filling the test words list in data module

      // filling the test words list in UI module

      // setting the total test time

      // updating the Time left in data module

      // updating the Time left in UI module

      // move to a new word ==> in data module

      // set active word ==> UI module

      // format active word ==> UI module

      // focus on the input ==> UI module

      // add event listeners
      addEventListeners();
    },
  };
})(dataModule, UIModule, certificateModule, wordsModule);
