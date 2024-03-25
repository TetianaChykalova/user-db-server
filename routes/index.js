import userRoute from './users.js';
import postRoute from './posts.js';
import albumRoute from './albums.js';
import photoRoute from './photos.js';

export default function routes(app) {
    userRoute(app);
    postRoute(app);
    albumRoute(app);
    photoRoute(app);
}