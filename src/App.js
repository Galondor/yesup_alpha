import logo from "./assets/SFN FIT.svg";
import User from "./components/User";
import ResultsText from "./components/ResultsText";
import Questions from "./assets/Questions.json";
import Quiz from "./components/Quiz";
import Recommended from "./components/Recommended";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showPersonalInfo, setShowPersonalInfo] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  let rating;

  const optionClicked = (value) => {
    let useScore = score;

    setScore((useScore += value));
    console.log(
      "useScore: " +
        useScore +
        " | " +
        "Value: " +
        value +
        " | " +
        "Score: " +
        score
    );

    if (currentQuestion + 1 < Questions.length) {
      document.querySelector(".loader").style.display = "flex";
      document.querySelectorAll(".option").forEach((option) => {
        option.style.pointerEvents = "none";
      });
      setTimeout(() => {
        document.querySelector(".loader").style.display = "none";
        setCurrentQuestion(currentQuestion + 1);
        document.querySelectorAll(".option").forEach((option) => {
          option.style.pointerEvents = "auto";
        });
      }, 500);
    } else {
      setScore(useScore);

      if (useScore >= 0 && useScore <= 50) {
        rating = "Good";
      }
      if (useScore >= 51 && useScore <= 100) {
        rating = "Better";
      }
      if (useScore >= 101 && useScore <= 150) {
        rating = "Best";
      }

      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const time = `${hours}:${minutes}:${seconds}`;
      const date = now.toDateString();
      const user = JSON.parse(localStorage.getItem("User"));
      const firstName = JSON.parse(localStorage.getItem("User")).firstName;
      const lastName = JSON.parse(localStorage.getItem("User")).lastName;
      const email = JSON.parse(localStorage.getItem("User")).email;
      console.log("FirstName: " + firstName);

      localStorage.setItem(
        "User",
        JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          rating: rating,
        })
      );
      document.querySelector(".loader").style.display = "flex";

      setTimeout(() => {
        document.querySelector(".loader").style.display = "none";
        setShowResults(true);
        console.log(
          `Name: ${firstName +
            " " +
            lastName} | Score: ${useScore} | Rating: ${rating} | Time: ${time} | Date: ${date} | Email: ${email}`
        );
      }, 1500);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User"));
    if (user) {
      setShowPersonalInfo(false);
    }
  }, []);

  return (
    <body>
      <nav>
        <div className='row'>
          <figure className='logo_wrapper'>
            <a
              href='https://simpleflooringnetwork.com/'
              target='_blank'
              rel='noreferrer'
            >
              <img src={logo} className='logo' alt='Simple Flooring Network' />
            </a>
          </figure>
        </div>
      </nav>
      <header>
        <div className='row'>
          <h1 className='title'>YESUP Flooring Quiz</h1>
          <p className='intro_para'>
            The free quiz that will help you find your perfect floor. <br />{" "}
            Take the quiz below to being your journey!
          </p>
        </div>
      </header>
      {showPersonalInfo ? <User /> : null}
      {showResults ? (
        <div className='results'>
          <h1 className='results_title'>Your YESUP Score Is: {score}</h1>
          <h2 className='results_question'>What does my score mean?</h2>
          <ResultsText score={score}/>
          <Recommended
            goodCollection={
              "https://simpleflooringnetwork.com/collections/good-collection"
            }
            betterCollection={
              "https://simpleflooringnetwork.com/collections/as-good-as-it-gets"
            }
            bestCollection={
              "https://simpleflooringnetwork.com/collections/best-in-show"
            }
          />
        </div>
      ) : (
        <Quiz
          currentQuestion={currentQuestion}
          optionClicked={optionClicked}
          showPersonalInfo={showPersonalInfo}
        />
      )}
    </body>
  );
}

export default App;
