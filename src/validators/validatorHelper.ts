import { ErrorMessages } from "validatorjs";
import rulesTemplate from "../interfaces/rulesTemplate";
import { requestData } from "../types/requestData";
import Container from "typedi";
import validatorFactory from "./validatorFactory";

export function makeValidator(rules: rulesTemplate, requestBody: requestData, errorMessages?: ErrorMessages | undefined) {
    return (() => Container.get(validatorFactory).buildValidator(requestBody, rules, errorMessages))();
}