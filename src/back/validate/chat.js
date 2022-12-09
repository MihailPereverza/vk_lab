import {ValidationError} from "./errors.js";


export const validateChat = (users, userId, friendId) => {
    if (!Number.isInteger(Number(userId))) {
        throw new ValidationError('userId isnt integer')
    }
    if (!Number.isInteger(Number(friendId))) {
        throw new ValidationError('userId isnt integer')
    }
    if (!users[userId.toString()]){
        throw new ValidationError('not found userId')
    }
    if (!users[friendId.toString()]){
        throw new ValidationError('not found userId')
    }
    if (userId === friendId) {
        throw new ValidationError('userId must not equal friendId')
    }
}
