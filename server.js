import express from 'express';
import { renderToPipeableStream } from 'react-dom/server';
// import { StaticRouter } from 'react-router-dom';
import albumRoute from './routes/albums.js';
import photoRoute from './routes/photos.js';
import postRoute from './routes/posts.js';
import userRoute from './routes/users.js';
import 'dotenv/config';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';

const port = process.env.PORT;
const clientDomain = process.env.CLIENT_DOMAIN;
const apiUrl = process.env.API_URL;

const app = express();

app.use(cors());

app.use('/users', createProxyMiddleware({ target: `${apiUrl}`, changeOrigin: true }));

app.get('/users', userRoute);
app.get('/users/:userIdPath/posts', postRoute);
app.get('/users/:userIdPath/albums', albumRoute);
app.get('/users/:userIdPath/albums/:albumId/photos', photoRoute);

app.get('*', (req, res) => {
    const context = {};
  
    const html = renderToString(
      `<StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>`
    );
  
    if (context.url) {
      res.redirect(context.url);
    } else {
      res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="./favicon.ico" />
          <title>User List SSR</title>
        </head>
        <body>
          <div id="root">${html}</div>
        </body>
      </html>
      `);
    }
  });

app.listen(port, () => {
    console.log(`Server works on ${port}`)
})