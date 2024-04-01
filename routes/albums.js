import axios from 'axios';
import 'dotenv/config';
const apiUrl = process.env.API_URL;

export default function albumRoute(app) {
  return async (req, res) => {
      const userId = req.params.userIdPath;
      try {
        const response = await axios.get(`${apiUrl}/albums?userId=${userId}`);
        const data = response.data;
        res.json(data);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
  };
}
