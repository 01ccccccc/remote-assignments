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
        if (isNaN(Number(number)) === true ) { // to be sure the type of number is number using Number()
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

/* 
2. (Optional) Think about what will happen when N is very large?

I tried input 99999999 or more, the browser loads much slower than normal number, 
bur eventually successfully summed if up. Maybe improving algorithm can help.

*/

module.exports = router;