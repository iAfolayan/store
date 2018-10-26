import { expect } from 'chai';
import supertest from 'supertest';
import app from '../app/app';

const request = supertest(app);
// let userId = null;

const dummyData = {
  title: 'Miss',
  staffId: 'SM005',
  firstname: 'Grace',
  lastname: 'Festus',
  emailAdress: 'festus.grace@festus.com',
  phoneNumber: '08032167911',
  role: 2,
  gender: 'Female',
  passport: 'grace_festus.jpg',
  contactAddress: '41 Osholake street, Ebute-meta, Lagos',
  createdAt: new Date
};

describe('Create User', () => {
  it('should create a user', (done) => {
    request
      .post('/api/v1/users')
      .set('Content-Type', 'Application/json')
      .send(dummyData)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.msg).to.equal('New user successfully created');
        expect(res.body.data).to.be.an('object');
        done();
      });
  });
});
