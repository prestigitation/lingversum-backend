import { ErrorMessages, Validator } from "validatorjs";
import { requestData } from "../types/requestData";
import rulesTemplate from "./rulesTemplate";

export default interface validatorFactoryInterface {
    buildValidator(data: requestData, rules: rulesTemplate, customMessages?: ErrorMessages | undefined): Validator<object>;
}