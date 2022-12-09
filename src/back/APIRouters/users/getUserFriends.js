import express from "express";
import {getFriends} from "../../services/users/getIUsernfo.js";


const router = express.Router()
router.use(express.json());

router.get('/friends/:id([0-9]{1,})', (req, res) => {
    console.log(getFriends(req.params.id))
    try {
        res.json(getFriends(req.params.id))
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.json({'error': e.name, 'message': e.message})
            return
        }
        res.json({'error': 'something', 'message': 'some error'})
    }
})


export {router as getUserFriendsRouter}
