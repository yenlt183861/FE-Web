// Learn react

/**
 * how to build a component:
 * - Step 1: export the component
 *   (Importing and Exporting Components)
 *   2 ways to export values (in a file):
 *    + default exports (use key "export default"): dùng khi file chỉ export 1 thành phần
 *      syntax:
 *          export statement: export default function MyFunction() {}
 *          import statement: import MyFunction from 'App.js';
 *    + use named exports (use key "export"): dùng khi file export nhiều thành phần và giá trị
 *      syntax:
 *          export statement: export function MyFunction() {}
 *          import statement: import { MyFunction } from 'App.js';
 *     Note: 1 file có thể có nhiều named exports nhưng chỉ có 1 default export
 *
 *
 * - Step 2: define the function
 *   note: function name MUST start with a upper letter
 * - Step 3: Add markup with JSX
 *      JSX is a syntax extension for JS that lets write HTML-like markup inside a JS file
 *      + return a single root element; to return multiple elements from a component, wrap them with a single parent tag
 * (ex: <diw></div> or <></> (Fragment - let group things without leaving any trace in the browser HTML tree))
 *      + close all the tags
 *      + style properties are written in camelCase
 *      + object in JSX: use {{ }} (like style in expample)
 *      + use variable: use {} (like sourceImg variable)
 */

// export default function MyFunction() {
//   //   return <img src="" alt="" />; // trên cùng 1 dòng
//   // viết trên nhiều dòng, phải wrap trong dấu ngoặc đơn;

//   var sourceImg =
//     "https://images.unsplash.com/photo-1721332154161-847851ea188b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

//   return (
//     <div
//       className="box-img"
//       style={{
//         backgroundColor: "black",
//         color: "pink",
//       }}
//     >
//       <img src={sourceImg} alt="" />
//     </div>
//   );
// }

/**
 * 2 ways to build website:
 * - SPA: Single-Page Application (or CSR - Client Side Rendering)
 *    giao diện được render ở phía trình duyệt
 *    + không yêu cầu tải lại trang trong quá trình sử dụng
 *    + Tốc độ hiển thị nhanh hơn MPA khi sử dụng:
 *        phần lớn tài nguyên đươc tải trong lần đầu
 *        Trang chỉ tải thêm dữ liệu mới khi cần
 *    Lần đầu tải có thể chậm hơn MPA, do phải load thêm file js
 *
 * - MPA: Multi-Page Application (or SSR - Server Side Rendering)
 *    giao diện được render phía be; browser (client) đọc html, css trả về từ be để hiển thị
 *    tải lại trang trong quá trình sử dụng (click vào đường liên kết, điều hướng tới trang khác, ...)
 *    Tốc độ: luôn tải lại toàn bộ trang khi truy cập và chuyển hướng
 */

/**
 * Enhanced object literals
 * - định nghĩa key: value cho object (name, price)
 * - định nghĩa method cho object (getName)
 * - định nghĩa key cho object dưới dạng biến (fieldId)
 */
var name = "JS";
var price = 1000;
var fieldId = "id";

// cách thông thường
var course = {
  id: 1,
  name: name,
  price: price,
  getName: function () {
    return this.name;
  },
};
// react ES6
var course1 = {
  [fieldId]: 1,
  name,
  price,
  getName() {
    return this.name;
  },
};


/**
 * Toolchain: create-react-app
 */
