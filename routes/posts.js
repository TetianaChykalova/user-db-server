import axios from 'axios';

export default function postRoute(app) {

    app.get('/users/:userIdPath/posts', async (req, res) => {
        const userId = req.params.userIdPath;
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
          const data = response.data;
          res.json(data);
        } catch (error) {
          console.log(error)
        }
    });
}