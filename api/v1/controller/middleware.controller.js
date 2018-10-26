import jwt from 'jsonwebtoken';

const isUserAuthorized = (req, res, next) => {
  const { token } = req.headers;
//   console.log(">>>>>>", req.headers.token);
  jwt.verify(token, 'p@$$w0rd', (err, decoded) => {
    //   console.log(">>>>>", err, decoded)
    if (err || !decoded) {
      return res.status(401).json({
        status: 'error',
        msg: 'Invalid token, please login'
      });
    }
    req.decoded = decoded;

    next();
  });
};

const isUserAdmin = (req, res, next) => {
  const { staffId } = req.decoded;
  if (staffId !== 1) {
    res.status(403).json({
      status: 'error',
      msg: 'Only an admin can do this'
    });
  }

  next();
};

export default { isUserAuthorized, isUserAdmin }