const express = require("express");
const router = express.Router();
const Post = require("../config/models/Post");

router.get("/", async (req, res) => {
  try {
    Post.find()
      .sort({ date: -1 })
      .then(post => res.json(post));
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
    console.log(req.body);
  const post = new Post({
    payment: req.body.payment,
    date: req.body.date,
    zones: req.body.zones
  });
  post.save().then(post => res.json(post));

});

router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:postId", (req, res) => {
  try {
    const updatedPost = Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
