import validatorFactoryInterface from "../interfaces/validatorFactoryInterface";
import Validator, { ErrorMessages } from "validatorjs";
import { Inject, Service } from "typedi";
import { requestData } from "../types/requestData";
import rulesTemplate from "../interfaces/rulesTemplate";

@Service()
export default class validatorFactory implements validatorFactoryInterface {
    buildValidator(data: requestData, rules: rulesTemplate, customMessages?: ErrorMessages | undefined): Validator.Validator<object> {
        return new Validator(data, rules, customMessages);
    }
}