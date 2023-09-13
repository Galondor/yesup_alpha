import React from "react";

function ResultsText({ score, rating }) {
    if (rating === "Good") {
        return (
            <p className="results_para">A score of {score} places you in the <strong>{rating}</strong> category. <br />
              <strong>{rating}</strong> means: good performance, better for light-medium traffic areas.
               <strong> {rating}</strong> plank has a 12 mil (0.30mm) wear layer.</p>
        );
    }

    if (rating === "Better") {
        return (
            <p className="results_para">A score of {score} places you in the <strong>{rating}</strong> category. <br />
              <strong>{rating}</strong> means: great performance, good for medium traffic areas,
               <strong> {rating}</strong> carpet has a better feel while plank has a 20 mil (0.50mm) wear layer.</p>
        );
    }

    if (rating === "Best") {
        return (
            <p className="results_para">A score of {score} places you in the <strong>{rating}</strong> category. <br />
              <strong>{rating}</strong> means: outstanding performance, good for high traffic areas, and <strong>{rating}</strong> floors need less upkeep.</p>
        );
    }
}

export default ResultsText;