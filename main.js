// web doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

/**
 * Falsy(convert to boolean false): false, 0, '' or "", null, undefined, NaN
 *
 * document.all:
 *  + convert to boolean is false
 *  + when compare (use === or !==) is undefined
 *  + typeof document.all => "undefined"
 */

/**
 * Array
 * method: for in, for of, at(), filter(), map(), reduce()
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
// var boxElement = document.getElementById("test");
// boxElement.style.width = "100%";
// boxElement.style.height = "100%";

// or

// Object.assign(boxElement.style, {
//   width: "100%",
//   height: "100%",
// });

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

// ==================================
/**
 *
 * JS Function
 */

function myFunction(message) {
  console.log(message);
}

// expression function
var myFunc1 = function (message) {
  console.log(message);
};
// arrow function
var arrowFunc1 = (message) => {
  console.log(message);
};
var arrowFunc2 = (a, b) => a + b;

var arrowFunc3 = (a, b) => ({ a: a, b: b }); // return object

var arrowFunc4 = (message) => console.log(message); // arrow function with only one paremeter

// note 1: arrow function không có context (this)
const courseArrowFunction = {
  name: "JS",
  getName: function () {
    return this.name; // this ở đây là context, đối tượng gọi phương thức getName()
  },
};
const courseArrowFunction1 = {
  name: "JS",
  getName: () => this, // this ở đây sẽ trả về undefined
};

// note2: arrow function không thể sử dụng để làm function constructor
const CourseArrowFunction = function (name, price) {
  this.name = name;
  this.price = price;
};

const jsCourseArrowFunction = new CourseArrowFunction("JS", 100);

// error
// const errorCourseArrowFunction = (name, price) => {
//   this.name = name;
//   this.price = price;
// };

// ==================================

/**
 * Default parameter value (js ES6)
 */

function myDefaultFunc(message, type = "log") {
  console[type](message);
}

// ==================================

/**
 * Template literals (js ES6)
 */
var tp = 1;
var templateLiterals = `variable tp has value is ${tp}`;

// ==================================

/**
 * Classes (js ES6)
 * cách viết khác của object constructor function
 */
// object constructor function (1)
function CourseObjectConstructor(name, price) {
  this.name = name;
  this.price = price;

  this.getName = function () {
    return this.name;
  };
}

// class
class CourseClass {
  // constructor of class
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  // define a method of class
  getName() {
    return this.name;
  }
}

var phpCourseObjectConstructor = new CourseObjectConstructor("PHP", 1000);
var phpCourseClass = new CourseClass("PHP", 1000);

// ==================================

/**
 * Destructuring và Rest parameters (js ES6)
 * dùng với object và array
 * note: phân biệt rest parameters với spread
 *    + rest parameters: khi dùng với destructuring or định nghĩa tham số cho hàm (lấy các phần tử còn lại)
 *    + spread: các trường hợp còn lại
 */

// Array
var courseDestructingArray = ["JS", "PHP", "Ruby"];

// syntax với array: [var1, var2, var3, ..., varN] = array; (N là kích thước mảng)
var [
  courseDestructingArray1,
  courseDestructingArray2,
  courseDestructingArray3,
] = courseDestructingArray;
// chỉ lấy 2 phần tử
var [courseDestructingArray11, , courseDestructingArray33] =
  courseDestructingArray;
// chỉ lấy phần tử đầu tiên
var [courseDestructingArray12] = courseDestructingArray;
// lấy phần tử đầu tiên, và mảng chứa các phần tử còn lại (restArray là tên biến)
var [courseDestructingArray13, ...restArray] = courseDestructingArray;

// Object
var courseDestructuringObject = {
  name: "JS",
  price: 12000,
  image: "path",
};
// chỉ lấy name, price của object
// note: name, price phải đúng với key của object, ko đúng thì giá trị nhận được là undefined
var { name, price } = courseDestructuringObject;
// Rest parameters với object
var { name, ...restObject } = courseDestructuringObject;

// object lồng object
var courseDestructuringObject1 = {
  name: "JS",
  price: 12000,
  image: "path",
  children: {
    name: "ReactJS",
  },
};
// lấy name của parent và đổi tên thành parentName, lấy name của children
var {
  name: parentName,
  children: { name },
} = courseDestructuringObject1;
// lấy giá trị của key, nhưng key ko tồn tại trong object => return undefinded, muốn gán giá trị mặc định
var { description = "default value" } = courseDestructuringObject1;

// example với rest parameters với tham số của function
function logRestParameters(...params) {
  console.log(params);
}
// use : logRestParameters(1,2,3); => [1,2,3]

// ==================================

/**
 * Spread (js ES6)
 */
