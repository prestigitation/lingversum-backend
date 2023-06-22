import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"; 
import User from "../../models/user.model";

export default function authenticateJwt(request: Request & {user: typeof User}, response: Response, next: NextFunction) {
    const authHeader = request.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return response.sendStatus(401).redirect("/login")

    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
        console.log(err)

        if (err) return response.sendStatus(403)

        request.user = user

        next()
    })
}