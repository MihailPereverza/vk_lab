import express from "express";
import {getFriends} from "../../services/users/getIUsernfo.js";
import {getUserLNews, getUserNews, getUserPosts} from "../../services/posts/getPostsInfo.js";


const router = express.Router()
router.use(express.json());


router.get('/news/my', (req, res) => {
    try {
        res.json(getUserLNews(req.user.id))
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.json({'error': e.name, 'message': e.message})
            return
        }
        res.json({'error': 'something', 'message': 'some error'})
    }
})


router.get('/news/:id([0-9]{1,})', (req, res) => {
    console.log(getFriends(req.params.id))
    try {
        res.json(getUserNews(req.params.id))
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.json({'error': e.name, 'message': e.message})
            return
        }
        res.json({'error': 'something', 'message': 'some error'})
    }
})


router.get('/lnews/:id([0-9]{1,})', (req, res) => {
    console.log(getFriends(req.params.id))
    // try {
        res.json(getUserLNews(req.params.id))
    // } catch (e) {
    //     if (e.name === 'ValidationError') {
    //         res.json({'error': e.name, 'message': e.message})
    //         return
    //     }
    //     res.json({'error': 'something', 'message': 'some error'})
    // }
})


router.get('/posts/:id([0-9]{1,})', (req, res) => {
    const user = req.user
    if (req.params.id.toString() === '0') {
        try {
            res.json(getUserPosts(user.id))
        } catch (e) {
            if (e.name === 'ValidationError') {
                res.json({'error': e.name, 'message': e.message})
                return
            }
            res.json({'error': 'something', 'message': 'some error'})
        }
    }
    try {
        res.json(getUserPosts(req.params.id))
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.json({'error': e.name, 'message': e.message})
            return
        }
        res.json({'error': 'something', 'message': 'some error'})
    }
})


export {router as getUserNewsRouter}
