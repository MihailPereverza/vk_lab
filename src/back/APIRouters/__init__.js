import {Router} from "express";
import {usersRouter} from "./users/__init__.js";
import {statusesRouter} from "./statuses/__init__.js";
import {authRouter} from "./auth/__init__.js";
import passport from "passport";


const router = Router()

router.use('/auth', authRouter)

router.use(passport.authenticate('jwt', {session: false}))
router.use('/users', usersRouter)
router.use('/statuses', statusesRouter)


export {router as globalAPIRouter}