import express from 'express';
import multer from 'multer';
import Product from './controller/product';
import Sale from './controller/sales';
import User from './controller/user';
import authprotect from './controller/middleware.controller';

const upload = multer({ dest: './uploads' });

const router = express.Router();

router.get('/api/v1/', (req, res) => res.status(200).json({
  msg: 'Welcome to Store Manager 1.0'
}));

router.get('/api/v1/products', authprotect.isUserAuthorized, Product.getAll);

router.get('/api/v1/products/:id', authprotect.isUserAuthorized, Product.getOne);

router.post('/api/v1/products', upload.single('prdImage'), authprotect.isUserAuthorized, authprotect.isUserAdmin, Product.addProduct);

router.patch('/api/v1/products/:id', authprotect.isUserAuthorized, authprotect.isUserAdmin, Product.updateOne);

router.delete('/api/v1/products/:id', authprotect.isUserAuthorized, authprotect.isUserAdmin, Product.deleteProduct);

router.get('/api/v1/sales', authprotect.isUserAuthorized, authprotect.isUserAdmin, Sale.getAll);

router.post('/api/v1/sales', authprotect.isUserAuthorized, Sale.addSale);

router.get('/api/v1/sales/:saleId', authprotect.isUserAuthorized, Sale.getOne);

// router.get('/api/v1/sales/:id', Sale.getOne);

router.get('/api/v1/sales/seller/:sid', Sale.getUserSales);

router.get('/api/v1/users', authprotect.isUserAuthorized, authprotect.isUserAdmin, User.getAllUser);

router.post('/api/v1/auth/signup', authprotect.isUserAuthorized, authprotect.isUserAdmin, User.createUser);

router.post('/api/v1/auth/login', User.userLogin);

router.post('/api/v1/user/reset', User.resetPassword);

export default router;
