# Anchor Crawler 🕷️

> A simple Web Scrapper

## What?:

- This simple project is a small fullstack application that is able to fetch the html of any website and get all the anchors on it.
- You can provide a url and a crawling job will start.
- On the UI we are able to see all launched jobs.
- The client will automatically update the data by requesting for any update every 3 seconds (polling)
- As soon as every job is completed, the polling will be stopped.

## Why?:

- This project was a fullstack challenge proposed as a technical test
- I have been always interested in how crawling websites work by using nodejs and this was a perfect playground to try it out

## How?:

## Tech stack 📦:

- The entire application was done with [Node](https://nodejs.org/en/), [Express](http://expressjs.com/), [React](https://reactjs.org/), and [MongoDB](https://www.mongodb.com/).
- It also uses [mongoose](https://mongoosejs.com/) as a Object Data Modeling and [Mongo Atlas](https://www.mongodb.com/cloud/atlas) as a cloud DataBase

---

## Live Demo

I have deployed the application for demo purposes on [Heroku](https://dashboard.heroku.com/). You can try it out [here](https://cbh-anchor-crawler.herokuapp.com/)

## Quick Start 🚀

### Add a default.json file in config folder with the following

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
}
```

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

---

## Future improvements

- 📤 The updates on the UI are done by http polling, this was done this way for simplicity, but obviously its not the better solution. We could use something like [SocketIO](https://socket.io/) to allow the client listen for server notifications instead of requesting for new data every X seconds. (I tried this a little some years ago and implemented a little chat application using VueJS and SocketIO. [Here is the repo](https://github.com/cbh6/vuejs-socketio-chat))
- 🎨 The styling was done using plain css in one single file. This wasn't a problem on this small project. But for large codebases with lot of components, we can use [css modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) and [SCSS](https://sass-lang.com/) as a CSS preprocessor
