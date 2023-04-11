const express = require('express')
const app = express()
const port = 3007
const pug = require('pug')




const server = app.listen(port, () => {
  console.log("Server linstening on port " + port);
})

app.set("view engine", "pug")
// app.set("views", "views")


app.get("/", (req, res, next) => {

  var payload = {
    pageTitle: "Home"
  }


  res.status(200).render("home" , payload)
})