import userProperties from "./userProperties";

export type userCreationProperties = Exclude<userProperties, ['id']>;