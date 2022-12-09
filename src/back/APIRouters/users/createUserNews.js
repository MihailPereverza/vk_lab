import express from "express";
import {createPost} from "../../services/posts/createPost.js";


const router = express.Router()
router.use(express.json());

/*
/api/users/news/create
*/
router.post('/news/create', (req, res) => {
    const user = req.user
    const body = req.body
    try {
        res.json(createPost(user.id, body.text))
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.json({'error': e.name, 'message': e.message})
            return
        }
        res.json({'error': 'something', 'message': 'some error'})
    }
})


export {router as createUserNewsRouter}
