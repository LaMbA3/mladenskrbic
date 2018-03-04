import React, { Component } from 'react';
import '../css/Aboutnew.css';
import Navnew from "./Navnew";
import Social from './Social';
import $ from 'jquery';

class Aboutnew extends Component{
  constructor(){
    super();
    this.projects=this.projects.bind(this);
    this.contact=this.contact.bind(this);
  }
  projects(){
    this.setState({
      active:false
    })
      $('html, body').animate({
          scrollTop: parseInt($("#projects").offset().top-53,10)
      }, 1000);
  }
  contact(){
    this.setState({
      active:false
    })
      $('html, body').animate({
          scrollTop: parseInt($("#contact").offset().top-53,10)
      }, 1000);
}
  render(){
    return(
      <div className="about">
        <div className="content">
        <img alt="Me" src={require("../Images/ja.png")}/>
          <h3>I&apos;m Mladen, <br/>Front-End Developer.</h3>
          <Social/>
          <div className="btns">
          <a onClick={this.projects} className="somebtns">Projects</a>
          <a href={require("../Images/Resume.pdf")}target="_blank" className="somebtns">Resume</a>
          <a onClick={this.contact} className="somebtns">Contact me</a>
          </div>
        </div>
        <Navnew/>
      </div>
    );
  }
}


export default Aboutnew;
