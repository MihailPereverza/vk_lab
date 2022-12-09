import {getNetwork} from "../data.js";


export const getAllStatuses = () => {
    return getNetwork()['statuses']
}