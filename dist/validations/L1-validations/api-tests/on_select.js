"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = on_select;
const json_path_utils_1 = __importDefault(require("../utils/json-path-utils"));
const validation_utils_1 = __importDefault(require("../utils/validation-utils"));
function on_select(input) {
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
        function validate_id_13(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].id");
                const validate = validation_utils_1.default.arePresent(attr);
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
        function validate_code_14(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].descriptor.code");
                const validate = validation_utils_1.default.arePresent(attr);
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
        function validate_currency_15(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].price.currency");
                const validate = validation_utils_1.default.arePresent(attr);
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
        function validate_value_16(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].price.value");
                const validate = validation_utils_1.default.arePresent(attr);
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
        function validate_count_17(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].quantity.selected.count");
                const validate = validation_utils_1.default.arePresent(attr);
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
        function validate_fulfillment_ids_18(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].fulfillment_ids[*]");
                const validate = validation_utils_1.default.arePresent(attr);
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
        function validate_label_19(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].time.label");
                const validate = validation_utils_1.default.arePresent(attr);
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
        function validate_duration_20(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].time.duration");
                const validate = validation_utils_1.default.arePresent(attr);
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
        function validate_id_21(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.provider.id");
                const validate = validation_utils_1.default.arePresent(attr);
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
        function validate_name_22(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.provider.descriptor.name");
                const validate = validation_utils_1.default.arePresent(attr);
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
        function validate_id_23(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].id");
                const validate = validation_utils_1.default.arePresent(attr);
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
        function validate_value_24(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.quote.price.value");
                const validate = validation_utils_1.default.arePresent(attr);
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
        function validate_currency_25(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.quote.price.currency");
                const validate = validation_utils_1.default.arePresent(attr);
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
        function validate_title_26(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.quote.breakup[*].title");
                const validate = validation_utils_1.default.arePresent(attr);
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
        function validate_category_ids_27(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].category_ids[*]");
                const validate = validation_utils_1.default.arePresent(attr);
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
        function validate_start_28(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.provider.time.range.start");
                const validate = validation_utils_1.default.arePresent(attr);
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
        function validate_end_29(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.provider.time.range.end");
                const validate = validation_utils_1.default.arePresent(attr);
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
        function validate_type_30(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].type");
                const validate = validation_utils_1.default.arePresent(attr);
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
        function validate_currency_31(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.quote.breakup[*].item.price.currency");
                const validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_value_32(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.quote.breakup[*].item.price.value");
                const validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.quote.breakup[*].item.price.value must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_count_33(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.quote.breakup[*].item.quantity.selected.count");
                const validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: $.message.order.quote.breakup[*].item.quantity.selected.count must be present in the payload`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_url_34(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.cancellation_terms[*].external_ref.url");
                const validate = validation_utils_1.default.arePresent(attr);
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
        function validate_mimetype_35(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.cancellation_terms[*].external_ref.mimetype");
                const validate = validation_utils_1.default.arePresent(attr);
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
        function validate_enum_1(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["on_select"];
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
                            description: `- **condition A**: every element of $.context.action must be in ["on_select"]

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
                const enumList = ["SJT", "SFSJT", "RJT", "PASS"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].descriptor.code");
                const skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
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
        function validate_enum_6(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["METRO"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].vehicle.category");
                const skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
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
        function validate_enum_8(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].type");
                const skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
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
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].stops[*].type");
                const skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
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
        function validate_enum_10(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["QR"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].stops[*].authorization.type");
                const skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
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
        function validate_enum_11(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["UNCLAIMED", "CLAIMED", "EXPIRED"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].stops[*].authorization.status");
                const skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
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
        function validate_enum_12(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["INACTIVE", "ACTIVE"];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].state.descriptor.code");
                const skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
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
        function validate_enum_13(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    "BASE_FARE",
                    "REFUND",
                    "CANCELLATION_CHARGES",
                    "OFFER",
                    "TOLL",
                ];
                const enumPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.quote.breakup[*].title");
                const skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                const validate = validation_utils_1.default.allIn(enumPath, enumList);
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
        function validate_tag_0(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const validTags = [
                    "ROUTE_INFO",
                    "TICKET_INFO",
                    "TRIP_DETAILS",
                    "INFO",
                ];
                const tagPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.fulfillments[*].state.descriptor.code");
                const skipCheck = !validation_utils_1.default.arePresent(tagPath);
                if (skipCheck)
                    continue;
                const validate = validation_utils_1.default.allIn(tagPath, validTags);
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
        function validate_tag_0_ROUTE_INFO(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='ROUTE_INFO')]");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = json_path_utils_1.default.getJsonPath(testObj, "$.list[*].descriptor.code");
                const validValues = ["ROUTE_ID", "ROUTE_DIRECTION"];
                const validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_tag_0_TICKET_INFO(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TICKET_INFO')]");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = json_path_utils_1.default.getJsonPath(testObj, "$.list[*].descriptor.code");
                const validValues = ["NUMBER"];
                const validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_tag_0_TRIP_DETAILS(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TRIP_DETAILS')]");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = json_path_utils_1.default.getJsonPath(testObj, "$.list[*].descriptor.code");
                const validValues = ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"];
                const validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_tag_0_INFO(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='INFO')]");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = json_path_utils_1.default.getJsonPath(testObj, "$.list[*].descriptor.code");
                const validValues = ["PARENT_ITEM_ID"];
                const validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='INFO')].list[*].descriptor.code must be in ["PARENT_ITEM_ID"]`,
                        },
                    ];
                }
            }
            return [{ valid: true }];
        }
        function validate_tag_1(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const validTags = ["FARE_POLICY"];
                const tagPath = json_path_utils_1.default.getJsonPath(testObj, "$.message.order.items[*].tags[*].descriptor.code");
                const skipCheck = !validation_utils_1.default.arePresent(tagPath);
                if (skipCheck)
                    continue;
                const validate = validation_utils_1.default.allIn(tagPath, validTags);
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
        function validate_tag_1_FARE_POLICY(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]");
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = json_path_utils_1.default.getJsonPath(testObj, "$.list[*].descriptor.code");
                const validValues = ["RESTRICTED_PERSON", "RESTRICTION_PROOF"];
                const validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    return [
                        {
                            valid: false,
                            errorCode: 30000,
                            description: `- **condition A**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]`,
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
            validate_id_13,
            validate_code_14,
            validate_currency_15,
            validate_value_16,
            validate_count_17,
            validate_fulfillment_ids_18,
            validate_label_19,
            validate_duration_20,
            validate_id_21,
            validate_name_22,
            validate_id_23,
            validate_value_24,
            validate_currency_25,
            validate_title_26,
            validate_category_ids_27,
            validate_start_28,
            validate_end_29,
            validate_type_30,
            validate_currency_31,
            validate_value_32,
            validate_count_33,
            validate_url_34,
            validate_mimetype_35,
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
            validate_tag_0,
            validate_tag_0_ROUTE_INFO,
            validate_tag_0_TICKET_INFO,
            validate_tag_0_TRIP_DETAILS,
            validate_tag_0_INFO,
            validate_tag_1,
            validate_tag_1_FARE_POLICY,
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
