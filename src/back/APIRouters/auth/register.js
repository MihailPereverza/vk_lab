import express from "express";
import {registerUser} from "../../services/auth/register.js";


const router = express.Router()
router.use(express.json());

router.post('/register', (req, res) => {
    const body = req.body
    try {
        res.json(registerUser(body))
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.json({'error': e.name, 'message': e.message})
            return
        }
        res.json({'error': 'something', 'message': 'some error'})
    }
})


export {router as registerRouter}
