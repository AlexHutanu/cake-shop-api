import {Router} from 'express';
import {
    createCookieController,
    deleteCookieController,
    getCookieByIdController, getCookiesController,
    updateCookieController
} from "../controllers/cookies";

const router = Router();

router.get('/:id', getCookieByIdController)
router.get('/', getCookiesController)
router.post('/', createCookieController);
router.put('/:id', updateCookieController);
router.delete('/:id', deleteCookieController)

export default router;