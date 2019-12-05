import React, { setState, useEffect } from "react";
import Axios from "axios";

export default function Form() {
//  const postURL = "http://localhost:5000/posts";
  //const [posts, setPosts] = setState([]);
  //const getPost = () => {
    //const result = Axios.get(postURL).then(...posts, result.data);
  //}
//}

  //useEffect(() => {
    //getPost();
  //}, [setPosts]);
  //console.log(posts);
  //let newPost;
  //if (posts.length >= 0) {
     // newPost = post.map(function(post){
        //  let toPayment = new Payment.getPayment(),
      //    let toDate = new Date(timeStamp).getDate(),
    //      let toZones = new toZones.getZones(),
    

  return (
    <div className="form">
      <form className="form__container">
        <div className="form__box">
          <h6 className="form__label">Method of Payment</h6>
          <select name="payment">
            <option value="cash">Cash Fare</option>
            <option value="stored">Stored Value</option>
            <option value="monthly">Monthly Pass</option>
          </select>
        </div>
        <div></div>
        <div form__box>
          <h6 className="form__label">Date</h6>
          <input
            className="form__box"
            type="text"
            name="date"
            placeholder="yyyy-mm-dd"
          />
        </div>
        <div className="form__box">
          <h6 className="form__label">Number of Zones</h6>
          <select name="zones">
            <option value="One">1</option>
            <option value="Two">2</option>
            <option valu="Three">3</option>
          </select>
        </div>
        <div className="form__btn-container">
          <button type="submit" className="btn-save">
            SAVE
          </button>
        </div>
      </form>

    </div>
  )
}

