import express from 'express';
import multer from 'multer';
import Product from './controller/product';
import Sale from './controller/sales';
import User from './controller/user';

const upload = multer({ dest: './uploads' });

const router = express.Router();

router.get('/', (req, res) => res.status(200).json({
  msg: 'Welcome to Store Manager 1.0'
}));

router.get('/products', Product.getAll);

router.get('/products/:id', Product.getOne);

router.post('/products', upload.single('prdImage'), Product.addProduct);

router.patch('/products/:id', Product.updateOne);

router.delete('/products/:id', Product.deleteProduct);

router.get('/sales', Sale.getAll);

router.post('/sales', Sale.addSale);

router.get('/sales/:saleId', Sale.getOne);

router.get('/sales/:id', Sale.getOne);

router.get('/sales/seller/:sid', Sale.getUserSales);

router.get('/users', User.getAllUser);

router.post('/users', User.createUser);

router.post('/user', User.userLogin);

router.post('/user/reset', User.resetPassword);

export default router;
