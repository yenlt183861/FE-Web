// Modules - bóc tách xử lý nghiệp vụ (chức năng riêng) ra 1 nơi (file)
/**
 *       Importing and Exporting Components (function/ const variable) from a file
 * 2 ways to export values (in a file):
 *  + default export:
 *    syntax:
 *      export default function <name_function>() {}; or export default const <variable_name> = <variable_value>;
 *      import <name_function> from <path_file>;
 *  + named export:
 *    syntax:
 *      export function <name_function>() {}
 *      import { <name_function> } from <path_file>;
 * Note: 1 file có thể có nhiều named exports nhưng chỉ có 1 default export
 */

export const TYPE_LOG = "log";
export const TYPE_WARN = "warn";
export const TYPE_ERROR = "error";

function logger(log, type = TYPE_LOG) {
  console[type](log);
}

export default logger;
