import {IUser} from "../domain/IUser";
import Database from '../dbConfigs';
import {Schema} from "mongoose";

const {mongo: {model}} = Database;

const TestSchema: Schema<IUser> = new Schema<IUser>({text: {type: String, required: true}});

export default model<IUser>('Test',TestSchema);

