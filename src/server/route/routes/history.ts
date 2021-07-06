import router from '../router';
import {Request, Response} from "express";

router.route('/history')
    .post((req: Request, res: Response) => {
        res.status(201).json({text: 'successed'});
    })
    .delete((req: Request, res: Response) => {
        res.status(201).json({text: 'successed'});
    });    

export default router;
