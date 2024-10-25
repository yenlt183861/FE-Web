import logger from "./react/modules/logger.js"; // import default components
import { TYPE_ERROR, TYPE_LOG, TYPE_WARN } from "./react/modules/logger.js"; // import named components
logger("error message", TYPE_ERROR);

// or
import * as log from "./react/modules/logger.js"; // export all
log.default("error message", log.TYPE_ERROR);



