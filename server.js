const express = require('express'),
      app = express(),
      port = process.env.PORT || 3000,
      mongoose = require('mongoose'),
      Quote = require('./api/model/quotesModel'),
      bodyParser = require('body-parser');

require('dotenv').config();


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://'+process.env.USERNAME+':'+process.env.PASS+'@ds161551.mlab.com:61551/bquodb');

app.use(express.json());
app.use(express.static(__dirname+'/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/quotesRoutes');
routes(app);

app.use((req,res)=>{
  res.status(404).send({url: req.originalUrl+' not found'})
})


app.listen(port);

console.log(`bquo REST API is running on ${port}`);
