import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from "../types/test-config";

export default function status(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = input.externalData;

        function validate_code_0(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.location.country.code",
                );

                const validate = validations.arePresent(attr);

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
        function validate_code_1(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.location.city.code",
                );

                const validate = validations.arePresent(attr);

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
        function validate_domain_2(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.domain",
                );

                const validate = validations.arePresent(attr);

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
        function validate_timestamp_3(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.timestamp",
                );

                const validate = validations.arePresent(attr);

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
        function validate_bap_id_4(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bap_id",
                );

                const validate = validations.arePresent(attr);

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
        function validate_transaction_id_5(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.transaction_id",
                );

                const validate = validations.arePresent(attr);

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
        function validate_message_id_6(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.message_id",
                );

                const validate = validations.arePresent(attr);

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
        function validate_version_7(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.version",
                );

                const validate = validations.arePresent(attr);

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
        function validate_action_8(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.action",
                );

                const validate = validations.arePresent(attr);

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
        function validate_bap_uri_9(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bap_uri",
                );

                const validate = validations.arePresent(attr);

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
        function validate_ttl_10(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(testObj, "$.context.ttl");

                const validate = validations.arePresent(attr);

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
        function validate_bpp_id_11(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bpp_id",
                );

                const validate = validations.arePresent(attr);

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
        function validate_bpp_uri_12(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bpp_uri",
                );

                const validate = validations.arePresent(attr);

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
        function validate_enum_1(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["status"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.action",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.context.action must be in ["status"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.context.action must **not** be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_2(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["IND"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.location.country.code",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

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
        function validate_enum_4(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["ONDC:TRV11"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.domain",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

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

        const testFunctions: testFunctionArray = [
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
            validate_enum_1,
            validate_enum_2,
            validate_enum_4,
        ];

        let invalidResults: validationOutput = [];
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
