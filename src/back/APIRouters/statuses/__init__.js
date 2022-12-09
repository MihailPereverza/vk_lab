import {Router} from "express";
import {getAllStatusesRouter} from "./getAllStatuses.js";
import {changeUserStatusRouter} from "./changeUserStatus.js";


const router = Router()

router.use(getAllStatusesRouter)
router.use(changeUserStatusRouter)

export {router as statusesRouter}
