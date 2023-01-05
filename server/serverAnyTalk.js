const express = require('express');
const app = express();
const port = 7001;

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.static('public'));

const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 250, // Limit each IP to 250 requests per `window` (here, per 10 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);

app.get('/*', function (req, res) {
    res.sendFile('public/index.html', {root: __dirname });
});

app.post('/submitLead/', (req, res) => {
    res.json({result: 'OK'})
});

// app.use(function(err, req, res, next) {
//     res.status(500);
//     res.send('Internal Server Error');
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));