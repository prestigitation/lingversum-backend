import baseRepository from "./baseRepository";
import authRepositoryInterface from "../interfaces/authRepositoryInterface";
import User from "../../models/user.model";
import userProperties from "../interfaces/userProperties";
import { Model } from "sequelize";

export default class authRepository extends baseRepository implements authRepositoryInterface {
    constructor() {
        super();
    }

    createUser(userProperties: userProperties): Model<typeof User> {
        return new User();
    }
}