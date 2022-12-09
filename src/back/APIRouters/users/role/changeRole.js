import express from "express";
import {changeUserRole} from "../../../services/role/updateData.js";


const router = express.Router()
router.use(express.json());

router.post('/', (req, res) => {
    const body = req.body
    try {
        res.json(changeUserRole(body['userId'], body['role']))
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.json({'error': e.name, 'message': e.message})
            return
        }
        res.json({'error': 'something', 'message': 'some error'})
    }
})


export {router as changeUserRoleRouter}
