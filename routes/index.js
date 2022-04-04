const router = require('express').Router();
const blogController = require('../controllers/blogcontroller');

router.get('/', (req, res)=>{
    res.redirect('/blogs');
});
router.get('/about', (req, res)=>{
    res.render('about', {title: 'About Us'});
});
router.get('/blogs', blogController.blog_index_get);
router.get('/blogs/create',blogController.blog_create_get);
router.get('/blogs/:id', blogController.blog_details_get);
router.post('/blogs', blogController.blog_create_post);
router.delete('/blogs/:id', blogController.blog_delete);

module.exports = router;