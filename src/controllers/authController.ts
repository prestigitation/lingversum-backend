import { Response, Request } from "express";
import { Service } from "typedi";
import md5 from "md5";
import userRegisterValidator from "../validators/user/userRegisterValidator";
import User from "../../models/user.model";


@Service()
export default class authController {
    
    login(request: Request, response: Response) {
        
    }

    async register(request: Request, response: Response) {
        const {email, password, name} = request.body
        if(await User.findOne({
            where: {
                email
            }
        })) {
            return response.status(409).send(request.t("USER.ALREADY_EXISTS"));
        } else {
            let validator = userRegisterValidator(request.body, undefined)
            if(validator.passes()) {
                let user = User.create({email,name,password: md5(password)});

                return response.status(200).json(user);
            } else {
                return response.status(422).send(request.t("USER.NOT_VALIDATED"))
            }
        }
    } 
}