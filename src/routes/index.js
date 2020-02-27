const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', {title: 'First WebSite'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'Contact Page'});
});

router.get('/viento', (req, res) => {
    res.render('viento.html', {title: 'Instrumentos de viento'});
});

router.get('/cuerda', (req, res) => {
    res.render('cuerda.html', {title: 'Instrumentos de cuerda'});
});

router.get('/percusion', (req, res) => {
    res.render('percusion.html', {title: 'Instrumentos de percusión'});
});

router.get('/electricos', (req, res) => {
    res.render('electricos.html', {title: 'Instrumentos eléctricos'});
});
module.exports = router;