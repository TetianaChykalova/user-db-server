import axios from 'axios';
import 'dotenv/config';
const apiUrl = process.env.API_URL;

export default function userRoute(app) {
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