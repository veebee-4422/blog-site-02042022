const Blog = require('../models/blog');

const blog_index_get = (req, res)=>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('blogs/index', {title: 'All Blogs', blogs: result});
    })
    .catch((err)=>{
        console.log(err);
    });
};
const blog_details_get = (req, res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{
        res.render('blogs/details', {blog: result, title: 'Blog Details'});
    }).catch((err)=>{
        res.status(404).render('404', {title: '404'});
    });
};
const blog_create_get = (req, res)=>{
    res.render('blogs/create', {title: 'Create new blog'});
};
const blog_create_post = (req, res)=>{
    const blog = new Blog(req.body);
    blog.save()
    .then((result)=>{
        res.redirect('/');
    })
    .catch((err)=>{
        console.log(err);
    });
};
const blog_delete = (req, res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect: '/'});
    }).catch((err)=>{
        console.log(err);
    });
};

module.exports = {blog_index_get, blog_details_get, blog_create_get, blog_create_post, blog_delete};