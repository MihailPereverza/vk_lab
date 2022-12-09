import {ValidationError} from "./errors.js";

export const validateStatus = (network, status) => {
    if (!network['statuses'][status.toString()]) {
        throw ValidationError(`not found status ${status} (must be statusId - int)`)
    }
}