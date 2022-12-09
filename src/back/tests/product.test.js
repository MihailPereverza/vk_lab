import supertest from 'supertest'
import {app} from "../createApp.js";
import {loginUser} from "../services/auth/login.js";




describe("Post endpoints", () => {
    it('login', async () => {
        const {statusCode, body} = await supertest(app).post('/api/auth/login').send({email: 'emilsadycov@yandex.ru', password: "22222222"})
        expect(body['success']).toEqual(true)
        expect(!!body['token']).toEqual(true)
    })
    const userId = '2'
    const a = loginUser({email: 'emilsadycov@yandex.ru', password: "22222222"})
    it('chageUserStatus', async () => {
        const {statusCode, body} = await supertest(app).post('/api/statuses').set({'Authorization': a.token}).send({userId: '2', status: '2'})
        // expect(body).toEqual({})
        expect(body['email']).toEqual("emilsadycov@yandex.ru")
        expect(body['password']).toEqual("22222222")
        expect(body['status']).toEqual("2")
    })

    it('chageUserRole', async () => {
        const {statusCode, body} = await supertest(app).post('/api/users/role').set({'Authorization': a.token}).send({userId: '2', role: 'administrator'})
        // expect(body).toEqual({})
        expect(body['email']).toEqual("emilsadycov@yandex.ru")
        expect(body['password']).toEqual("22222222")
        expect(body['isAdministrator']).toEqual(true)
    })

    it('getById', async () => {
        const {statusCode, body} = await supertest(app).get('/api/users/2').set({'Authorization': a.token})
        // expect(body).toEqual({})
        expect(body['email']).toEqual("emilsadycov@yandex.ru")
        expect(body['password']).toEqual("22222222")
    })

    it('getById', async () => {
        const {statusCode, body} = await supertest(app).get('/api/users/0').set({'Authorization': a.token})
        // expect(body).toEqual({})
        expect(body['email']).toEqual("emilsadycov@yandex.ru")
        expect(body['password']).toEqual("22222222")
    })
})
