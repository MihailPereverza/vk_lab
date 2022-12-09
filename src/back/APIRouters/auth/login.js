import express from "express";
import {changeUserStatus} from "../../services/statuses/updateStatusInfo.js";
import {loginUser} from "../../services/auth/login.js";


const router = express.Router()
router.use(express.json());

router.post('/login', (req, res) => {
    const body = req.body
    console.log(body)
    try {
        res.json(loginUser(body))
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.json({'error': e.name, 'message': e.message})
            return
        }
        res.json({'error': 'something', 'message': 'some error'})
    }
})


export {router as loginRouter}
