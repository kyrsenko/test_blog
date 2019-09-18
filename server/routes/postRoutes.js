const Router = require('express');
const router = Router();
const Post = require('../models/Post');

router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (error) {
    res.json(error);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.find({
      _id: req.params.id
    });
    res.json(post);
  } catch (error) {
    res.json(error);
  }
});

router.post('/api/posts', async (req, res) => {
  try {
    const post = await new Post(req.body).save();
    res.json(post);
  } catch (error) {
    res.json(error);
  }
});

router.put('/api/comment/:id', async (req, res) => {
  try {
    console.log(req.body.comments)
    console.log(req.params.id)
    await Post.findOneAndUpdate(
      {
        _id: req.params.id
      },
      {
        comments: req.body.comments,
      }
    );
    res.json({
      edited: true
    });
  } catch (error) {
    res.json({
      edited: false
    });
  }
});

router.delete('/api/posts/:id', async (req, res) => {
  try {
    await Post.findOneAndDelete({
      _id: req.params.id
    });
    res.json({
      deleted: true
    });
  } catch (error) {
    await res.json({
      deleted: false
    });
  }
});

module.exports = router;

