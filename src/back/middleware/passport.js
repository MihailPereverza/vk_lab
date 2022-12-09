import {
    Strategy as JWTStrategy,
    ExtractJwt,
} from 'passport-jwt';
import {keys} from "../keys.js";
import {getUserById} from "../services/users/getIUsernfo.js";


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt
}

export const setPassportJWTMiddleware = passport =>{
    passport.use(
        new JWTStrategy(options, (payload, done) => {
            try {
                const user = getUserById(payload.id)
                done(null, user)
            } catch (e) {
                done(null, false)
            }
        })
    )
}