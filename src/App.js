import logo from "./assets/SFN FIT.svg";
import loading from "./assets/loader.svg";
import Input from "./components/Input";
import Answer from "./components/Answer";
import "./App.css";



function App() {
  return (
    <body>
      <nav>
        <div className="row">
          <figure className="logo_wrapper">
            <a href="https://simpleflooringnetwork.com/" target="_blank">
              <img src={logo} className="logo" alt="Simple Flooring Network" />
            </a>
          </figure>
        </div>
      </nav>
      <header>
        <div className="row">
          <h1 className="title">YESUP Flooring Quiz</h1>
          <p className="intro_para">
            The free quiz that will help you find your perfect floor. <br />{" "}
            Take the quiz below to being your journey!
          </p>
        </div>
      </header>
      <div className="cover">
          <div className="info_container">
            <Input primaryName="first_name" secondaryName="firstName" displayName="First Name" type="text"/>
            <Input primaryName="last_name" secondaryName="lastName" displayName="Last Name" type="text"/>
            <Input primaryName="email" secondaryName="email" displayName="Email Address" type="email"/>
            <button className="submit_info">Submit</button>
          </div>
      </div>
      <div className="quiz_container" id="quiz">
        <div className="quiz_header">
          <div className="loading_container">
            <img src={loading} className="loader" alt="Loading..." />
          </div>
          <h2 id="question">Question Here</h2>
          <ul>
            <Answer id="0" idText="0_text"/>
            <Answer id="5" idText="5_text"/>
            <Answer id="10" idText="10_text"/>
            <Answer id="15" idText="15_text"/>
          </ul>
        </div>
        <button id="submit">Submit</button>
      </div>
    </body>
  );
}

export default App;
