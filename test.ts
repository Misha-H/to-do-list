// Standard named function
function fn() {}

// Standard named function with params
function fnWithParams(params: any) {}

// Async named function
async function asyncFn() {}

// Unnamed IIFE
(function () {})();

// Standard named function
const arrowFn = () => {};

// Standard named function with params
const arrowFnWithParams = (params: any) => {};

// Async named function
const asyncArrowFn = async () => {};

// Unnamed IIFE
(() => {})();


// Regular expressions
const re = /^(\d{4})-(\d{2})-(\d{2})/m

// Everything inside `()` are considered a capture group
// What this means is we can refer back to their value