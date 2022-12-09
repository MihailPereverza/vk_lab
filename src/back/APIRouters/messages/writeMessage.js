import express from "express";
import {writeMessage} from "../../services/messages/writeMessage.js";


const router = express.Router()
router.use(express.json());

router.post('/write', (req, res) => {
    const user = req.user
    const body = req.body
    try {
        res.json(writeMessage(user.id, body.userId, body.text))
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.json({'error': e.name, 'message': e.message})
            return
        }
        res.json({'error': 'something', 'message': 'some error'})
    }
})


export {router as loginRouter}
