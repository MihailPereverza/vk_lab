import {Router} from "express";


const router = Router()

router.use(loginRouter)
router.use(registerRouter)

export {router as messagesRouter}
