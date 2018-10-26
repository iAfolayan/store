import jwt from 'jsonwebtoken';

import UsersData from '../data/users';

/**
 * @class UsersCtrl
 * @classdesc manages Users
 */
class UsersCtrl {
  /**
   * @description - retrieves all users
   * @param {*} req - Request object
   * @param {*} res - response object
   * @returns {users} returns Users
   */
  static getAllUser(req, res) {
    return res.status(200).json({ UsersData });
  }

  /**
   * @description Create a new user either as an Admin or a sale attendant
   * @param {*} req - request object
   * @param {*} res - response object
   * @returns {null} - no returns
   */
  static createUser(req, res) {
    const {
      title,
      firstname,
      lastname,
      emailAddress,
      phoneNumber,
      role,
      gender,
      passport,
      contactAddress
    } = req.body;
    const id = UsersData.length + 1;
    const staffId = `SM0${id}`;
    const createdAt = new Date();
    const newUser = {
      id,
      title,
      staffId,
      firstname,
      lastname,
      emailAddress,
      phoneNumber,
      role,
      gender,
      passport,
      contactAddress,
      createdAt
    };
    UsersData.push(newUser);
    res.status(201).json({
      msg: 'New user successfully created',
      data: newUser
    });
  }

  /**
   * @description - Accept two field to login a user
   * @param {*} req - request object
   * @param {*} res - response object
   * @returns {null} - no return
   */
  static userLogin(req, res) {
    const { staffId, password } = req.body;
    const userDetail = UsersData.find(user => user.staffId === staffId && user.password === password);
    if (userDetail) {
      const token = jwt.sign({ staffId: `${userDetail.role}` }, process.env.SECRET, { expiresIn: '1h' });
      return res.status(200).json({
        msg: 'Login successful',
        token
      });
    }
    res.status(404).json({
      msg: 'Login failed'
    });
  }

  /**
   * @description - Reset user password
   * @param {*} req - request object
   * @param {*} res  - response object
   * @returns {null} - No returns
   */
  static resetPassword(req, res) {
    const { emailAddress } = req.body;
    const userIndex = UsersData.find(user => user.emailAddress === emailAddress);
    if (userIndex) {
      return res.status(200).json({
        msg: `A mail has been forwarded to ${emailAddress}. Follow the link to reset your password`,
        emailAddress
      });
    }
    res.status(404).json({
      msg: `Your email address: ${emailAddress} is not recognised.`
    });
  }
}

export default UsersCtrl;
