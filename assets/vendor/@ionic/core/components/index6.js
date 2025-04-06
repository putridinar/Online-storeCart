/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { c as config } from './ionic-global.js';

/**
 * Logs a warning to the console with an Ionic prefix
 * to indicate the library that is warning the developer.
 *
 * @param message - The string message to be logged to the console.
 */
const printIonWarning = (message, ...params) => {
    const logLevel = config.get('logLevel', "WARN" /* LogLevel.WARN */);
    if (["WARN" /* LogLevel.WARN */].includes(logLevel)) {
        return console.warn(`[Ionic Warning]: ${message}`, ...params);
    }
};
/**
 * Logs an error to the console with an Ionic prefix
 * to indicate the library that is warning the developer.
 *
 * @param message - The string message to be logged to the console.
 * @param params - Additional arguments to supply to the console.error.
 */
const printIonError = (message, ...params) => {
    const logLevel = config.get('logLevel', "ERROR" /* LogLevel.ERROR */);
    if (["ERROR" /* LogLevel.ERROR */, "WARN" /* LogLevel.WARN */].includes(logLevel)) {
        return console.error(`[Ionic Error]: ${message}`, ...params);
    }
};
/**
 * Prints an error informing developers that an implementation requires an element to be used
 * within a specific selector.
 *
 * @param el The web component element this is requiring the element.
 * @param targetSelectors The selector or selectors that were not found.
 */
const printRequiredElementError = (el, ...targetSelectors) => {
    return console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(' or ')}.`);
};

export { printIonError as a, printRequiredElementError as b, printIonWarning as p };
