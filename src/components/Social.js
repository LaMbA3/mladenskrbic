import React, { Component } from 'react';

class Social extends Component{
  render(){
    return(
      <div className="contact">
      <p><span className="info">Email</span><span className="cont"> mladenskrbicLaMbA3@outlook.com</span></p>
      <p className="flex"><span className="info"id="socialtag">Social</span><span className="cont flex2">
      <a href="https://github.com/LaMbA3"target="_blank"rel="noopener noreferrer"><i className="fab fa-github"></i></a>
      <a href="https://codepen.io/Skrbic/"target="_blank"rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
      <a href="https://www.facebook.com/profile.php?id=100006282542400"target="_blank"rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
      </span></p>  </div>
    );
  }
}
export default Social;
