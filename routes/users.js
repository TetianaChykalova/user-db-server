import axios from 'axios';

export default function userRoute(app) {
    app.get('/users', async (req, res) => {
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
          const data = response.data;
          res.json(data);
        } catch (error) {
          console.log(error)
        }
      })
}