const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const paginate = require('jw-paginate');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// paged items route
app.get('/activities', (req, res, next) => {
    const items = [...Array(150).keys()].map(i => ({ id: (i + 1), name: 'Item ' + (i + 1) }));
    const page = parseInt(req.query.page) || 1;

    const pager = paginate(items.length, page);

    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    return res.json({ pager, pageOfItems });
});

// start server
const port = 3000;
app.listen(port, () => console.log('Server listening on port ' + port));