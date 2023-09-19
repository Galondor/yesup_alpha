import { set } from "firebase/database";
import React from "react";

function Recommended({ goodCollection, betterCollection, bestCollection }) {
  const rating = JSON.parse(localStorage.getItem("User")).rating;
  const QID = JSON.parse(localStorage.getItem("QID"));

  function removeLocalData() {
    localStorage.removeItem("User");
    localStorage.removeItem("QID");
  }

  function copyQID() {
    navigator.clipboard.writeText(QID);
    setTimeout(() => {
      document.querySelector(".QID").textContent = QID;
    }, 2000);
    document.querySelector(".QID").textContent = "Copied!";
  }

  if (rating === "Good") {
    return (
      <div className='row' key={rating}>
        <div className='rec_wrapper'>
          <div>
            <h2 className='quizID'>
              Your unique Quiz ID is{" "}
              <span
                className='QID'
                onClick={() => {
                  copyQID();
                }}
              >
                {QID}
              </span>
            </h2>
            <p className='quizID_para'>
              Save this number somewhere safe as this is the number we'll use to
              find your quiz results. <br /> These results have been emailed to
              the provided email address.
            </p>
          </div>
          <h2 className='rec_title'>Based on Your Score...</h2>
          <p className='rec_para'>
            We recommend the{" "}
            <a href={goodCollection} className='collection_link'>
              {rating} Collection.
            </a>
          </p>
          <a
            className='view_products-btn'
            href={goodCollection}
            rel='noreferrer'
            onClick={() => {
              removeLocalData();
            }}
          >
            View Products
          </a>
        </div>
      </div>
    );
  }

  if (rating === "Better") {
    return (
      <div className='row' key={rating}>
        <div className='rec_wrapper'>
        <div>
            <h2 className='quizID'>
              Your unique Quiz ID is{" "}
              <span
                className='QID'
                onClick={() => {
                  copyQID();
                }}
              >
                {QID}
              </span>
            </h2>
            <p className='quizID_para'>
              Save this number somewhere safe as this is the number we'll use to
              find your quiz results. <br /> These results have been emailed to
              the provided email address.
            </p>
          </div>
          <h2 className='rec_title'>Based on Your Score...</h2>
          <p className='rec_para'>
            We recommend the{" "}
            <a href={betterCollection} className='collection_link'>
              {rating} Collection!
            </a>
          </p>
          <a
            className='view_products-btn'
            href={betterCollection}
            rel='noreferrer'
            onClick={() => {
              removeLocalData();
            }}
          >
            View Products
          </a>
        </div>
      </div>
    );
  }

  if (rating === "Best") {
    return (
      <div className='row' key={rating}>
        <div className='rec_wrapper'>
        <div>
            <h2 className='quizID'>
              Your unique Quiz ID is{" "}
              <span
                className='QID'
                onClick={() => {
                  copyQID();
                }}
              >
                {QID}
              </span>
            </h2>
            <p className='quizID_para'>
              Save this number somewhere safe as this is the number we'll use to
              find your quiz results. <br /> These results have been emailed to
              the provided email address.
            </p>
          </div>
          <h2 className='rec_title'>Based on Your Score...</h2>
          <p className='rec_para'>
            We recommend the{" "}
            <a href={bestCollection} className='collection_link'>
              {rating} Collection.
            </a>
          </p>
          <a
            className='view_products-btn'
            href={bestCollection}
            rel='noreferrer'
            onClick={() => {
              removeLocalData();
            }}
          >
            View Products
          </a>
        </div>
      </div>
    );
  }
}

export default Recommended;
