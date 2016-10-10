var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/chatroom', function(req, res, next) {
  res.render('chatroom', { title: 'Express Chat' });
});

router.get('/rooms', function(req, res, next) {
  res.render('rooms', { title: 'Express Chat' });
});


module.exports = router;
// module.exports.chatroom = function(req, res){
//     res.render('chatroom', { title: 'Express Chat' });
// }

// exports.rooms = function(req, res){
//     res.render('rooms', { title: 'Express Chat' });
// }