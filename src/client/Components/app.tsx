import * as React from 'react';
import {
    isSafari,
    isChrome
} from "react-device-detect";
import '../Less/app.less';
import {apiRoute} from '../utils';
import {AppProps, AppStates} from "../../server/domain/IApp";
import {IUser} from "../../server/domain/IUser";
import {Put, Post, Delete} from "../Services";

export default class App extends React.Component<AppProps, AppStates> {
    state: AppStates = {
        galaxyNumber: 0, 
        priority: 0,
        planetName: '',
        textOfPostTest: '',
        textForPost: '',
        textOfPutTest: '',
        textForPut: '',
        textOfDeleteTest: '',
        textForDelete: '',
    };

    login = async (): Promise<void> => {
        const {textOfPostTest} = this.state;

        if (textOfPostTest.trim()) {
            try {
                const res: IUser = await Post(
                    apiRoute.getRoute('user'),
                    {text: textOfPostTest}
                );
                this.setState({
                    textForPost: res.text,
                    response: res,
                });
            } catch (e) {
                this.setState({textForPost: e.message});
            }
        }
    }    

    isPrime = (num: any) => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) return false; 
        return num > 1;
    }

    report = async (): Promise<void> => {
        const {galaxyNumber, planetName} = this.state;
        if(planetName == '') { 
            alert('please select the planet name.');
        }
        if((this.isPrime(galaxyNumber) && planetName != 'pluto') || (!this.isPrime(galaxyNumber) && planetName == 'pluto')) { 
            alert('your selection is not valid');
        }
        else { 

        }

        // if (response && textOfPutTest.trim()) {
        //     try {
        //         const res: IUser = await Put(
        //             apiRoute.getRoute('user'),
        //             {text: textOfPutTest, id: response?._id}
        //             );
        //         this.setState({textForPut: res.text, response: res});
        //     } catch (e) {
        //         this.setState({textForPut: e.message});
        //     }
        // } else {
        //     this.setState({
        //         textForPut: "You don't have any resource in database to change. first use post",
        //     })
        // }
    }


    handleKeyDown = (e: any) => { 
        if(isChrome || isSafari) {          
            alert('pressed on chrome');       
            if ( e.metaKey && e.keyCode == 115) {
                e.preventDefault();
                alert('pressed');
            }
        }       

        // const {response} = this.state;
        // if (response) {
        //     try {
        //         const res: IUser = await Delete(apiRoute.getRoute('user'), {id: response?._id});
        //         this.setState({textForDelete: `${res._id} ${res.text}`, response: undefined});
        //     } catch (e) {
        //         this.setState({textForDelete: e.message});
        //     }
        // } else {
        //     this.setState({
        //         textForDelete: "You don't have any resource in database to delete. first use post"
        //     })
        // }

        else {
            return 
        }
    }

    getPriorities = () => {         
        let galaxyCnt : Number  = 99999 / 4;
        let planetCnt : Number = 10 / 2; 
        let priorityCnt : Number = 5 / 4; 

        // galaxyCnt > planetCnt > priorityCnt 

        return 'Galaxy Planet Priority';
    }

    render() {
        const {textForPost, textForPut, textForDelete} = this.state;
        const inputText = "Input password...";

        alert('your priority is ' + this.getPriorities());
        return (
            <div onKeyDown={e => this.handleKeyDown(e)}>
                <div>
                    <div>
                        <input type="password" onChange={e => this.setState({textOfPostTest: e.target.value})} placeholder={inputText}/>
                        <button onClick={this.login}>{"Login"}</button>
                    </div>
                    <div>
                        <label>{"Your Login Is "}</label>
                        <h3>{textForPost}</h3>
                    </div>
                    {
                        textForPost == 'successed' ? 
                        <div>
                            <select onChange = {e => this.setState({priority: parseInt(e.target.value) })}>
                                <option value='1'> 1 </option>
                                <option value='2'> 2 </option>
                                <option value='3'> 3 </option>
                                <option value='4'> 4 </option>
                                <option value='5'> 5 </option>
                            </select> 
                            <input type="number" onChange={e => this.setState({galaxyNumber: parseInt(e.target.value)})}></input>
                            <select onChange={e => this.setState({planetName: e.target.value})}>
                                <option></option>
                                <option value='mecury'>Mecury</option>
                                <option value='venus'>Venus</option>
                                <option value='earth'>Earth</option>
                                <option value='mars'>Mars</option>
                                <option value='jupiter'>Jupiter</option>
                                <option value='saturn'>Saturn</option>
                                <option value='uranus'>Uranus</option>
                                <option value='neptune'>Neptune</option>
                                <option value='pluto'>Pluto</option>
                            </select>
                            <button onClick={this.report}>{'Report'}</button>
                        </div>
                        : 
                        <div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}
