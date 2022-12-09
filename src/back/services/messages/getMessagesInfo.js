import {getNetwork} from "../data.js";
import {validateChat} from "../../validate/chat.js";


export const getChat = (userId, friendId) => {
    let network = getNetwork()
    let users = network['users']
    validateChat(users, userId, friendId)

    let userMessages = users[userId.toString()]['messages']['sent'][friendId.toString()]
    let friendMessages = users[userId.toString()]['messages']['received'][friendId.toString()]
    let messages = []

    for (let mesId of userMessages) {
        messages.push(network['messages'][mesId.toString()])
    }
    for (let mesId of friendMessages) {
        messages.push(network['messages'][mesId.toString()])
    }
    messages.sort((a, b) => {
        a = a['date'].split('-')
        b = b['date'].split('-')
        return new Date(a[4], a[3], a[2], a[1], a[0]) - new Date(b[4], b[3], b[2], b[1], b[0])
    })
    return messages
}




// let a = "14-18-26-10-2022"
// console.log(new Date(a[4], a[3], a[2], a[1], a[0]))


// export const getById = (userId) => {
//     let users = getNetwork()['users']
//     validateUserId(users, userId)
//
//     return users[userId.toString()]
// }




// let a = getById("3")
// console.log(a)