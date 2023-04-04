import {Request, Response} from 'express';
import {Cookie} from "../entities/cookie";
import {createCookie, deleteCookie, getCookieById, updateCookie} from "../services/cookies";


export const getCookieByIdController = async (req: Request, res: Response) => {
    const cookie: Cookie = await getCookieById(req.body.id)
    res.status(200).json(cookie)
}

export const deleteCookieController = async (req: Request, res: Response) => {
    const cookie: Cookie = await deleteCookie(req.body.id)
    res.status(200)
}
export const createCookieController = async (req: Request, res: Response) => {
    const {type, name, image, composition, recommendation, price} = req.body;
    const cookie: Cookie = await createCookie(Object.assign(new Cookie(), {type, name, image, composition, recommendation, price}));
    res.status(201).json(cookie);
}

export const updateCookieController = async (req: Request, res: Response) => {
    const {
        body: {
            name,
            composition,
            price
        },
        params: {
            id: cookieId
        }
    } = req
    const cookie: Cookie | null = await getCookieById(Number(cookieId));
    if (!cookie) {
        res.status(404).json({
            message: 'Cookie not found'
        });
    }
    const updatedCookie: Cookie = await updateCookie(Object.assign(cookie, {name, composition, price, id: cookieId}));
    res.status(200).json(updatedCookie);
}