import React, { Component } from 'react';
import '../css/About.css';

class About extends Component{
  render(){
    return(
      <div className="About-aps">
        <div id="scrollable">
          <h3>About me</h3>
          <span id="close"onClick={this.props.close}>X</span>
          <p>My name is Mladen Skrbic, I am junior Front-end developer from Bosnia and Herzegovina.
I love coding, one day i hope to become software developer.I am currently learning to improve my knowledge in web
development by becoming Fullstack developer.How i learned web development, you can see at EDUCATION.
I love to write clean and readable code as much as possible.I like coding because i can express my creativity through it.
I also like coffee especially when i am stuck, and i need to think about something.I tend always to do my best, and prove myself.</p>
      <h3>Education</h3>
      <p>I was mainly learning on <a href="https://www.freecodecamp.org">FreeCodeCamp</a>, but also from many other resources such as:<a href="https://www.edx.org/">Edx</a>,<a href="https://www.codecademy.com/"> Codecademy</a>,books like <a href="https://www.gitbook.com/book/maximdenisov/you-don-t-know-js/details">YDKS</a> and <a href="http://eloquentjavascript.net/">Eloquent javascript</a>, and lots of hours of <a href="https://youtube.com">Youtube</a> tutorials.</p>
      <h3>Skills</h3>
      <p id="skills">React, Jquery, HTML5, CSS3, Javascript, Bootstrap, Materialize, Node.js, Git, Sass, Redux,Webpack</p>
        </div>
      </div>
  );
  }
}
export default About;
