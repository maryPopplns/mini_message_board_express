let express = require('express');
let router = express.Router();

const messages = [
  {
    text: 'Hi there!!!!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'message board', messages });
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'new message' });
});

router.post('/new', function (req, res, next) {
  console.log(req);
});

module.exports = router;
