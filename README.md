# Anchor Crawler 🕷️

> A simple Web Scrapper

## What?:

- This simple project is a small fullstack application that is able to fetch the html of any website and get all the anchors on it.
- You can provide a url and a crawling job will start.
- On the UI we are able to see all launched jobs.
- The client will automatically update the data by requesting for any update every 3 seconds (polling)
- As soon as every job is completed, the polling will be stopped.
- We can click on any job and see the crawling result.

## Why?:

- This project was a fullstack challenge proposed as a technical test
- I have been always interested in how crawling websites work by using nodejs and this was a perfect playground to try it out

## How? / Tech stack 📦:

- The entire application was done with [Node](https://nodejs.org/en/), [Express](http://expressjs.com/), [React](https://reactjs.org/), and [MongoDB](https://www.mongodb.com/).
- It also uses [mongoose](https://mongoosejs.com/) as a Object Data Modeling and [Mongo Atlas](https://www.mongodb.com/cloud/atlas) as a cloud DataBase

## Application structure

- 🖼️ The entire frontend is on **/client** folder and was bootstraped with [create-react-app](https://create-react-app.dev/)
  - **/client/src/components** contains the 3 main components that compose our app
  - **/client/src/hooks** contains our custom hooks
  - **/client/src/App.js** is the main component
  - **/client/src/public/** for public assets
- 🖥️ The backend is on the root folder and separated in 4 main directories
  - **/config** is where we have our config files such local/prod environment variables, mongo credentials etc
  - **/models** for our mongoose schema definitions
  - **/routes** for our backend routes
  - **/services** where the business logic lives

## NPM Scripts

- `npm run server` : runs server with nodemon
- `npm run client` : runs client
- `npm run dev` : uses `concurrently` package to run client and server at the same time

---
---

## Live Demo

I have deployed the application for demo purposes on [Heroku](https://dashboard.heroku.com/). You can try it out [here](https://cbh-anchor-crawler.herokuapp.com/)

## Quick Start. Run it locally 🚀

- Add a default.json file in config folder with the following

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
}
```

- Install server dependencies

```bash
npm install
```

- Install client dependencies

```bash
cd client
npm install
```

- Run both Express & React from root

```bash
npm run dev
```
---

## Docker container 🐋

- A Dockerfile is provided to allow us to create a container with our application
- This would allow us to deploy our app easily
- We will need a `config/production.json` file with a mongo url

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
}
```

- To build the docker image we can navigate to the project root and execute `docker build -t anchor-crawler .`
- Next step would be running the docker image by executing `docker run -e NODE_ENV=production -d -p 5000:5000 anchor-crawler:latest`
- The app can be accessed on `localhost:5000`

## To take into account:

> I've set the **client** and the **backend** in the same repository for simplicity. That's why I have Express exposing API Rest and the frontend static files (on production mode) at the same time. This way we only need a `Dockerfile` to dockerize the entire application.

> For a more scalable solution (having CI/CD in mind), the best way is to have **client** and **backend** on separated repositories, each one with its own `Dockerfile` and orchestrate everything with `docker-compose`. This way we could serve the static files using a `nginx` server.


---

## Future improvements

- 📤 The updates on the UI are done by http polling, this was done this way for simplicity, but obviously its not the better solution. We could use something like [SocketIO](https://socket.io/) to allow the client listen for server notifications instead of requesting for new data every X seconds. (I tried this a little some years ago and implemented a little chat application using VueJS and SocketIO. [Here is the repo](https://github.com/cbh6/vuejs-socketio-chat))
- 🎨 The styling was done using plain css in one single file. This wasn't a problem on this small project. But for large codebases with lot of components, we can use [css modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) and [SCSS](https://sass-lang.com/) as a CSS preprocessor

## App Info

### Author

Cristian Botella Hurtado
[https://cbh6.github.io/](https://cbh6.github.io/)

### Version

1.0.0

### License

This project is licensed under the MIT License
