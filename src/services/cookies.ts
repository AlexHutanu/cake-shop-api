import {Repository} from "typeorm";
import {Cookie} from "../entities/cookie";
import {typeOrmContext} from "../db/type-orm.context";

const cookieRepository: Repository<Cookie> = typeOrmContext.getRepository(Cookie)

export const getCookieById = async (cookieId: number): Promise<Cookie> => {
    return await cookieRepository.findOne({where: {id: cookieId}})
}

export const createCookie = async (cookie: Cookie): Promise<Cookie> => {
    return await cookieRepository.save(cookie)
}

export const updateCookie = async (cookie: Cookie): Promise<Cookie> => {
    return await cookieRepository.save(cookie)
}

export const deleteCookie = async (cookieId: number): Promise<Cookie> => {
    return await cookieRepository.findOne({where: {id: cookieId}})
}



