import {ValidationError} from "./errors.js";


export const validateUserId = (users, userId) => {

    if (!Number.isInteger(Number(userId))) {
        throw new ValidationError('userId isnt integer')
    }
    if (!users[userId.toString()]){
        throw new ValidationError('not found userId')
    }
}


export const validateRegisterUser = (user) => {
    if (!user.email || !user.firstName || !user.lastName || !user.patronymic || !user.birthday || !user.password) {
        throw new ValidationError('incorrect register user data')
    }
}


export const validateUserPassword = (password) => {
    if (password.length < 6) {
        throw new ValidationError('incorrect user password')
    }
}



