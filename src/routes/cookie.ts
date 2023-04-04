import {Router} from 'express';
import {
    createCookieController,
    deleteCookieController,
    getCookieByIdController,
    updateCookieController
} from "../controllers/cookies";

const router = Router();

router.get('/:id', getCookieByIdController)
router.post('/', createCookieController);
router.put('/:id', updateCookieController);
router.delete('/:id', deleteCookieController)

export default router;