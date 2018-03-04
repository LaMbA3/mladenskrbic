import React, { Component } from 'react';
import '../css/Projects.css';

class Projects extends Component{
  render(){
    return(
      <div className="asad"id="projects">
        <div className="band">
        <div className="item-4">
          <a href="https://codepen.io/Skrbic/full/wrVKwB/" className="card">
            <div className="thumb"id="weather"></div>
            <article>
              <h1>Local Weather</h1>
              <p>Project for FreeCodeCamp course.Goal was to pull data from Api using AJAX request.</p>
              <span>Skills:HTML5, CSS3, Jquery</span>
            </article>
          </a>
    </div>
    <div className="item-4">
      <a href="https://codepen.io/Skrbic/full/aVzjVJ/" className="card">
        <div className="thumb"id="quote"></div>
        <article>
          <h1>Random Quote Machine</h1>
          <p>Project for FreeCodeCamp course.Goal was to pull data from Api using AJAX request, and be able to tweet the quote.</p>
          <span>Skills:HTML5, CSS3, Jquery</span>
        </article>
      </a>
</div>
<div className="item-4">
  <a href="https://codepen.io/Skrbic/full/GOBOZE" className="card">
    <div className="thumb"id="twitch"></div>
    <article>
      <h1>Twitch users</h1>
      <p>Project for FreeCodeCamp course.Goal was to pull data from Api using AJAX request, and be be able to search users by name.</p>
      <span>Skills:HTML5, CSS3, Jquery</span>
    </article>
  </a>
</div>
<div className="item-4">
  <a href="https://codepen.io/Skrbic/full/WXGbrM" className="card">
    <div className="thumb"id="wiki"></div>
    <article>
      <h1>Wikipedia Viewer</h1>
      <p>Project for FreeCodeCamp course.Goal was to pull data from Api using AJAX request, and be able to search trough data.</p>
      <span>Skills:HTML5, CSS3, Jquery</span>
    </article>
  </a>
</div>
<div className="item-4">
  <a href="https://codepen.io/Skrbic/full/ypVdYp" className="card">
    <div className="thumb"id="pomodoro"></div>
    <article>
      <h1>Pomodoro Clock</h1>
      <p>Project for FreeCodeCamp course.Goal was to be able to set session and break for pomodoro clock, and be able to reset it.</p>
      <span>Skills:HTML5, CSS3, Jquery</span>
    </article>
  </a>
</div>
<div className="item-4">
  <a href="https://codepen.io/Skrbic/full/KZNExB/" className="card">
    <div className="thumb"id="calc"></div>
    <article>
      <h1>Calculator</h1>
      <p>Project for FreeCodeCamp course.Goal was to create a basic arithmetic operations.</p>
      <span>Skills:HTML5, CSS3, Jquery</span>
    </article>
  </a>
</div>
        </div>
      </div>
  );
  }
}
export default Projects;
