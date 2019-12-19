const baseurl = "http://open-api.myhelsinki.fi/v1/activities"
global.fetch = require('node-fetch');

function getAllActivities() {
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

module.exports = (getAllActivities)
