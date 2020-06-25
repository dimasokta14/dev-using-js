const express = require('express');
const router = express.Router();

// All authors route
router.get('/', (req, res) => {
    res.render('authors/index')
});
// New author routes
router.get('/new', (req, res) => {
    res.render('authors/new')
})
// Post new authors
router.post('/', (req, res)=>{
    res.send('Create')
})
module.exports = router