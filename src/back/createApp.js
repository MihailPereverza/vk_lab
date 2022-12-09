import express from "express";
import http from "http";
import {Server} from "socket.io";
import passport from "passport";
import {setPassportJWTMiddleware} from "./middleware/passport.js";
import morgan from "morgan";
import cors from "cors";
import {globalAPIRouter} from "./APIRouters/__init__.js";

export const createApp = () => {
    const PORT = 322
    const app = express()
    const httpServer = http.createServer(app);
    const io = new Server(httpServer, {
        cors:{
            origin: '*'
        }
    })

    io.on('connection', (socket) => {
        console.log('gay')
        socket.on('join', (data) => {
            console.log('join')
            console.log(data)
            socket.join(data.room)

            io.in(data.room).emit('message', {message: 'gaygaygay'})

        })

        socket.on('message', (data) => {
            io.in(data.room).emit('message', {message: data.message})
        })
    })

    app.use(passport.initialize())
    setPassportJWTMiddleware(passport)

    app.use(morgan('dev'))
    app.use(cors())
// app.use(express.static('./src/front/pages'));
// app.use(express.static('./src/front/public'));
// app.use(express.static('./gulpdist/pages'));
// app.use(express.static('./gulpdist/public'));
    app.use(express.static('./dist'));



    app.use('/api', globalAPIRouter)
// app.get('/aaaa', (req, res) => {
//     io.in('1').emit('message', {message: 'sosi'})
//     console.log('sosi')
//     res.status(200)
//     res.json({status: 'ok'})
// })

// console.log('afsdf')
    return {app: app, io: io, httpServer: httpServer, PORT: PORT}
}

let a = createApp()
export const app = a.app
export const io = a.io
export const httpServer = a.httpServer
export const PORT = a.PORT