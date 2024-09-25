const jwt = require('jsonwebtoken');
require('dotenv').config

function verifyToken(req, res, next) {

const token = req.header('Authorization');

if (!token) return res.status(401).json({ error: 'Access denied' });

try {

 const decoded = jwt.verify(token, process.env.SECRET_KEY); //verifies and decodes the payload in this case its the userId
//  console.log(decoded)

 req.userId = decoded.userId;
//  console.log(decoded.userId)

 next();

 } 
 catch (error) {

 res.status(401).json({ error: 'Invalid token' });

 }
 };

module.exports = verifyToken;