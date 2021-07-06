import router from '../router';
import {Test} from '../../models';
import {Request, Response} from "express";
import {IUser} from "../../domain/IUser";

var md5 = require('md5');

router.route('/user')
    .post(async (req: Request, res: Response) => {
        const {text}: { text: string } = req.body;
        const password = '2ab96390c7dbe3439de74d0c9b0b1767';
        const Text: IUser = new Test({text});

        if(password == md5(Text.text)) { 
            res.status(201).json({text: 'successed'});
        } else { 
            res.status(201).json({text: 'not successed'});
        }           
    });

export default router;
