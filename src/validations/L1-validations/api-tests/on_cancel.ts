import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from "../types/test-config";

export default function on_cancel(input: validationInput): validationOutput {
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
        function validate_attribute_13(
            input: validationInput,
        ): validationOutput {
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
        function validate_attribute_14(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.id must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_15(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.status",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.status must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_16(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.items[*].id must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_17(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].descriptor.name",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.items[*].descriptor.name must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_18(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].descriptor.code",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.items[*].descriptor.code must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_19(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].price.currency",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.items[*].price.currency must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_20(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].price.value",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.items[*].price.value must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_21(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].quantity.selected.count",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.items[*].quantity.selected.count must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_22(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].fulfillment_ids[*]",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_23(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].category_ids[*]",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.items[*].category_ids[*] must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_24(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].time.label",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.items[*].time.label must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_25(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].time.duration",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.items[*].time.duration must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_26(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.provider.id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.provider.id must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_27(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.provider.descriptor.name",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.provider.descriptor.name must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_28(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.provider.descriptor.images[*].url",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.provider.descriptor.images[*].url must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_29(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.provider.time.range.start",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.provider.time.range.start must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_30(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.provider.time.range.end",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.provider.time.range.end must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_31(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.fulfillments[*].id must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_32(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].type",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.fulfillments[*].type must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_33(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.price.value",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.quote.price.value must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_34(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.price.currency",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.quote.price.currency must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_35(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*].title",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.quote.breakup[*].title must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_36(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payments[*].id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.payments[*].id must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_37(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payments[*].collected_by",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.payments[*].collected_by must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_38(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payments[*].status",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.payments[*].status must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_39(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payments[*].type",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.payments[*].type must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_40(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payments[*].params.bank_code",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.payments[*].params.bank_code must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_41(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payments[*].params.bank_account_number",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.payments[*].params.bank_account_number must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_42(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.cancellation_terms[*].external_ref.url",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_43(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.cancellation_terms[*].external_ref.mimetype",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_44(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.cancellation.cancelled_by",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.cancellation.cancelled_by must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_attribute_45(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.cancellation.time",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.cancellation.time must be present in the payload`,
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
                const enumList = ["on_cancel"];
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
                            description: `- **condition A**: every element of $.context.action must be in ["on_cancel"]

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
                const enumList = ["SJT", "SFSJT", "RJT", "PASS"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].descriptor.code",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_6(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["METRO"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload`,
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
                const enumList = ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].type",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload`,
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
                const enumList = [
                    "START",
                    "END",
                    "INTERMEDIATE_STOP",
                    "TRANSIT_STOP",
                ];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].stops[*].type",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload`,
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
                const enumList = ["QR"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].stops[*].authorization.type",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload`,
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
                const enumList = ["UNCLAIMED", "CLAIMED", "EXPIRED"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].stops[*].authorization.status",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_12(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["INACTIVE", "ACTIVE"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].state.descriptor.code",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_13(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["NOT-PAID", "PAID"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payments[*].status",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.payments[*].status must **not** be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_14(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["BPP", "BAP"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payments[*].collected_by",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.payments[*].collected_by must **not** be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_15(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    "PRE-ORDER",
                    "ON-FULFILLMENT",
                    "POST-FULFILLMENT",
                ];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payments[*].type",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.payments[*].type must **not** be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_16(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    "BASE_FARE",
                    "REFUND",
                    "CANCELLATION_CHARGES",
                    "OFFER",
                    "TOLL",
                ];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*].title",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_enum_17(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    "SOFT_CANCEL",
                    "ACTIVE",
                    "COMPLETE",
                    "CANCELLED",
                    "CANCEL_INITIATED",
                ];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.status",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.status must be in ["SOFT_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED", "CANCEL_INITIATED"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.status must **not** be present in the payload`,
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
                const validTags = [
                    "ROUTE_INFO",
                    "TICKET_INFO",
                    "TRIP_DETAILS",
                    "INFO",
                ];
                const tagPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].state.descriptor.code",
                );

                const skipCheck = !validations.arePresent(tagPath);
                if (skipCheck) continue;

                const validate = validations.allIn(tagPath, validTags);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_tag_0_ROUTE_INFO(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='ROUTE_INFO')]",
            );
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].descriptor.code",
                );
                const validValues = ["ROUTE_ID", "ROUTE_DIRECTION"];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_tag_0_TICKET_INFO(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TICKET_INFO')]",
            );
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].descriptor.code",
                );
                const validValues = ["NUMBER"];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.list[*].descriptor.code must be in ["NUMBER"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_tag_0_TRIP_DETAILS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TRIP_DETAILS')]",
            );
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].descriptor.code",
                );
                const validValues = ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_tag_0_INFO(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='INFO')]",
            );
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].descriptor.code",
                );
                const validValues = ["PARENT_ITEM_ID"];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.list[*].descriptor.code must be in ["PARENT_ITEM_ID"]`,
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
                const validTags = ["FARE_POLICY"];
                const tagPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].tags[*].descriptor.code",
                );

                const skipCheck = !validations.arePresent(tagPath);
                if (skipCheck) continue;

                const validate = validations.allIn(tagPath, validTags);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_tag_1_FARE_POLICY(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]",
            );
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].descriptor.code",
                );
                const validValues = ["RESTRICTED_PERSON", "RESTRICTION_PROOF"];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_tag_2(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const validTags = ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"];
                const tagPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payments[*].tags[*].descriptor.code",
                );

                const skipCheck = !validations.arePresent(tagPath);
                if (skipCheck) continue;

                const validate = validations.allIn(tagPath, validTags);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]

	> Note: **Condition A** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_tag_2_BUYER_FINDER_FEES(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')]",
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
        function validate_tag_2_SETTLEMENT_TERMS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')]",
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
            validate_tag_0,
            validate_tag_0_ROUTE_INFO,
            validate_tag_0_TICKET_INFO,
            validate_tag_0_TRIP_DETAILS,
            validate_tag_0_INFO,
            validate_tag_1,
            validate_tag_1_FARE_POLICY,
            validate_tag_2,
            validate_tag_2_BUYER_FINDER_FEES,
            validate_tag_2_SETTLEMENT_TERMS,
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
