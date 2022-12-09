import {getNetwork, saveNetwork} from "../data.js";
import {validateUserId} from "../../validate/users.js";
import {io} from "../../createApp.js";

export const createPost = (userId, postText) => {
    let network = getNetwork()
    validateUserId(network['users'], userId)

    const maxPostId = ++network['maxPostId']

    const date = new Date()
    let newPost = {
        postId: maxPostId.toString(),
        userId: userId.toString(),
        date: `${date.getMinutes()}-${date.getHours()}-${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
        text: postText
    }
    network['posts'][maxPostId.toString()] = newPost

    network['users'][userId.toString()]['posts'].push(maxPostId.toString())


    newPost['firstName'] = network['users'][userId.toString()].firstName
    newPost['lastName'] = network['users'][userId.toString()].lastName
    for (let friend of Object.keys(network['users'][userId.toString()]['friends'])) {
        console.log(friend)
        io.in(friend.toString()).emit('news', newPost)
    }
    saveNetwork()

    return {success: true, postId: maxPostId}
}