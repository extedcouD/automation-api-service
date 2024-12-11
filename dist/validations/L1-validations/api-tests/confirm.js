"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = confirm;
const json_path_utils_1 = __importDefault(require("../utils/json-path-utils"));
const validation_utils_1 = __importDefault(require("../utils/validation-utils"));
function confirm(input) {
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
        function validate_attribute_15(input) {
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
        function validate_attribute_16(input) {
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
        function validate_attribute_17(input) {
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
        function validate_attribute_18(input) {
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
        function validate_attribute_19(input) {
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
        function validate_attribute_20(input) {
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
        function validate_attribute_21(input) {
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
        function validate_attribute_22(input) {
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
        function validate_attribute_23(input) {
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
        function validate_enum_1(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["confirm"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.context.action");
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.context.action must be in ["confirm"]`,
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
                const enumList = ["OTP", "QR", "VEHICLE_NUMBER"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].stops[*].authorization.type");
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["OTP", "QR", "VEHICLE_NUMBER"]`,
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
            validate_enum_1,
            validate_enum_2,
            validate_enum_4,
            validate_enum_6,
            validate_enum_9,
            validate_enum_10,
            validate_enum_11,
            validate_enum_12,
            validate_enum_13,
            validate_enum_14,
            validate_enum_15,
            validate_enum_16,
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
