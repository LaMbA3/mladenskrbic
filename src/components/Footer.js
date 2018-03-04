import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component{
  constructor(){
    super();
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(){
  window.scroll({top: 0, behavior: 'smooth' });
  }
  render(){
    return(
      <div className="new">
      <div className="footer">
        <div>
       <span className="cont flex2">
        <a href="https://github.com/LaMbA3"target="_blank"rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://codepen.io/Skrbic/"target="_blank"rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100006282542400"target="_blank"rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></span>
        </div>
        <a id="arrow"onClick={this.handleClick}><i className="fas fa-arrow-up"></i></a>
      </div>
     <div className="copy">  <span>&copy; Page created by Mladen</span></div>
      </div>
  );
  }
}
export default Footer;
