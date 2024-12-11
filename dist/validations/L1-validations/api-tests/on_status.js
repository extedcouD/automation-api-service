"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = on_status;
const json_path_utils_1 = __importDefault(require("../utils/json-path-utils"));
const validation_utils_1 = __importDefault(require("../utils/validation-utils"));
function on_status(input) {
    const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = input.externalData;
        function validate_attribute_1(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.location.country.code");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.context.location.country.code must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_2(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.location.city.code");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.context.location.city.code must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_3(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.domain");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.context.domain must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_4(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.timestamp");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.context.timestamp must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_5(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.bap_id");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.context.bap_id must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_6(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.transaction_id");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.context.transaction_id must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_7(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.message_id");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.context.message_id must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_8(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.version");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.context.version must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_9(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.action");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.context.action must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_10(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.bap_uri");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.context.bap_uri must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_11(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.ttl");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.context.ttl must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_12(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.bpp_id");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.context.bpp_id must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_13(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.bpp_uri");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.context.bpp_uri must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_14(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.id");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.id must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_15(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.status");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.status must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_16(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].id");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.items[*].id must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_17(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].descriptor.name");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.items[*].descriptor.name must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_18(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].descriptor.code");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.items[*].descriptor.code must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_19(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].price.currency");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.items[*].price.currency must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_20(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].price.value");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.items[*].price.value must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_21(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].quantity.selected.count");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.items[*].quantity.selected.count must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_22(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].fulfillment_ids[*]");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.items[*].fulfillment_ids[*] must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_23(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].time.label");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.items[*].time.label must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_24(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].time.duration");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.items[*].time.duration must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_25(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.provider.id");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.provider.id must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_26(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.provider.descriptor.name");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.provider.descriptor.name must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_27(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].id");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.fulfillments[*].id must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_28(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.quote.price.value");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.quote.price.value must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_29(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.quote.price.currency");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.quote.price.currency must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_30(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.quote.breakup[*].title");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.quote.breakup[*].title must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_31(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].id");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.payments[*].id must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_32(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].collected_by");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.payments[*].collected_by must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_33(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].status");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.payments[*].status must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_34(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].type");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.payments[*].type must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_35(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].params.transaction_id");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.payments[*].params.transaction_id must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_36(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].params.currency");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.payments[*].params.currency must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_37(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].params.amount");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.payments[*].params.amount must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_38(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].params.bank_code");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.payments[*].params.bank_code must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_39(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].params.bank_account_number");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.payments[*].params.bank_account_number must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_40(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].params.virtual_payment_address");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.payments[*].params.virtual_payment_address must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_41(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.cancellation_terms[*].cancel_by.duration");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.cancellation_terms[*].cancel_by.duration must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_42(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].category_ids[*]");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.items[*].category_ids[*] must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_43(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.provider.time.range.start");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.provider.time.range.start must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_44(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.provider.time.range.end");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.provider.time.range.end must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_45(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].type");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.fulfillments[*].type must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_46(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.quote.breakup[*].item.price.currency");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.quote.breakup[*].item.price.currency must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_47(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.quote.breakup[*].item.price.value");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.quote.breakup[*].item.price.value must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_48(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.quote.breakup[*].item.quantity.selected.count");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.quote.breakup[*].item.quantity.selected.count must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_49(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.cancellation_terms[*].external_ref.url");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.cancellation_terms[*].external_ref.url must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_50(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.cancellation_terms[*].external_ref.mimetype");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.cancellation_terms[*].external_ref.mimetype must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_51(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.created_at");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.created_at must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_52(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.updated_at");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.order.updated_at must be in ["null"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_1(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["on_status"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.context.action");
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.context.action must be in ["on_status"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_2(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["IND"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.context.location.country.code");
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.context.location.country.code must be in ["IND"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_4(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["ONDC:TRV11"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.context.domain");
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.context.domain must be in ["ONDC:TRV11"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_5(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["SJT", "SFSJT", "RJT", "PASS"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].descriptor.code");
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_6(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["METRO"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].vehicle.category");
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_8(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].type");
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_9(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    "START",
                    "END",
                    "INTERMEDIATE_STOP",
                    "TRANSIT_STOP",
                ];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].type");
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_10(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["QR"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].stops[*].authorization.type");
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_11(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["UNCLAIMED", "CLAIMED", "EXPIRED"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].stops[*].authorization.status");
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_12(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["INACTIVE", "ACTIVE"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].state.descriptor.code");
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_13(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["NOT-PAID", "PAID"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].status");
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_14(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["BPP", "BAP"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].collected_by");
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_15(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    "PRE-ORDER",
                    "ON-FULFILLMENT",
                    "POST-FULFILLMENT",
                ];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.payments[*].type");
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_16(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    "BASE_PRICE",
                    "REFUND",
                    "CANCELLATION_CHARGES",
                    "OFFER",
                    "TOLL",
                ];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.quote.breakup[*].title");
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_17(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    "SOFT_CANCEL",
                    "ACTIVE",
                    "COMPLETE",
                    "CANCELLED",
                    "CANCEL_INITIATED",
                ];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.status");
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.status must be in ["SOFT_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED", "CANCEL_INITIATED"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
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
        let invalidResults = [];
        for (const fn of testFunctions) {
            const subResult = fn(input).filter((r) => !r.valid);
            invalidResults = [...invalidResults, ...subResult];
            if (!input.config.runAllValidations && invalidResults.length > 0) {
                return invalidResults;
            }
        }
        if (invalidResults.length > 0) {
            return invalidResults;
        }
    }
    return [{ valid: true }];
}
