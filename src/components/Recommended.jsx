import React from "react";

function Recommended({ goodCollection, betterCollection, bestCollection }) {
    const rating = JSON.parse(localStorage.getItem("User")).rating;
    console.log(rating);
    if (rating === "Good") {
        return (
                <div className="row" key={rating}>
                    <div className="rec_wrapper">
                        <h2 className="rec_title">Based on Your Score...</h2>
                        <p className="rec_para">We recommend the <a href={goodCollection} className="collection_link">{rating} Collection.</a></p>
                        <a className="view_products-btn" href={goodCollection}target="_blank" rel="noreferrer">View Products</a>
                    </div>
                </div>
        );
    }

    if (rating === "Better") {
        return (
                <div className="row" key={rating}>
                    <div className="rec_wrapper">
                        <h2 className="rec_title">Based on Your Score...</h2>
                        <p className="rec_para">We recommend the <a href={betterCollection} className="collection_link">{rating} Collection!</a></p>
                        <a className="view_products-btn" href={betterCollection} target="_blank" rel="noreferrer">View Products</a>
                    </div>
                </div>
        );
    }

    if (rating === "Best") {
        return (
                <div className="row" key={rating}>
                    <div className="rec_wrapper">
                        <h2 className="rec_title">Based on Your Score...</h2>
                        <p className="rec_para">We recommend the <a href={bestCollection} className="collection_link">{rating} Collection.</a></p>
                        <a className="view_products-btn" href={bestCollection} target="_blank" rel="noreferrer">View Products</a>
                    </div>
                </div>
        );
    }
}

export default Recommended;