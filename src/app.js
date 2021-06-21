const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');

app.set('port',process.env.PORT || 3050);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs',
    helpers:require('./lib/handlebars')
}));

app.set('view engine','.hbs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use((req,res,next)=>{
    next();
});


app.use(require('./routes/routes.index'));


/* Abrimos el public */
app.use(express.static(path.join(__dirname, 'public')));




module.exports = app;