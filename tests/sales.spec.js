import { expect } from 'chai';
import supertest from 'supertest';
import app from '../app/app';

const request = supertest(app);
let saleId = null;

const dummyData = {
  sellerId: 'SA568',
  saleAttendantName: 'Afolayan Isaiah',
  productId: 2,
  name: 'wireless bluetooth',
  category: 'phone',
  quantity: 50,
  price: 'N4000',
  totalAmount: 75000,
  description: 'test product',
  minimumAllowed: 200,
  date: '2018-10-18:00:00:25GMT'
};

describe('GET available sale records', () => {
  it('should get all sale records', (done) => {
    request
      .get('/api/v1/sales')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body).to.haveOwnProperty('data');
        expect(res.body.data).to.be.an('array');
        expect(res.body.data.length).to.equal(5);
        const sales = res.body.data;
        saleId = sales[0].id;
        sales.forEach((sale) => {
          expect(sale).to.be.an('object');
          expect(sale).to.haveOwnProperty('sellerId');
          expect(sale).to.haveOwnProperty('id');
          expect(sale).to.haveOwnProperty('saleAttendantName');
          expect(sale).to.haveOwnProperty('productId');
          expect(sale).to.haveOwnProperty('name');
          expect(sale).to.haveOwnProperty('quantity');
          expect(sale).to.haveOwnProperty('price');
          expect(sale).to.haveOwnProperty('totalAmount');
          expect(sale).to.haveOwnProperty('category');
          expect(sale).to.haveOwnProperty('date');
        });
        done();
      });
  });
});

describe('GET single sale', () => {
  it('should get a single sale', (done) => {
    request
      .get(`/api/v1/sales/${saleId}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body).to.haveOwnProperty('data');
        expect(res.body.data).to.be.an('object');
        done();
      });
  });
});

describe('Create Sale Record', () => {
  it('should create a sale record', (done) => {
    request
      .post('/api/v1/sales')
      .set('Content-Type', 'Application/json')
      .send(dummyData)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.msg).to.equal('Sale record was successfully created');
        expect(res.body.data).to.be.an('object');
        done();
      });
  });
});
