import {getNetwork} from "../data.js";
import {keys} from "../../keys.js";
import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;

export const loginUser = (user) => {
    let network = getNetwork()
    let users = network['users']
    let dbUser = Object.values(users).filter(dbUser => dbUser.email === user.email)

    if (dbUser.length === 0 || dbUser[0].password !== user.password) return {
        result: false,
        message: 'incorrect email or password'
    }

    const token = sign({
            email: dbUser[0].email,
            id: dbUser[0].id
        }, keys.jwt, {expiresIn: 60 * 60})

    return {success: true, token: `Bearer ${token}`}
}