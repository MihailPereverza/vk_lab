import {getNetwork} from "../data.js";
import {validateUserId} from "../../validate/users.js";


export const getAllUsers = () => {
    let network = getNetwork()
    let users = network['users']
    return Object.values(users)
}


export const getUserById = (userId) => {
    let users = getNetwork()['users']
    validateUserId(users, userId)

    return users[userId.toString()]
}


export const getFriends = (userId) => {
    let users = getNetwork()['users']
    validateUserId(users, userId)

    let res = {}
    for (let friendId of Object.keys(users[userId.toString()]['friends'])) {
        res[friendId.toString()] = users[friendId.toString()]
    }
    return res
}
