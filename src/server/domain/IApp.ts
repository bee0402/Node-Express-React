import internal from "stream";
import {IUser} from "./IUser";

export interface AppStates {
    galaxyNumber: number, 
    priority: number,
    planetName: string, 
    textOfPostTest: string,
    textForPost: string,
    textOfPutTest: string,
    textForPut: string,
    textOfDeleteTest: string,
    textForDelete: string,
    response?: IUser,
}

export interface AppProps {}
