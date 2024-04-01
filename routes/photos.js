import axios from 'axios';
import 'dotenv/config';
const apiUrl = process.env.API_URL;



export default function photoRoute(app) {
  return async (req, res) => {
      const albumId = req.params.albumId;
      try {
        const response = await axios.get(`${apiUrl}/photos?albumId=${albumId}`);
        const data = response.data;
        res.json(data);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
  };
}