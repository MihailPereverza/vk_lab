import {getNetwork} from "../data.js";
import {validateUserId} from "../../validate/users.js";


export const getUserPosts = (userId) => {
    let network = getNetwork()
    validateUserId(network['users'], userId)

    let postsIds = network['users'][userId.toString()]['posts']
    let res = []

    for (let postId of postsIds) {
        res.push(network['posts'][postId.toString()])
    }
    return res
}


export const getUserNews = (userId) => {
    let network = getNetwork()
    validateUserId(network['users'], userId)

    let res = {}
    let postsId = []
    let friends = Object.keys(network['users'][userId.toString()]['friends'])
    for (let friend of friends) {
        postsId.push(...network['users'][friend.toString()]['posts'])
    }
    for (let post of postsId) {
        let tempPost = network['posts'][post.toString()]
        tempPost['lastName'] = network['users'][tempPost['userId']].lastName
        tempPost['firstName'] = network['users'][tempPost['userId']].firstName
        res[post] = tempPost
    }
    return res
}


export const getUserLNews = (userId) => {
    let network = getNetwork()
    validateUserId(network['users'], userId)

    let res = []
    let postsId = []
    let friends = Object.keys(network['users'][userId.toString()]['friends'])
    for (let friend of friends) {
        postsId.push(...network['users'][friend.toString()]['posts'])
    }
    for (let post of postsId) {
        let tempPost = network['posts'][post.toString()]
        tempPost['lastName'] = network['users'][tempPost['userId']].lastName
        tempPost['firstName'] = network['users'][tempPost['userId']].firstName
        res.push(tempPost)
    }
    return res
}