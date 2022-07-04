const express = require('express');
//const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const session = require('express-session');


// create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'c923761997',
    database : 'assignment'
});

//Connect
db.connect((err) => {
    if (err){
        throw err;
    } 
    console.log('MySql Connected...');
});

//app.use(bodyParser.urlencoded({extended: false}));

const app = express();

app.use(session({secret: 'mySecret', resave: false, saveUninitialized: false})); // using for passing text to res.redirect()
app.use(express.static('public'));

app.use(cookieParser());
app.set('view engine', 'pug');

//Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE IF NOT EXISTS assignment';
    db.query(sql, (err, result) => {
        if(err) throw err;
        //console.log(result);
        res.send('Database created...');
    });
});

//create table
app.get('/createusertable', (req, res) => {
    let sql = 'CREATE TABLE IF NOT EXISTS user(id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY (id), UNIQUE KEY (email))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('User table created...');
    });
});

app.get('/', (req, res) => {
    res.render('home');
});


app.get('/auth', (req, res) => {
    let user = {email: `${req.query.email}`, password: `${req.query.password}`};

    // need to check whether exists or not before insert
    // if exist: error message "Email already exists"
    // not exists: redirect to "member" page and greet

    let sql = 'INSERT IGNORE INTO user SET ?'
    if (user) {
        db.query(sql, user, (err, result) => {
            if(err) throw err;
            //console.log(result.warningCount);
            if (result.warningCount != 0){
                res.render('home', {logInMessage: 'Email already exists'});
            } else {
                req.session.message = user.email;
                res.redirect('/member');
            }
        });
    }
});

app.get('/check', (req, res) => {
    let user = {email: `${req.query.email}`, password: `${req.query.password}`};

    // need to check whether exists or not insert
    // if exist: redirect to "member" page and greet
    // not exists: print out error message "Incorrect email or password"

    let sql = 'SELECT * FROM user WHERE email = ? AND password = ?';
    if(user) {
        db.query(sql, [user.email, user.password], (err, results, fields) => {
            if (err) throw error;
            if (results.length > 0) {
                req.session.message = user.email;
                res.redirect('/member');
            } else {
                res.render('home', {signInMessage: 'Incorrect Email and/or Password'});
            }
            res.end();
        });
    } 
});

app.get('/member', (req, res) => {
    let message = req.session.message;
    res.render('member', {email: message});
});

app.post('/logout', (req, res) => {
    res.redirect('/');
})


app.listen('3000', () => {
    console.log('Server started on port 3000');
})