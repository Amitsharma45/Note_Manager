const express= require('express');
const app= express();
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {router} = require('./Routers/router');
const cors = require('cors');
const passport = require('passport');
const UserModule = require('./Modules/UserModule');
const { loginAuth } = require('./Auth/UserAuth');
require('dotenv').config()
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const cookieParser = require('cookie-parser')
app.use(cookieParser());
// connecting mongoose database
const URI = 'mongodb://localhost:27017/TaskManager';
const store = MongoDBStore({
    uri: URI,
    collection: 'notesession'
})
app.set("trust proxy", 1);

app.use(session({
    secret: 'this is passport',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 6000000,
        sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax', // must be 'none' to enable cross-site delivery
        secure: process.env.NODE_ENV === "production"// must be true if sameSite='none'
    },
    store: store
}));


// mongoose.connect('mongodb+srv://mongoadmin:amit1234@cluster0.ny6ohvf.mongodb.net/?retryWrites=true&w=majority');
mongoose.connect(URI);
mongoose.connection.once('open', () => {
    console.log('Mongodb connected')
})

//middle ware
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1',router);

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function (user, done) {
    done(null, user._id);
})

passport.deserializeUser(function (_id, done) {
    UserModule.findById(_id, function (err, user) {
        done(err, user);
    });
});
passport.use(loginAuth());


app.listen(process.env.PORT,()=>{
    console.log("server is running at port 5000")
})

