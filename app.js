const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();

app.engine('mustache', mustache() )

app.set('view engine', 'mustache');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, function(){
  console.log("Server connected!");
});

app.get('/', function(request, response){
  response.render(pageTitle: "Home page");

})

app.get('/form', function(request, response){

  const name = request.body.name;
  const email = request.body.email;
  const birthYear = request.body.birthYear;
  const position = request.body.position;
  const password = request.body.password;

  response.render("index", {
    name: ,
    email: ,
    birthYear: ,
    position: ,
    password:
  });
});
