import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Form() {
  const postURL = "http://localhost:5000/posts";
  const [posts, setPosts] = useState([]);
  const getPost = async () => {
    const result = await axios.get(postURL);
    setPosts(result.data);
  };

  useEffect(() => {
    getPost();
  }, [setPosts]);
  console.log(posts);
  let newPost;
  if (posts.length >= 0) {
    newPost = posts.map(function(post) {
      return (
        <div className="form__post-container">
          <h2>{post.payment}</h2>
          <h2>{post.date}</h2>
          <h2>{post.zones}</h2>
        </div>
      );
    });
  }
  function submitHandler(event) {
    //event.preventDefault();
    const payment = event.target.payment.value;
    const date = event.target.date.value;
    const zones = event.target.zones.value;
    axios
      .post(postURL, { payment, date, zones })
      .then(response => console.log(response));
  }
  return (
    <div className="form">
      <form className="form__container" onSubmit={submitHandler}>
        <div></div>
        <div className="form__box">
          <h6 className="form__label">Method of Payment</h6>
          <select name="payment">
            <option value="cash">Cash Fare</option>
            <option value="stored">Stored Value</option>
            <option value="monthly">Monthly Pass</option>
          </select>
        </div>
        <div></div>
        <div className="form__box">
          <h6 className="form__label">Date</h6>
          <input type="date" name="date" placeholder="yyyy-mm-dd" />
        </div>
        <div className="form__box">
          <h6 className="form__label">Number of Zones</h6>
          <select name="zones">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="form__btn-container">
          <button type="submit" className="btn-save">
            SAVE
          </button>
        </div>
      </form>
      <div className="form__tracking-container">
        <h1 className="form__tracking-header">Trips</h1>
        {newPost}</div>
    </div>
  );
}
