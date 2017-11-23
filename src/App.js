import React, { Component } from 'react';
import './App.css';
import { Icon } from 'react-fa';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav id="nav-bar">
          <ul id="nav-list">
            <li className="nav-buttons"><a href="#home">Home</a></li>
            <li className="nav-buttons"><a href="#bio">About</a></li>
            <li className="nav-buttons"><a href="#portfolio">Portfolio</a></li>
            <li className="nav-buttons"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="Section" id="home">
          <header className="App-header">
            <a target=" blank" href="https://play.google.com/store/apps/details?id=com.Jsorgensen.EngineerPad&hl=en">
              <div classname="project-image-i" id="logo-base-i">
                <div className="inner-rotate-i" id="xy-global-rotate-i">
                  <img src={require("./animations/x.png")} className="local-rotate-i" id="x-local-rotate-i" alt="logo" />
                  <img src={require("./animations/rotation.png")} className="local-parenthesis-i" id="x-parenthesis-i" alt="pi-parenthesis" />
                  <img src={require("./animations/y.png")} className="local-rotate-i" id="y-local-rotate-i" alt="logo" />
                  <img src={require("./animations/rotation.png")} className="local-parenthesis-i" id="y-parenthesis-i" alt="pi-parenthesis" />
                </div>
                <img src={require("./animations/pi.png")} className="local-rotate-i" id="pi-local-rotate-i" alt="logo" />
                <img src={require("./animations/rotation.png")} className="local-parenthesis-i" id="pi-parenthesis-i" alt="pi-parenthesis" />
                <div className="outer-rotate-i" id="outer-gear-i">
                  <img src={require("./animations/global_inner.png")} className="global-i" alt="gears-a-i" />
                  <img src={require("./animations/global_inner.png")} className="global-i" id="global-gear-b-i" alt="gears-a" />
                </div>
                <div className="outer-rotate-i" id="outer-shell-i">
                  <img src={require("./animations/global.png")} className="global-i" alt="shell-a" />
                  <img src={require("./animations/global.png")} className="global-i" id="global-shell-b-i" alt="shell-b" />
                </div>
              </div>
            </a>
            <h1 className="App-title">Mike Jorgensen</h1>
            <p className="App-subtitle">Android Developer</p>
            <ul>
              <li className="contact-link"><a target=" blank" href="https://www.linkedin.com/in/michael-jorgensen-8247756a/"><i class="fa fa-linkedin fa-3x social"></i></a></li>
              <li className="contact-link"><a target=" blank" href="https://github.com/Jsorgensen"><i class="fa fa-github fa-3x social"></i></a></li>
              <li className="contact-link"><a target=" blank" href="https://twitter.com/MikeLJorgensen"><i class="fa fa-twitter fa-3x social"></i></a></li>
            </ul>
          </header>
        </div>
        <div className="Section" id="bio">
          <p className="section-title">About</p>
          <p id="bio-description">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- I am an Android Developer and have been developing Android applications for the past 4 years. My most prominent App has been <a href="https://play.google.com/store/apps/details?id=com.Jsorgensen.EngineerPad&hl=en" id="bio-ep-ref">Engineer Pad</a> which I published to the Play Store in Nov. 2017.  It involves a lot of algorithms and dynamic UI elements that make up most of it's functionality.  I've developed other minor projects requiring experience with REST/JSON, and gaming basics with animations and interactions.  I got my initial exposure to Android development from my senior project in college. The project implemented a robot controlled by an Android mobile phone and a IOIO board.  I've never had any formal education in relation to Android/mobile development and am self taught, eager and ambitious.  I'm am currently open to new job opportunities.
          </p>
        </div>
        <div className="Section" id="portfolio">
          <div className="section-title">Portfolio</div>
          <div className="project-group">
            <a target=" blank" href="https://play.google.com/store/apps/details?id=com.Jsorgensen.EngineerPad&hl=en">
              <div classname="project-image" id="logo-base">
                <div className="inner-rotate" id="xy-global-rotate">
                  <img src={require("./animations/x.png")} className="local-rotate" id="x-local-rotate" alt="logo" />
                  <img src={require("./animations/rotation.png")} className="local-parenthesis" id="x-parenthesis" alt="pi-parenthesis" />
                  <img src={require("./animations/y.png")} className="local-rotate" id="y-local-rotate" alt="logo" />
                  <img src={require("./animations/rotation.png")} className="local-parenthesis" id="y-parenthesis" alt="pi-parenthesis" />
                </div>
                <img src={require("./animations/pi.png")} className="local-rotate" id="pi-local-rotate" alt="logo" />
                <img src={require("./animations/rotation.png")} className="local-parenthesis" id="pi-parenthesis" alt="pi-parenthesis" />
                <div className="outer-rotate" id="outer-gear">
                  <img src={require("./animations/global_inner.png")} className="global" alt="gears-a" />
                  <img src={require("./animations/global_inner.png")} className="global" id="global-gear-b" alt="gears-a" />
                </div>
                <div className="outer-rotate" id="outer-shell">
                  <img src={require("./animations/global.png")} className="global" alt="shell-a" />
                  <img src={require("./animations/global.png")} className="global" id="global-shell-b" alt="shell-b" />
                </div>
              </div>
            </a>
            <div className="project-sub">
              <div className="project-title">Engineer Pad</div>
              <p className="project-description"> <tb></tb> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a target=" blank" href="https://play.google.com/store/apps/details?id=com.Jsorgensen.EngineerPad&hl=en">Engineer Pad</a> is an Engineering notation software app published to the Google Play Store.  It incorporates units and variables in a clear organized layout to provide simplicity to complicated calculations and problems.  Engineer Pad has algorithms to solve for algebraic equations.  Engineer Pad also has various adjustable settings and can export pdfs.</p>
            </div>
          </div>
          <div className="project-group">
            <div className="project-sub">
              <div className="project-title">Yahoo Weather API</div>
              <p className="project-description"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a target=" blank" href="https://github.com/Jsorgensen/YahooWeatherAPI">YahooWeatherAPI</a> is an Android app that utilizes REST and JSON to get weather data from a Yahoo Weather API.  The app utilizes fragments to allow viewing the daily forecast and 10 day forecast side by side when the mobile device is in landscape orientation.</p>
            </div>
            <a target=" blank" href="https://github.com/Jsorgensen/YahooWeatherAPI"><img src={require("./images/YahooWeather.png")} alt="dang, didn't work" className="project-image"></img></a>
          </div>
          <div className="project-group">
            <a target=" blank" href="https://github.com/Jsorgensen/PianoTracker"><img src={require("./images/pianotracker.png")} alt="dang, didn't work" className="project-image"></img></a>
            <div className="project-sub">
              <div className="project-title">Lesson Tracker</div>
              <p className="project-description"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a target=" blank" href="https://github.com/Jsorgensen/PianoTracker">Piano tracker</a> is an app designed for Android that helps to keep track of lessons.  Some of the tracking is for lesson lengths, rates, costs, and payments.  Lesson tracker associates the student with the corresponding details to total up payments due, etc.</p>
            </div>
          </div>
          <div className="project-group">
            <div className="project-sub">
              <div className="project-title">Game Development</div>
              <p className="project-description"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a target=" blank" href="https://github.com/Jsorgensen/EmmasAgony">Emmas Agony</a> is a game development app.  It consisted of a development project to learn the physics, animations, and interactions involved with game design.</p>
            </div>
            <a target=" blank" href="https://github.com/Jsorgensen/EmmasAgony"><img src={require("./images/gamedevelopment.PNG")} alt="dang, didn't work" className="project-image"></img></a>
          </div>
        </div>
        <div className="Section" id="contact">
          <p className="section-title">Contact</p>
          <div id="contact-sub">
            <div id="contact-message">Connect with me:</div>
            <ul>
              <li className="contact-link-b"><a target=" blank" href="https://www.linkedin.com/in/michael-jorgensen-8247756a/"><i className="fa fa-linkedin fa-3x social"></i></a></li>
              <li className="contact-link-b"><a target=" blank" href="https://github.com/Jsorgensen"><i className="fa fa-github fa-3x social"></i></a></li>
              <li className="contact-link-b"><a target=" blank" href="https://twitter.com/MikeLJorgensen"><i className="fa fa-twitter fa-3x social"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;