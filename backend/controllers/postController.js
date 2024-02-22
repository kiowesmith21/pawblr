const Post = require('../models/postModel')
const mongoose = require('mongoose')

//get all posts
const getPosts = async (req, res) => {
    const posts = await Post.find({}).sort({createdAt: -1}) //get all documents, sort in decensding order by createdAt date

    res.status(200).json(posts) //send back posts
}

//get single post
const getOnePost = async (req, res) => {
    const {id} = req.params //get id from route parameters

    if(!mongoose.Types.ObjectId.isValid(id)) { //make sure id is valid
        return res.status(404).json({error: 'No such post'})
    }

    const post = await Post.findById(id)

    if(!post) {
        return res.status(404).json({error: 'No such post'})
    }

    res.status(200).json(post)
}

//create new post
const createPost = async (req, res) => {
    const {title, caption, image} = req.body

    let emptyFields = []

    if(!title) {
        emptyFields.push('title')
    }
    if(!caption) {
        emptyFields.push('caption')
    }
    if(!image) {
        emptyFields.push('image')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all fields', emptyFields}) //send back empty fields
    }

    try {
        //create new document with properties from req body
        const post = await Post.create({title, caption, image})
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a post
const deletePost = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({erorr: 'No such post'})
    }

    const post = await Post.findOneAndDelete({_id: id}) //find by id mongoDB is _id

    if(!post) {
        return res.status(400).json({erorr: 'No such post'})
    }

    res.status(200).json(post)
}

//update a post
const updatePost = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({erorr: 'No such post'})
    }
    //find by id and update
    const post = await Post.findOneAndUpdate({_id: id}, {
        ...req.body //update using req whole body
    })

    if(!post) {
        return res.status(400).json({erorr: 'No such post'})
    }

    res.status(200).json(post)
}

module.exports = {
    getPosts,
    getOnePost,
    createPost,
    deletePost,
    updatePost
}