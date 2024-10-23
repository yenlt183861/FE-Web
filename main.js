// web doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

// includes method (only active with String, Array) => check string/element exist in String/Array
// only support on browser versions sĩne Sep 2016

// Polyfill
/**
 *  used to provide modern functionality on older browsers that do not natively support it (ex: includes method above)
 */

if (!Object.prototype.includes) {
  Object.prototype.includes = function () {
    // code logic check exist
  };
}

/**
 * Object
 *
 *
 * method:
 *  hasOwnProperty(property_name);
 */

// Array empty element
function testArrayEmptyElement() {
  var courses = ["HTML, CSS", "Javascript", "PHP", "Flutter"];
  courses.length = 10;

  // create empty array with length = 2
  var courses1 = new Array(2); // => [undefined, undefined];
  // different with:
  var course2 = new Array(10, 12); // => [10,12]
  var len = courses.length;

  for (var i = 0; i < len; i++) {
    console.log(courses[i]);
  }

  console.log("=======");

  for (var i in courses) {
    console.log(courses[i]);
  }
  console.log("=======");
  for (var i of courses) {
    console.log(i);
  }
}

// HTML DOM - Document Object Model
/**
 * - document object
 * - DOM element: find HTML elements by
 *   + id, class, tag
 *   + CSS Selector:  querySelector() / querySelectorAll()
 *   + HTML Collection: document.forms, document.anchors, ....
 * - attribute Note: setAttribute(attr_name, attr_value)
 *  getAttribute(attr_name)
 * - Text Node: innerText, textConten (only getter and setter content of element (change content), not add HTML element into)
 */

// add element: innerHTML (thêm vào trong), outerHTML (ghi đè chính nó)

// DOM Style: CSS inline
var boxElement = document.getElementById("test");
boxElement.style.width = "100%";
boxElement.style.height = "100%";

// or

Object.assign(boxElement.style, {
  width: "100%",
  height: "100%",
});
