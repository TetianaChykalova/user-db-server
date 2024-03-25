import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 8000;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

routes(app);

app.listen(port, () => {
    console.log(`Server works on ${port}`)
})