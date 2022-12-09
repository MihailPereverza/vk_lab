import {getNetwork, saveNetwork} from "../data.js";
import {validateUserId} from "../../validate/users.js";
import {validateStatus} from "../../validate/status.js";


export const changeUserStatus = (userId, newStatus) => {
    let network = getNetwork()
    validateUserId(network['users'], userId)
    validateStatus(network, newStatus)

    network['users'][userId.toString()]['status'] = newStatus.toString()
    saveNetwork()
    return network['users'][userId.toString()]
}