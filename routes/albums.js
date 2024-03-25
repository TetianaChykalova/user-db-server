import axios from 'axios';

export default function albumRoute(app) {
  app.get('/users/:userIdPath/albums', async (req, res) => {
      const userId = req.params.userIdPath;
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
        const data = response.data;
        res.json(data);
      } catch (error) {
        console.log(error)
      }
  });
}
// module.exports = function(app) {

//     app.get('/users/:userIdPath/albums', async (req, res) => {
//         const userId = req.params.userIdPath;
//         try {
//           const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
//           const data = response.data;
//           res.json(data);
//         } catch (error) {
//           console.log(error)
//         }
//     });
// }
