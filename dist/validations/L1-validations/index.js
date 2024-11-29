"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.performL1Validations = performL1Validations;
const search_1 = require("./search");
const select_1 = require("./select");
const init_1 = require("./init");
const confirm_1 = require("./confirm");
const status_1 = require("./status");
const cancel_1 = require("./cancel");
const on_search_1 = require("./on_search");
const on_select_1 = require("./on_select");
const on_init_1 = require("./on_init");
const on_confirm_1 = require("./on_confirm");
const on_cancel_1 = require("./on_cancel");
const on_status_1 = require("./on_status");
function performL1Validations(action, payload, externalData = {}) {
    switch (action) {
        case "search":
            return (0, search_1.validateSearch)(payload, externalData);
        case "select":
            return (0, select_1.validateSelect)(payload, externalData);
        case "init":
            return (0, init_1.validateInit)(payload, externalData);
        case "confirm":
            return (0, confirm_1.validateConfirm)(payload, externalData);
        case "status":
            return (0, status_1.validateStatus)(payload, externalData);
        case "cancel":
            return (0, cancel_1.validateCancel)(payload, externalData);
        case "on_search":
            return (0, on_search_1.validateOn_search)(payload, externalData);
        case "on_select":
            return (0, on_select_1.validateOn_select)(payload, externalData);
        case "on_init":
            return (0, on_init_1.validateOn_init)(payload, externalData);
        case "on_confirm":
            return (0, on_confirm_1.validateOn_confirm)(payload, externalData);
        case "on_cancel":
            return (0, on_cancel_1.validateOn_cancel)(payload, externalData);
        case "on_status":
            return (0, on_status_1.validateOn_status)(payload, externalData);
        default:
            throw new Error("Action not found");
    }
}
