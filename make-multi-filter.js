// Colby Brannan

function MakeMultiFilter(originalArray) {
  // currentArray starts as a shallow copy of originalArray
  let currentArray = originalArray;

  // arrayFilterer is the function we return
  function arrayFilterer(filterCriteria, callback) {
    // if no filterCriteria is provided, return currentArray
    if (typeof filterCriteria === "undefined") {
      return currentArray;
    }

    //if filterCriteria is not a function, return currentArray immediately
    if (typeof filterCriteria !== "function") {
      return currentArray;
    }

    //  Apply filterCriteria to update currentArray
    currentArray = currentArray.filter(filterCriteria);

    // If callback is a function,  call it with currentArray
    if (typeof callback === "function") {
      callback.call(originalArray, currentArray);
    }

    // Return arrayFilterer itself to allow chaining
    return arrayFilterer;
  }

  return arrayFilterer;
}
