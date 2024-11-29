"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOn_search = validateOn_search;
const validation_utils_1 = __importDefault(require("../../utils/validation-utils"));
const payload_utils_1 = __importDefault(require("../../utils/payload-utils"));
const errors_1 = require("../errors/errors");
function validate_attribute_1(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.context.location.country.code");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_2(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.context.location.city.code");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_3(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.context.domain");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_4(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.context.timestamp");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_5(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.context.bap_id");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_6(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.context.transaction_id");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_7(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.context.message_id");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_8(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.context.version");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_9(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.context.action");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_10(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.context.bap_uri");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_11(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.context.ttl");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_12(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.context.bpp_id");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_13(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.context.bpp_uri");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_14(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.catalog.descriptor.name");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_15(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.catalog.providers[*].id");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_16(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.catalog.providers[*].descriptor.name");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_17(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.catalog.providers[*].fulfillments[*].id");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_18(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.catalog.providers[*].fulfillments[*].type");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_19(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.catalog.providers[*].fulfillments[*].id");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_20(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.catalog.providers[*].categories[*].id");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_21(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.catalog.providers[*].categories[*].descriptor.code");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_22(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.catalog.providers[*].time.range.start");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_23(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.catalog.providers[*].time.range.end");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_attribute_24(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.catalog.providers[*].payments[*].collected_by");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.NONE_IN(attr, nulls);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_enum_1(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const enumList = ["on_search"];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.context.action");
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.ALL_IN(enumPath, enumList);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_enum_2(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const enumList = ["IND"];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.context.location.country.code");
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.ALL_IN(enumPath, enumList);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_enum_4(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const enumList = ["ONDC:TRV11"];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.context.domain");
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.ALL_IN(enumPath, enumList);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_enum_5(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const enumList = ["TICKET", "PASS"];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.message.catalog.providers[*].categories[*].descriptor.code");
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.ALL_IN(enumPath, enumList);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_enum_7(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const enumList = ["METRO"];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.message.catalog.providers[*].fulfillments[*].vehicle.category");
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.ALL_IN(enumPath, enumList);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_enum_9(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const enumList = ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.message.catalog.providers[*].fulfillments[*].type");
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.ALL_IN(enumPath, enumList);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_enum_10(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const enumList = ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.message.catalog.providers[*].fulfillments[*].type");
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.ALL_IN(enumPath, enumList);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_enum_11(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const enumList = ["QR"];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.message.catalog.providers[*].fulfillments[*].stops[*].authorization.type");
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.ALL_IN(enumPath, enumList);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_enum_13(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const enumList = ["INACTIVE", "ACTIVE"];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.message.catalog.providers[*].fulfillments[*].state.descriptor.code");
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.ALL_IN(enumPath, enumList);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_enum_14(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const enumList = ["NOT-PAID", "PAID"];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.message.catalog.providers[*].payments[*].status");
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.ALL_IN(enumPath, enumList);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_enum_15(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const enumList = ["BPP", "BAP"];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.message.catalog.providers[*].payments[*].collected_by");
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.ALL_IN(enumPath, enumList);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
function validate_enum_16(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const enumList = ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.message.catalog.providers[*].payments[*].type");
        const skipCheck = false;
        if (skipCheck)
            continue;
        const output = validation_utils_1.default.ALL_IN(enumPath, enumList);
        if (!output)
            return {
                valid: false,
                errorCode: 20006,
            };
    }
    return { valid: true };
}
const testFunctions = [
    validate_attribute_1,
    validate_attribute_2,
    validate_attribute_3,
    validate_attribute_4,
    validate_attribute_5,
    validate_attribute_6,
    validate_attribute_7,
    validate_attribute_8,
    validate_attribute_9,
    validate_attribute_10,
    validate_attribute_11,
    validate_attribute_12,
    validate_attribute_13,
    validate_attribute_14,
    validate_attribute_15,
    validate_attribute_16,
    validate_attribute_17,
    validate_attribute_18,
    validate_attribute_19,
    validate_attribute_20,
    validate_attribute_21,
    validate_attribute_22,
    validate_attribute_23,
    validate_attribute_24,
    validate_enum_1,
    validate_enum_2,
    validate_enum_4,
    validate_enum_5,
    validate_enum_7,
    validate_enum_9,
    validate_enum_10,
    validate_enum_11,
    validate_enum_13,
    validate_enum_14,
    validate_enum_15,
    validate_enum_16,
];
function validateOn_search(payload, externalData = {}) {
    for (const fn of testFunctions) {
        const result = fn(payload, externalData);
        if (result.errorCode && !result.valid) {
            const error = (0, errors_1.getError)(result.errorCode);
            error.message += " " + fn.name;
            return { valid: false, error: error };
        }
    }
    return { valid: true };
}
