import {Router} from "express";
import {roleRouter} from "./role/__init__.js";
import {getUserByIdRouter} from "./getById.js";
import {getUserFriendsRouter} from "./getUserFriends.js";
import {getAllUsersRouter} from "./getAllUsers.js";
import {getUserNewsRouter} from "./getUserNews.js";
import {createUserNewsRouter} from "./createUserNews.js";


const router = Router()

router.use('/', getUserByIdRouter)
router.use('/', getUserFriendsRouter)
router.use('/', getAllUsersRouter)
router.use('/', getUserNewsRouter)
router.use('/', createUserNewsRouter)
router.use('/role', roleRouter)


export {router as usersRouter}
