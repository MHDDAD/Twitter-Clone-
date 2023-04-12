const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require("body-parser")
const { check, validationResult } = require('express-validator/check');



app.set("view engine", "pug")
app.set("views", "views")
app.use(bodyParser.urlencoded({ extended: false }))

router.get("/", (req, res, next) => {
  res.status(200).render("register")
})


router.post("/", [
  check('email', 'Email length should be 10 to 30 characters')
    .isEmail().isLength({ min: 10, max: 30 }),
  check('firstName', 'Name length should be 10 to 20 characters')
    .isLength({ min: 10, max: 20 }),
  check('username', 'username should contains 10 digits')
    .isLength({ min: 10, max: 20 }),
  check('password', 'Password length should be 8 to 10 characters')
    .isLength({ min: 8, max: 10 })
], (req, res, next) => {

  const errors = validationResult(req);
  console.log(req.body);

  if (!errors.isEmpty()) {
    res.json(errors)
    console.log(errors);
  } else {
    res.status(200).render("register")
  }

  // if(firstName && lastName && username && email && password){

  // }else{

  //   res.status(200).render("register")
  // }

})

module.exports = router; 