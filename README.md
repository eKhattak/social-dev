### Requirements

Make sure that you have the following requirements already installed in your system.

- [NodeJs](https://nodejs.org/)
- [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)

### Installation Guidelines

A step by step guide on getting a development environment up and running

- Open terminal and run

```
git clone https://github.com/eKhattak/hackshare.git
```

This will grab a local copy of repository

- Open project directory in terminal

```
cd client
npm install
npm start
```

This will start React Application

```
Starting the development server...
Compiled successfully!

You can now view client in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.10.6:3000

Note that the development build is not optimized.
To create a production build, use yarn build.
```

- Open project again in another terminal and run

```
cd server
npm install
npm start
```

This will start NodeJs Application

```
[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
```

## Technology Stack

- [ReactJs](https://reactjs.org/) - An open-source JavaScript library for building user interfaces
- [Nodejs](https://nodejs.org/) - An open-source, cross-platform, JavaScript runtime environment
- [MongoDB](http://mongodb.com/) - A cross-platform document-oriented database program
