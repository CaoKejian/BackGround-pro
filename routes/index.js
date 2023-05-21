var express = require('express');
const JWT = require('../util/jwt');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
// 测试token 加密与解密
const token = JWT.generate({ name: "colin" }, '10s')
console.log(JWT.verify(token));
setTimeout(() => {
  console.log(JWT.verify(token));

}, 9000);
setTimeout(() => {
  console.log(JWT.verify(token));

}, 11000);
module.exports = router;
