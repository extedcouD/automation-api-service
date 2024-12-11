"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = search;
const json_path_utils_1 = __importDefault(require("../utils/json-path-utils"));
const validation_utils_1 = __importDefault(require("../utils/validation-utils"));
function search(input) {
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
                            errorCode: 50001,
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
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.intent.fulfillment.vehicle.category");
                const nulls = ["null"];
                const validate = validation_utils_1.default.noneIn(attr, nulls);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: no element of $.message.intent.fulfillment.vehicle.category must be in ["null"]`,
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
                const enumList = ["search"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.context.action");
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.context.action must be in ["search"]`,
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
                const enumList = ["METRO"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.intent.fulfillment.vehicle.category");
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.intent.fulfillment.vehicle.category must be in ["METRO"]`,
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
                const enumList = [
                    "START",
                    "END",
                    "INTERMEDIATE_STOP",
                    "TRANSIT_STOP",
                ];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.intent.fulfillment.stops[*].type");
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.intent.fulfillment.stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]`,
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
            validate_enum_1,
            validate_enum_2,
            validate_enum_4,
            validate_enum_5,
            validate_enum_8,
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
