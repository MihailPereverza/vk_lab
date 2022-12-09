import express from "express";
import {changeUserStatus} from "../../services/statuses/updateStatusInfo.js";


const router = express.Router()
router.use(express.json());

router.post('/', (req, res) => {
    const body = req.body
    // try {
    res.json(changeUserStatus(body['userId'], body['status']))
    // } catch (e) {
    //     if (e.name === 'ValidationError') {
    //         res.json({'error': e.name, 'message': e.message})
    //         return
    //     }
    //     res.json({'error': 'something', 'message': 'some error'})
    // }
})


export {router as changeUserStatusRouter}
