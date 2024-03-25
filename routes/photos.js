import axios from 'axios';

export default function photoRoute(app) {

    app.get('/users/:userIdPath/albums/:albumId/photos', async (req, res) => {
        const albumId = req.params.albumId;
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
          const data = response.data;
          res.json(data);
        } catch (error) {
          console.log(error)
        }
    });
}