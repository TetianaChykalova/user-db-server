import express from 'express';
import routes from './routes/index.js';
import albumRoute from './routes/albums.js';
import photoRoute from './routes/photos.js';
import postRoute from './routes/posts.js';
import userRoute from './routes/users.js';
import 'dotenv/config';
import { createProxyMiddleware } from 'http-proxy-middleware';
const apiUrl = process.env.API_URL;
const port = process.env.PORT;
const clientDomain = process.env.CLIENT_DOMAIN;

const app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/users', createProxyMiddleware({ target: `${clientDomain}`, changeOrigin: true }));

app.get('/users', userRoute(app));

// routes(app);

// app.get(`${clientDomain}/users/:path(*)`, function (req, res) {
//     console.log('get data')
//     const apiPath = req.params[0];
//     console.log('apiPath', apiPath)

//     const getApiUrl = `${apiUrl}/${apiPath}`;
//     console.log('apiUrl', getApiUrl)

//     axios.get(apiUrl)
//          .then(responseFromApi => {
//             console.log('responseFromApi', responseFromApi)
//             res.json(responseFromApi.data);
//          })
//          .catch(error => {
//             console.error('Error:', error);
//             res.status(500).json({ error: 'Internal Server Error' });
//          });
// });



// app.get('/*', (req, res) => {
//     res.redirect(`${clientDomain}`);
// });



// async function getIndexHtml() {
//     console.log('func getIndexHtml')
//     try {
//       const response = await axios.get(`${clientDomain}/index.html`);
//       console.log('response', response)
//       return response.data;
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
//   }
  
//   app.get('*', async (req, res) => {
//     try {
//       const indexHtml = await getIndexHtml();
//       if (indexHtml) {
//         res.send(indexHtml);
//       } else {
//         res.status(500).send('Error getting index.html from remote domain');
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Server error');
//     }
//   });

app.listen(port, () => {
    console.log(`Server works on ${port}`)
})