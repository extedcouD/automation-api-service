"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.performL0Validations = performL0Validations;
const fs_1 = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const js_yaml_1 = __importDefault(require("js-yaml"));
const ajv_1 = __importDefault(require("ajv"));
const ajv_formats_1 = __importDefault(require("ajv-formats"));
const logger_1 = __importDefault(require("../../utils/logger"));
function performL0Validations(actionPayload, action) {
    logger_1.default.info("Performing L0 validations", action);
    const pathC = path_1.default.resolve(__dirname, `../../schemas/${action}.yaml`);
    logger_1.default.info(`path ${pathC}`);
    if (!fs_1.default.existsSync(path_1.default.resolve(__dirname, `../../schemas/${action}.yaml`))) {
        return { valid: false, errors: ["INVALID ACTION"] };
    }
    const rawSchema = (0, fs_1.readFileSync)(path_1.default.resolve(__dirname, `../../schemas/${action}.yaml`), "utf-8");
    const schema = js_yaml_1.default.load(rawSchema);
    const ajv = new ajv_1.default({ allErrors: true });
    (0, ajv_formats_1.default)(ajv);
    const validate = ajv.compile(schema);
    const valid = validate(actionPayload);
    if (!valid)
        return createErrorMessage(validate, valid);
    return { valid: valid, errors: validate.errors };
}
function createErrorMessage(validate, valid) {
    const errorMessages = validate.errors.map((error) => {
        const { instancePath, message, keyword, params } = error;
        // Customize error messages based on validation keywords
        switch (keyword) {
            case "additionalProperties":
                const additionalProp = params.additionalProperty;
                return `${instancePath} ${message}: '${additionalProp}'`;
            case "type":
                const expectedType = params.type;
                return `${instancePath} should be of type '${expectedType}'`;
            case "enum":
                const allowedValues = params.allowedValues.join(", ");
                return `${instancePath} must be one of the allowed values: ${allowedValues}`;
            case "minLength":
                return `${instancePath} should have at least ${params.limit} characters`;
            case "maxLength":
                return `${instancePath} should have no more than ${params.limit} characters`;
            case "minimum":
                return `${instancePath} should be >= ${params.limit}`;
            case "maximum":
                return `${instancePath} should be <= ${params.limit}`;
            case "required":
                const missingProperty = params.missingProperty;
                return `Missing required property: '${missingProperty}'`;
            default:
                // General message for other error types
                return `${instancePath} ${message}`;
        }
    });
    return { valid: false, errors: errorMessages.join(",") };
}
