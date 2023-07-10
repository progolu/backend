const express = require('express')
const {
    createBlog,
    getBlog,
    getBlogs,
    deleteBlog,
    updateBlog
} = require('../controllers/blogController')

const router = express.Router()

//GET all blog
router.get('/', getBlogs)

//GET single blog
router.get('/:id', getBlog)

//POST new blog
router.post('/', createBlog)

//UPDATE new blog
router.patch('/:id', updateBlog)

//DELETE blog
router.delete('/:id', deleteBlog)

module.exports = router