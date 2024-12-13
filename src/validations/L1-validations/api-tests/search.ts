import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from "../types/test-config";

export default function search(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, "$");
    for (const testObj of scope) {
        testObj._EXTERNAL = input.externalData;

        function validate_attribute_1(
            input: validationInput,
        ): validationOutput {
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
        function validate_attribute_2(
            input: validationInput,
        ): validationOutput {
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
        function validate_attribute_3(
            input: validationInput,
        ): validationOutput {
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
        function validate_attribute_4(
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
        function validate_attribute_5(
            input: validationInput,
        ): validationOutput {
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
        function validate_attribute_6(
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
        function validate_attribute_7(
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
        function validate_attribute_8(
            input: validationInput,
        ): validationOutput {
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
        function validate_attribute_9(
            input: validationInput,
        ): validationOutput {
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
        function validate_attribute_10(
            input: validationInput,
        ): validationOutput {
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
        function validate_attribute_11(
            input: validationInput,
        ): validationOutput {
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
        function validate_attribute_12(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.intent.fulfillment.vehicle.category",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.intent.fulfillment.vehicle.category must be present in the payload`,
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
                const enumList = ["search"];
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
                            description: `- **condition A**: every element of $.context.action must be in ["search"]

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
        function validate_enum_5(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["METRO"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.intent.fulfillment.vehicle.category",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.intent.fulfillment.vehicle.category must be in ["METRO"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.intent.fulfillment.vehicle.category must **not** be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_7(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.intent.fulfillment.type",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.intent.fulfillment.type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.intent.fulfillment.type must **not** be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_8(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    "START",
                    "END",
                    "INTERMEDIATE_STOP",
                    "TRANSIT_STOP",
                ];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.intent.fulfillment.stops[*].type",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.intent.fulfillment.stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.intent.fulfillment.stops[*].type must **not** be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_9(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["QR"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.intent.fulfillment.stops[*].authorization.type",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.intent.fulfillment.stops[*].authorization.type must be in ["QR"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.intent.fulfillment.stops[*].authorization.type must **not** be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_10(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["UNCLAIMED", "CLAIMED", "EXPIRED"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.intent.fulfillment.stops[*].authorization.status",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.intent.fulfillment.stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.intent.fulfillment.stops[*].authorization.status must **not** be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_11(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["INACTIVE", "ACTIVE"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.intent.fulfillment.state.descriptor.code",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.intent.fulfillment.state.descriptor.code must be in ["INACTIVE", "ACTIVE"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.intent.fulfillment.state.descriptor.code must **not** be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_tag_0(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const validTags = ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"];
                const tagPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.intent.payment.tags[*].descriptor.code",
                );

                const skipCheck = !validations.arePresent(tagPath);
                if (skipCheck) continue;

                const validate = validations.allIn(tagPath, validTags);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.intent.payment.tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.intent.payment.tags[*].descriptor.code must **not** be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_tag_0_BUYER_FINDER_FEES(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.intent.payment.tags[?(@.descriptor.code=='BUYER_FINDER_FEES')]",
            );
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].descriptor.code",
                );
                const validValues = [
                    "BUYER_FINDER_FEES_PERCENTAGE",
                    "BUYER_FINDER_FEES_AMOUNT",
                ];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_tag_0_SETTLEMENT_TERMS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.intent.payment.tags[?(@.descriptor.code=='SETTLEMENT_TERMS')]",
            );
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].descriptor.code",
                );
                const validValues = [
                    "SETTLEMENT_WINDOW",
                    "SETTLEMENT_BASIS",
                    "SETTLEMENT_TYPE",
                    "MANDATORY_ARBITRATION",
                    "COURT_JURISDICTION",
                    "DELAY_INTEREST",
                    "STATIC_TERMS",
                    "SETTLEMENT_AMOUNT",
                ];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_tag_1(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const validTags = ["PAGINATION"];
                const tagPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.intent.tags[*].descriptor.code",
                );

                const skipCheck = !validations.arePresent(tagPath);
                if (skipCheck) continue;

                const validate = validations.allIn(tagPath, validTags);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.intent.tags[*].descriptor.code must be in ["PAGINATION"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.intent.tags[*].descriptor.code must **not** be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_tag_1_PAGINATION(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.intent.tags[?(@.descriptor.code=='PAGINATION')]",
            );
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].descriptor.code",
                );
                const validValues = ["PAGINATION_ID", "REQUESTED_PAGE_NUMBER"];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.list[*].descriptor.code must be in ["PAGINATION_ID", "REQUESTED_PAGE_NUMBER"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }

        const testFunctions: testFunctionArray = [
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
            validate_enum_7,
            validate_enum_8,
            validate_enum_9,
            validate_enum_10,
            validate_enum_11,
            validate_tag_0,
            validate_tag_0_BUYER_FINDER_FEES,
            validate_tag_0_SETTLEMENT_TERMS,
            validate_tag_1,
            validate_tag_1_PAGINATION,
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
