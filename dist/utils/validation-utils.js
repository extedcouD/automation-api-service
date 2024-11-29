"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ARE_UNIQUE(operand) {
    const valuesSet = new Set(operand);
    return valuesSet.size === operand.length;
}
function ALL_IN(left, right) {
    return left.every((v) => right.includes(v));
}
function ANY_IN(left, right) {
    const leftSet = new Set(left);
    return left.some((v) => right.includes(v));
}
function NONE_IN(left, right) {
    return left.every((v) => !right.includes(v));
}
function EQUAL_TO(left, right) {
    if (left.length !== right.length)
        return false;
    return left.every((v, i) => v === right[i]);
}
function FOLLOW_REGEX(left, regexArray) {
    for (const regex of regexArray) {
        const re = new RegExp(regex);
        if (left.some((v) => !re.test(v)))
            return false;
    }
    return true;
}
exports.default = {
    FOLLOW_REGEX,
    ARE_UNIQUE,
    ALL_IN,
    ANY_IN,
    NONE_IN,
    EQUAL_TO,
};
