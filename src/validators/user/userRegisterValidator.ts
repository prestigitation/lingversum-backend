import { ErrorMessages } from 'validatorjs';
import rulesTemplate from '../../interfaces/rulesTemplate';
import { requestData } from '../../types/requestData';
import { makeValidator } from '../validatorHelper';

const RULES: rulesTemplate = {
    "name": "required|string|min:3|max:70",
    "email": "required|email",
    "password": "required|string|min:6|max:255"
}
export default (requestBody: requestData, errorMessages: ErrorMessages | undefined) => makeValidator(RULES, requestBody, errorMessages);