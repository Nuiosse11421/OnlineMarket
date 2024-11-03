import express from 'express';

import{
    registerSeller,
    getAllSellers,
    getSellerById,
    updateSeller,
    deleteSeller,
} from '../controller/sellerController.mjs'

const router = express.Router();

// CRUD routes for seller

router.post('/register', registerSeller);
router.get('/',getAllSellers);
router.get('/:id', getSellerById);
router.put('/:id', updateSeller);
router.delete('/:id', deleteSeller)

export default router;