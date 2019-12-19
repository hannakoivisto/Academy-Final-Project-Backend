var express = require('express');
var router = express.Router();
var service = require('./controller');
var activities = []

const url = new URL("http://open-api.myhelsinki.fi/v1/activities/");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/activities')
  .get((req, res, next) => {
    getAllActivities(function (activities) {
      res.json(activities)
    });
  });

router.get('/activities', function (req, res, next) {
  service.getAllActivities(function (results) {
    res.json(results);
  })
});

getEvent = () => {
  const id = this.props.navigation.getParam('id');
  return fetch(baseurl + `/event/${encodeURIComponent(id)}`,
    { headers: { Accept: "application/json" } })
    .then(res => res.json())
    .catch(error => {
      console.error(error);
    });
};

module.exports = router;
