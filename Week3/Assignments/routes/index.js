const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
})


router.get('/myName', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        console.log(name);
        res.render('myName', {name: name});
    } else {
        console.log("else");
        res.render('myName');
    }
});


router.post('/myName', (req, res) => {
    //res.cookie('name', req.body.name);
    console.log(req.query.name);
    res.redirect('/trackName');
});


router.get('/trackName', (req, res) => {    

    res.send(req.query.name);
    
});

// //console.log(req.query.name);
// const name = req.query.name;
// Cookies.set('name', name);
// //res.cookie('name', req.query.name);
// console.log(name);


router.get(':id', (req, res) => {
    //const name = req.query.name;
    console.log(req.query.name);
    //console.log(req.query.name);
    res.cookie('name', req.query.name);
    res.redirect('/myName');
})



router.post('/goodbye', (req, res) => {
    res.clearCookie('name');
    res.redirect('/myName');
});

module.exports = router;