# USER Database
## server side

### Implementation

The project is a user database. Data is received via the request API on the server side (Express.js) and displayed on the client side (React.js)
Link to the second part of the project on GitHub:
https://github.com/TetianaChykalova/user-db-client

### The project has the following functionality:

##### User functionality
1. Obtaining a list of users and their contact data
2. The ability to view user posts, albums, and user photos
3. Sorting users by asc, desc
4. Search by username

##### Technical functionality
1. Ability to share a link from anywhere in the application
2. API optimization of requests on the client side
3. State manager organized with useContext and useReducer hooks
4. Progressive image loading
5. Own title and description for each page

### Additional libraries used during development (server side)
This app uses the following third-party libraries. These dependencies are written in the package.json file

    "axios": "^1.6.8",
    "express": "^4.19.1",

Dev dependences

    "nodemon": "^3.1.0",

##### If you want to work with the code, write npm install in your terminal, then all the necessary dependencies will be added for you locally

    npm install

### The project is under development.
What will be implemented in the future for the server side:
1. Highlighting the keys in separate variables in the .env file
2. Deploy the project

## Problems during development

During development, there were problems with webpack settings
