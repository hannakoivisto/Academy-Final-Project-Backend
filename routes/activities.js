var express = require('express');
var router = express.Router();

const baseurl = "http://open-api.myhelsinki.fi/v1/activities/";

/* GET activities listing. */
router.get('/activities', function (req, res, next) {
  activities.push({
    description: { intro: null },
    name: '',
    location: { address: '' },
    where_when_duration: { where_and_when: '', duration: '' },
    info_url: ''
  })
  res.json(activities);
});

router.get('/activities', function (req, res, next) {
  console.log('jotain');
  getAllActivities(function (data) {
    res.json(data);
    console.log('testi');
  })
});

getAllActivities = () => {
  return fetch(baseurl,
    { headers: { Accept: 'application/json' } })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error);
    });
};

getActivity = () => {
  const id = this.props.navigation.getParam('id');
  return fetch(baseurl + `/activity/${encodeURIComponent(id)}`,
    { headers: { Accept: 'application/json' } })
    .then(res => res.json())
    .catch(error => {
      console.error(error);
    });
};

module.exports = router;
