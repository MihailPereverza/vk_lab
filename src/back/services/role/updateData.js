import {getNetwork, saveNetwork} from "../data.js";
import {validateUserId} from "../../validate/users.js";
import {validateRole} from "../../validate/role.js";


export const changeUserRole = (userId, newRole) => {
    let users = getNetwork()['users']
    validateUserId(users, userId)
    validateRole(newRole)

    users[userId.toString()]['isAdministrator'] = newRole === 'administrator'
    saveNetwork()

    return users[userId.toString()]
}