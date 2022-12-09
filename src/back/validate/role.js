import {ValidationError} from "./errors.js";


export const validateRole = (role) => {
    if (role !== 'administrator' && role !== 'bedolaga') {
        throw new ValidationError('role not validate')
    }
}