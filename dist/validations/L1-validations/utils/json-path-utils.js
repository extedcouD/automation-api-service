"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonpath_1 = __importDefault(require("jsonpath"));
function getJsonPath(payload, path) {
    let output = jsonpath_1.default.query(payload, path);
    if (isListOfStringsOrNull(output)) {
        output = output.map((o) => (o === null ? "null" : o));
    }
    return output.length === 0 ? ["null"] : output;
}
function isListOfStringsOrNull(variable) {
    return (Array.isArray(variable) &&
        variable.every((item) => item === null || typeof item === "string"));
}
exports.default = {
    getJsonPath,
};
