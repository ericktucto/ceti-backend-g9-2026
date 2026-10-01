import * as jose from 'jose'
import { JwtTokenInvalid } from '../exceptions.js'

const secret = new TextEncoder().encode(process.env.JWT_SECRET,)

export async function verify(token) {
    try {
        const { payload } = await jose.jwtVerify(token, secret)
        return payload
    } catch(e) {
        throw new JwtTokenInvalid("Token invalid")
    }
    
}
export async function generateToken(payload) {
    const token = await new jose.SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('2h')
        .sign(secret)
    return token
}