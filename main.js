// web doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

/**
 * Falsy(convert to boolean false): false, 0, '' or "", null, undefined, NaN
 *
 * document.all:
 *  + convert to boolean is false
 *  + when compare (use === or !==) is undefined
 *  + typeof document.all => "undefined"
 */

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

/**
 *
 * HTML DOM - Document Object Model
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

/**
 * DOM Events: browser events, user events
 * note: bubble events (các sự kiện nổi bọt -
 * lắng nghe thẻ cha, khi click thẻ con 
 * thì thực hiện cả onclick của thẻ con và thẻ cha)
 * 
 * https://www.w3schools.com/jsref/dom_obj_event.asp
 * 2 ways: 
 * 1. Attribute events
 * <h1 onclick="console.log(this)">Heading</h1>
 * 2. Assign event using the element node
 *  document.querySelector().onclick = function(event){
 *      // get clicked element: event.target
 *      
 * }

 * 1 vài DOM events
 * - <input type="text"> tag: 
 *    + onchange: chỉ thực hiện khi value mới khác value trước đó - thực hiện khi unfocus input (blur)
 *      onchange  = function(e) { console.log(e.target.value);}
 *    + oninput: lấy value của input khi đang gõ (ko cần unfocus (blur) cũng thực hiện)
 * - <input type="checkbox"> tag: 
 *    onchange  = function(e) { console.log(e.target.checked);}
 * 
 * preventDefault events: loại bỏ hành vi mặc định của browser trên các elements
 * stopPropagation: loại bỏ bubble events
 * 
 * 
 * Event Listener
 * 
 */
