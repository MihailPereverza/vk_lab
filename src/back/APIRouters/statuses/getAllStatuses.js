import express from "express";
import {getAllStatuses} from "../../services/statuses/getStatustsInfo.js";


const router = express.Router()
router.use(express.json());

router.get('/', (req, res) => {
    try {
        res.json(getAllStatuses())
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.json({'error': e.name, 'message': e.message})
            return
        }
        res.json({'error': 'something', 'message': 'some error'})
    }
})


export {router as getAllStatusesRouter}
