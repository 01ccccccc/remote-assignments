const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
})


router.get('/myName', (req, res) => {
    const name = req.cookies.name;

    if (name) {
        res.render('myName', {name: name});
    } else {
        res.render('myName');
    }
});

router.get('/trackName', (req, res) => {
    const name = req.cookies.name;
    
    res.cookie('name', req.query.name);
    res.redirect('/myName');
});




router.post('/goodbye', (req, res) => {
    res.clearCookie('name');
    res.redirect('/myName');
});

// //  需要驗證的頁面
// router.get('/', (req, res) => {

//     var name = 'guest';
//     isLogin = false;
//     if (req.signedCookies.name) {
//         isLogin = true;
//     }
//     res.render('index', {name: name, logstatus: isLogin});
// });

// // 表單送出後
// router.post('/myName', (req, res) => {
//     if (req.body.name == "") {
//         return res.redirect('/');
//     } else {
//         res.cookie('name', req.body.name); //set cookie
//         return res.redirect('/')
//     }
// });

// // 登出
// router.get('/goodbye', (req, res) => {
//     res.clearCookie('name');
//     return res.redirect('/')
// });



module.exports = router;