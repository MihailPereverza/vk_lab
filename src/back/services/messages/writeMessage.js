import {getNetwork, saveNetwork} from "../data.js";
import {validateChat} from "../../validate/chat.js";
import {io} from "../../app.js";

export const writeMessage = (userId, friendId, textMessage) => {
    let network = getNetwork()
    let users = network['users']

    validateChat(users, userId, friendId)
    const maxMessageId = ++network['maxMessageId']

    let date = new Date()
    network['messages'][maxMessageId.toString()] = {
        id: maxMessageId.toString(),
        fromId: userId.toString(),
        toId: friendId.toString(),
        text: textMessage,
        date: `${date.getMinutes()}-${date.getHours()}-${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
    }

    let sent = network['users'][userId.toString()]['messages']['sent'][friendId.toString()]
    if (!sent || sent.length === 0) {
        network['users'][userId.toString()]['messages']['sent'][friendId.toString()] = []
    }
    network['users'][userId.toString()]['messages']['sent'][friendId.toString()].push(maxMessageId.toString())

    let received = network['users'][friendId.toString()]['messages']['received'][userId.toString()]
    if (!received || received.length === 0) {
        network['users'][friendId.toString()]['messages']['received'][userId.toString()] = []
    }
    network['users'][friendId.toString()]['messages']['received'][userId.toString()].push(maxMessageId.toString())

    saveNetwork()

    io.in(userId).emit('message', )
    return {success: true, messageId: maxMessageId}
}

