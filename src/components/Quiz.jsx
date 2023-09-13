import React from "react";
import loading from "../assets/loader.svg";
import Questions from "../assets/Questions.json";

function Quiz({ currentQuestion, optionClicked, showPersonalInfo }) {
    if (showPersonalInfo === true) {
        return (null);
    } else if (showPersonalInfo === false) {
        return (
            <div className="quiz_container" id="quiz">
            <div className="quiz_header">
              <div className="loading_container">
                <img src={loading} className="loader" alt="Loading..." />
              </div>
              <h2>
                Question {currentQuestion + 1} out of {Questions.length}
              </h2>
              <h2 id="question">{Questions[currentQuestion].text}</h2>
              <ul>
                {Questions[currentQuestion].options.map((option) => {
                  return (
                    <li
                      onClick={() => optionClicked(option.value)}
                      className="option"
                      key={option.id}
                    >
                      {option.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
    }
}

export default Quiz;
