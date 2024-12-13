import fs, {readFileSync} from "fs";
import path from "path";
import yaml from "js-yaml";
import Ajv from "ajv";
import addFormats from "ajv-formats";

export function performL0Validations(actionPayload: any, action: string) {
    console.log(action);
    if (!fs.existsSync(path.resolve(__dirname, `../../schemas/${action}.yaml`))) {
        console.log(action);
        return {valid: false, errors: ["INVALID ACTION"]};
    }
    const rawSchema = readFileSync(
        path.resolve(__dirname, `../../schemas/${action}.yaml`),
        "utf-8"
    );
    const schema = yaml.load(rawSchema);
    const ajv = new Ajv({allErrors: true});
    addFormats(ajv);
    const validate = ajv.compile(schema as any);
    const valid = validate(actionPayload);
    if (!valid) return createErrorMessage(validate, valid);
    return {valid: valid, errors: validate.errors};
}

function createErrorMessage(validate: any, valid: boolean) {
    const errorMessages = validate.errors.map((error: any) => {
        const {instancePath, message, keyword, params} = error;

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

    return {valid: false, errors: errorMessages.join(",")};
}
