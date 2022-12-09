import {getNetwork, saveNetwork} from "../data.js";
import {validateRegisterUser, validateUserPassword} from "../../validate/users.js";

export const registerUser = (user) => {
    console.log(user)
    try {
        validateRegisterUser(user)
        validateUserPassword(user.password)
    }
    catch (e) {
        return {
            success: false,
            message: 'incorrect register user data'
        }
    }
    let network = getNetwork()
    let users = network['users']
    let dbUser = Object.values(users).filter(dbUser => dbUser.email === user.email)

    if (dbUser.length !== 0) return {
        success: false,
        message: 'email is taken'
    }


    const maxUserId = ++network['maxUserId']
    network['users'][`${maxUserId}`] = {
        id: maxUserId.toString(),
        firstName: user.firstName,
        lastName: user.lastName,
        patronymic: user.patronymic,
        birthday: user.birthday,
        email: user.email,
        password: user.password,
        status: "2",
        isAdministrator: false,
        friends: {},
        posts: [],
        messages: {
            sent: {},
            received: {}
        }
    }
    console.log(network['users'][`${maxUserId}`])
    saveNetwork()
    return {success: true, message: 'successful registration'}
}
