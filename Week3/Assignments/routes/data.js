const express = require('express');
const router = express.Router();


router.get('/:id?', (req, res) => {
    const {number} = req.query;
    //http://localhost:3000/data?number=xyz  // the target we want
    //console.log(number);

    if (!number ) {
        console.log("null");
        return res.render('data', { text: "Lack of Parameter"});
    } else {
        if (isNaN(Number(number)) === true ) { // use num.num to send the varible we want
            res.render('data', { text: "Wrong Parameter"});            
        } else {
            var total = 0;
            for (var i = 0; i <= Number(number); i++) {
                total += i;
            }
            res.render('data', { text: total});
        }
    }
});


// router.post('/', (req, res) => {
//     const num = res.cookie('inputNumber', req.body.inputNumber);
//     res.render('data', )
// });




// router.post('/data', (req, res) => {
//     res.cookie('')
// })


module.exports = router;