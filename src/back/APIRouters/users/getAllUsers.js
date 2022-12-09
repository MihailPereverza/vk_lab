import express from "express";
import {getAllUsers} from "../../services/users/getIUsernfo.js";


const router = express.Router()
router.use(express.json());

router.get('/', (req, res) => {
    try {
        res.json(getAllUsers())
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.json({'error': e.name, 'message': e.message})
            return
        }
        res.json({'error': 'something', 'message': 'some error'})
    }
})


export {router as getAllUsersRouter}
