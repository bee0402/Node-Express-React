import {Document} from "mongoose";

export interface IUser extends Document{
    text: string;
}
