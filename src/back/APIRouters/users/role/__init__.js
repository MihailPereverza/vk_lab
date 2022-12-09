import {Router} from "express";
import {changeUserRoleRouter} from "./changeRole.js";

const router = Router()

router.use(changeUserRoleRouter)


export {router as roleRouter}
