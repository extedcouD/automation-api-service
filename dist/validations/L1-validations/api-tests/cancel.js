"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = cancel;
const json_path_utils_1 = __importDefault(require("../utils/json-path-utils"));
const validation_utils_1 = __importDefault(require("../utils/validation-utils"));
function cancel(input) {
    const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = input.externalData;
        function validate_code_0(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.location.country.code");
                const validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.context.location.country.code must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_code_1(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.location.city.code");
                const validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.context.location.city.code must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_domain_2(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.domain");
                const validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.context.domain must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_timestamp_3(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.timestamp");
                const validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.context.timestamp must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_bap_id_4(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.bap_id");
                const validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.context.bap_id must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_transaction_id_5(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.transaction_id");
                const validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.context.transaction_id must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_message_id_6(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.message_id");
                const validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.context.message_id must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_version_7(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.version");
                const validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.context.version must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_action_8(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.action");
                const validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.context.action must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_bap_uri_9(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.bap_uri");
                const validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.context.bap_uri must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_ttl_10(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.ttl");
                const validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.context.ttl must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_bpp_id_11(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.bpp_id");
                const validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.context.bpp_id must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_bpp_uri_12(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.context.bpp_uri");
                const validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.context.bpp_uri must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_order_id_13(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order_id");
                const validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order_id must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_cancellation_reason_id_14(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.cancellation_reason_id");
                const validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.cancellation_reason_id must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_code_15(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.descriptor.code");
                const validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.descriptor.code must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_name_16(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.descriptor.name");
                const validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.descriptor.name must be present in the payload`,
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
                const enumList = ["cancel"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.context.action");
                const skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.context.action must be in ["cancel"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.context.action must **not** be present in the payload`,
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
                const skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.context.location.country.code must be in ["IND"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.context.location.country.code must **not** be present in the payload`,
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
                const skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.context.domain must be in ["ONDC:TRV11"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.context.domain must **not** be present in the payload`,
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
                const enumList = ["SOFT-CANCEL", "CONFIRM-CANCEL"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.descriptor.code");
                const skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.descriptor.code must be in ["SOFT-CANCEL", "CONFIRM-CANCEL"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.descriptor.code must **not** be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        const testFunctions = [
            validate_code_0,
            validate_code_1,
            validate_domain_2,
            validate_timestamp_3,
            validate_bap_id_4,
            validate_transaction_id_5,
            validate_message_id_6,
            validate_version_7,
            validate_action_8,
            validate_bap_uri_9,
            validate_ttl_10,
            validate_bpp_id_11,
            validate_bpp_uri_12,
            validate_order_id_13,
            validate_cancellation_reason_id_14,
            validate_code_15,
            validate_name_16,
            validate_enum_1,
            validate_enum_2,
            validate_enum_4,
            validate_enum_5,
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
