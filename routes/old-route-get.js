import axios from 'axios';
import 'dotenv/config';
const apiUrl = process.env.API_URL;

export function postRoute(app) {
    app.get('/users/:userIdPath/posts', async (req, res) => {
        const userId = req.params.userIdPath;
        try {
          const response = await axios.get(`${apiUrl}/posts?userId=${userId}`);
          const data = response.data;
          res.json(data);
        } catch (error) {
          console.log(error)
        }
    });
}

export function photoRoute(app) {
    app.get('/users/:userIdPath/albums/:albumId/photos', async (req, res) => {
        const albumId = req.params.albumId;
        try {
          const response = await axios.get(`${apiUrl}/photos?albumId=${albumId}`);
          const data = response.data;
          res.json(data);
        } catch (error) {
          console.log(error)
        }
    });
}


export function albumRoute(app) {
  app.get('/users/:userIdPath/albums', async (req, res) => {
      const userId = req.params.userIdPath;
      try {
        const response = await axios.get(`${apiUrl}/albums?userId=${userId}`);
        const data = response.data;
        res.json(data);
      } catch (error) {
        console.log(error)
      }
  });
}

export function userRoute(app) {
    app.get('/users', async (req, res) => {
        try {
          const response = await axios.get(`${apiUrl}/users`);
          const data = response.data;
          res.json(data);
        } catch (error) {
          console.log(error)
        }
      })
}