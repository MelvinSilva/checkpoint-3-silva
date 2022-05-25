require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000

app.use(express.json());

const albumRouter = require ('./albums/album.routes')
const trackRouter = require ('./tracks/track.routes')

app.use('/api/albums', albumRouter)
app.use('/api/tracks', trackRouter)

app.listen(port, (err) => {
  if (err) {
    console.error("Server is not listening");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
