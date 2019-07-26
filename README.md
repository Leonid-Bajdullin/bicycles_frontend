## BICYCLES PROJECT

Frontend : React, React Bootstrap<br>
Backend : Node.js, Express.js, TypeORM, REST API<br>
DB : PostgreSQL<br>

## STEPS TO START THIS PROJECT:

=======================================================================

<b>NOTE!</b> to see the app changes, first you must install PostgreSQL database with:<br>
-user "postgres"<br>
-password "free2play"<br>
and create DB "bicycles" in it
or
change the inputs of "ormconfig.json" in root folder of backend project to match your choice.

=======================================================================

1. clone the backend project to your local repository

### `git clone https://github.com/Leonid-Bajdullin/bicycles_backend.git`

2. change to cloned project folder and install dependencies

### `npm install`

3. run the server

### `node server.js`

=======================================================================

<b>NOTE!</b> server runs on "localhost:4000", so if u want to use another port - change it in server.ts (dont forget to compile), and also change the "proxy" setting in frontend project (https://github.com/Leonid-Bajdullin/bicycles_frontend) to port, that you want to use.

=======================================================================

4. clone the frontend project to your local repository

### `git clone https://github.com/Leonid-Bajdullin/bicycles_frontend.git`

5. change to cloned project folder and install dependencies

### `npm install`

6. run the application

### `npm start`

7. Add new bikes for rent, rent them and delete as you wish

=========================================================================

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
