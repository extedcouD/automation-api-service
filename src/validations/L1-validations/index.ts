import { validateSearch } from "./search";
import { validateSelect } from "./select";
import { validateInit } from "./init";
import { validateConfirm } from "./confirm";
import { validateStatus } from "./status";
import { validateCancel } from "./cancel";
import { validateOn_search } from "./on_search";
import { validateOn_select } from "./on_select";
import { validateOn_init } from "./on_init";
import { validateOn_confirm } from "./on_confirm";
import { validateOn_cancel } from "./on_cancel";
import { validateOn_update } from "./on_update";
import { validateOn_status } from "./on_status";

export function performL1Validations(
    action: string,
    payload: string,
    externalData = {},
) {
    switch (action) {
        case "search":
            return validateSearch(payload, externalData);
        case "select":
            return validateSelect(payload, externalData);
        case "init":
            return validateInit(payload, externalData);
        case "confirm":
            return validateConfirm(payload, externalData);
        case "status":
            return validateStatus(payload, externalData);
        case "cancel":
            return validateCancel(payload, externalData);
        case "on_search":
            return validateOn_search(payload, externalData);
        case "on_select":
            return validateOn_select(payload, externalData);
        case "on_init":
            return validateOn_init(payload, externalData);
        case "on_confirm":
            return validateOn_confirm(payload, externalData);
        case "on_cancel":
            return validateOn_cancel(payload, externalData);
        case "on_update":
            return validateOn_update(payload, externalData);
        case "on_status":
            return validateOn_status(payload, externalData);
        default:
            throw new Error("Action not found");
    }
}
