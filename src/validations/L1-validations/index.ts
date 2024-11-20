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

export function performL1Validations(action: string, payload: string) {
    switch (action) {
        case "search":
            return validateSearch(payload);
        case "select":
            return validateSelect(payload);
        case "init":
            return validateInit(payload);
        case "confirm":
            return validateConfirm(payload);
        case "status":
            return validateStatus(payload);
        case "cancel":
            return validateCancel(payload);
        case "on_search":
            return validateOn_search(payload);
        case "on_select":
            return validateOn_select(payload);
        case "on_init":
            return validateOn_init(payload);
        case "on_confirm":
            return validateOn_confirm(payload);
        case "on_cancel":
            return validateOn_cancel(payload);
        case "on_update":
            return validateOn_update(payload);
        case "on_status":
            return validateOn_status(payload);
        default:
            throw new Error("Action not found");
    }
}
