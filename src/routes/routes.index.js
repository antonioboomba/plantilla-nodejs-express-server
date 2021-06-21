const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('partials/part1.hbs')
});
router.get('/profile',(req,res)=>{

})

module.exports = router;