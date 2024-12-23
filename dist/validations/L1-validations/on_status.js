"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOn_status = validateOn_status;
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
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.id");
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
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.status");
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
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].id");
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
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].descriptor.name");
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
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].descriptor.code");
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
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].price.currency");
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
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].price.value");
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
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].quantity.selected.count");
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
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].fulfillment_ids[*]");
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
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].time.label");
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
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].time.duration");
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
function validate_attribute_25(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.provider.id");
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
function validate_attribute_26(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.provider.descriptor.name");
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
function validate_attribute_27(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].id");
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
function validate_attribute_28(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.quote.price.value");
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
function validate_attribute_29(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.quote.price.currency");
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
function validate_attribute_30(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.quote.breakup[*].title");
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
function validate_attribute_31(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].id");
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
function validate_attribute_32(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].collected_by");
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
function validate_attribute_33(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].status");
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
function validate_attribute_34(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].type");
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
function validate_attribute_35(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].params.transaction_id");
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
function validate_attribute_36(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].params.currency");
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
function validate_attribute_37(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].params.amount");
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
function validate_attribute_38(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].params.bank_code");
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
function validate_attribute_39(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].params.bank_account_number");
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
function validate_attribute_40(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].params.virtual_payment_address");
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
function validate_attribute_41(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.cancellation_terms[*].cancel_by.duration");
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
function validate_attribute_42(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].category_ids[*]");
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
function validate_attribute_43(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.provider.time.range.start");
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
function validate_attribute_44(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.provider.time.range.end");
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
function validate_attribute_45(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].type");
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
function validate_attribute_46(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.quote.breakup[*].item.price.currency");
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
function validate_attribute_47(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.quote.breakup[*].item.price.value");
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
function validate_attribute_48(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.quote.breakup[*].item.quantity.selected.count");
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
function validate_attribute_49(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.cancellation_terms[*].external_ref.url");
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
function validate_attribute_50(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.cancellation_terms[*].external_ref.mimetype");
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
function validate_attribute_51(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.created_at");
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
function validate_attribute_52(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const attr = payload_utils_1.default.getJsonPath(testObj, "$.message.order.updated_at");
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
        const enumList = ["on_status"];
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
        const enumList = ["SJT", "SFSJT", "RJT", "PASS"];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].descriptor.code");
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
function validate_enum_6(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const enumList = ["METRO"];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].vehicle.category");
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
function validate_enum_8(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const enumList = ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].type");
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
        const enumList = ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].type");
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
        const enumList = ["QR"];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].stops[*].authorization.type");
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
        const enumList = ["UNCLAIMED", "CLAIMED", "EXPIRED"];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].stops[*].authorization.status");
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
function validate_enum_12(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const enumList = ["INACTIVE", "ACTIVE"];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].state.descriptor.code");
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
        const enumList = ["NOT-PAID", "PAID"];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].status");
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
        const enumList = ["BPP", "BAP"];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].collected_by");
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
        const enumList = ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].type");
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
        const enumList = [
            "BASE_PRICE",
            "REFUND",
            "CANCELLATION_CHARGES",
            "OFFER",
            "TOLL",
        ];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.message.order.quote.breakup[*].title");
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
function validate_enum_17(payload, externalData = {}) {
    const scope = payload_utils_1.default.getJsonPath(payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = externalData;
        const enumList = [
            "SOFT_CANCEL",
            "ACTIVE",
            "COMPLETE",
            "CANCELLED",
            "CANCEL_INITIATED",
        ];
        const enumPath = payload_utils_1.default.getJsonPath(testObj, "$.message.order.status");
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
    validate_attribute_25,
    validate_attribute_26,
    validate_attribute_27,
    validate_attribute_28,
    validate_attribute_29,
    validate_attribute_30,
    validate_attribute_31,
    validate_attribute_32,
    validate_attribute_33,
    validate_attribute_34,
    validate_attribute_35,
    validate_attribute_36,
    validate_attribute_37,
    validate_attribute_38,
    validate_attribute_39,
    validate_attribute_40,
    validate_attribute_41,
    validate_attribute_42,
    validate_attribute_43,
    validate_attribute_44,
    validate_attribute_45,
    validate_attribute_46,
    validate_attribute_47,
    validate_attribute_48,
    validate_attribute_49,
    validate_attribute_50,
    validate_attribute_51,
    validate_attribute_52,
    validate_enum_1,
    validate_enum_2,
    validate_enum_4,
    validate_enum_5,
    validate_enum_6,
    validate_enum_8,
    validate_enum_9,
    validate_enum_10,
    validate_enum_11,
    validate_enum_12,
    validate_enum_13,
    validate_enum_14,
    validate_enum_15,
    validate_enum_16,
    validate_enum_17,
];
function validateOn_status(payload, externalData = {}) {
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
