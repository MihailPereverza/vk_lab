import express from "express";
import {getUserById} from "../../services/users/getIUsernfo.js";


const router = express.Router()
router.use(express.json());

router.get('/:id([0-9]{1,})', (req, res) => {
    let reqId = req.params.id
    if (req.params.id.toString() === '0') {
        reqId = req.user.id
    }
    try {
        res.json(getUserById(reqId))
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.json({'error': e.name, 'message': e.message})
            return
        }
        res.json({'error': 'something', 'message': 'some error'})
    }
})


export {router as getUserByIdRouter}
