import logo from "./assets/SFN FIT.svg";
import Arrow from "./assets/arrow-left-black.svg";
import loading from "./assets/loader.svg";
import Input from "./components/Input";
import Questions from "./assets/Questions.json";
import React, { useState } from "react";
import {Route, Link, Routes, useNavigate} from "react-router-dom";
import "./App.css";

function App() {
  
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const navitage = useNavigate();
  const goBack = () => {
    navitage(-1);
  };

  const optionClicked = (value) => {
    setScore((prevScore) => prevScore + value);

    if (currentQuestion + 1 < Questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    };
  };

  return (
    <body>
          <div className="page_header">
            <figure className="return_wrapper" onClick={goBack}>
              <img src={Arrow} className='return' alt='Return' />
              <span>Return</span>
            </figure>
          </div>
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
      {showPersonalInfo ? <div className='cover'>
        <div className='info_container'>
          <Input
            primaryName='first_name'
            secondaryName='firstName'
            displayName='First Name'
            type='text'
          />
          <Input
            primaryName='last_name'
            secondaryName='lastName'
            displayName='Last Name'
            type='text'
          />
          <Input
            primaryName='email'
            secondaryName='email'
            displayName='Email Address'
            type='email'
          />
          <button className='submit_info'>Submit</button>
        </div>
      </div> : null}
      {showResults ? (
        <div className='results'>
          <h1 className='results_title'>Your YESUP Score Is: {score}</h1>
          <h2 className='results_question'>What does my score mean?</h2>
        </div>
      ) : (
        <div className='quiz_container' id='quiz'>
          <div className='quiz_header'>
            <div className='loading_container'>
              <img src={loading} className='loader' alt='Loading...' />
            </div>
            <h2>Question {currentQuestion + 1} out of {Questions.length}</h2>
            <h2 id='question'>{Questions[currentQuestion].text}</h2>
            <ul>
            {Questions[currentQuestion].options.map((option) => {
              return (
                <li onClick={() => optionClicked(option.value)} className="option" key={option.id}>{option.text}</li>
              );
            })}
            </ul>
          </div>
        </div>
      )}
    </body>
  );
}

export default App;