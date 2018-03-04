import React, { Component } from 'react';
import '../css/Navnew.css';
import $ from 'jquery';
import About from './About'


class Navnew extends Component{
  constructor(){
    super();
    this.state={
      navbarcollapse:false,
      active:false,
      scroll:false,
      about:false
    }
    this.resize=this.resize.bind(this);
    this.scroll=this.scroll.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.projects=this.projects.bind(this);
    this.contact=this.contact.bind(this);
    this.toper=this.toper.bind(this);
    this.about=this.about.bind(this);
    this.close=this.close.bind(this);
  }
  close(){
    this.setState({
      about:false
    })
  }
  about(){
    this.setState({
      about:true,
      active:false

    })
  }
  handleClick(){
    if(this.state.active){
      this.setState({
        active:false
      })
    }
    else{
      this.setState({
        active:true
      })
    }
  }
  scroll(){
    if(window.scrollY){
      this.setState({
        scroll:true
      })
    }
    else{
      this.setState({
        scroll:false
      })
    }
  }
  resize(){
    const width = window.innerWidth
     || document.documentElement.clientWidth
     || document.body.clientWidth;
     if(width<771){
       this.setState({
         navbarcollapse:true
       })
     }
     else{
       this.setState({
         navbarcollapse:false,
         active:false
       })
     }
  }
  componentDidMount() {
     window.addEventListener('resize', this.resize);
     window.addEventListener('scroll', this.scroll);
  }
  componentWillMount() {
     this.resize();
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
toper(){
  this.setState({
    active:false
  })
  $('html, body').animate({
    scrollTop:0
  }, 1000);
}
  render(){
    return(
      <div className={this.state.scroll?"sticky":null}id="navigation">
      <div className={this.state.active?"navactive":null}>
      <nav>
        <a className={this.state.scroll?"logo lol":"logo"}onClick={this.toper}><img alt="me"className={this.state.scroll?"imgshow":"hide"} src={require("../Images/ja.png")}/>Mladen</a>
        <ul className={this.state.navbarcollapse?" hide":" list"}>
        <li onClick={this.about}>About</li>
        <li onClick={this.projects}>Projects</li>
        <li onClick={this.contact}>Contact</li>
        <a href={require("../Images/Resume.pdf")}target="_blank"><li>Resume</li></a>
        </ul>
        <span onClick={this.handleClick} className={this.state.navbarcollapse?"show":"hide"}><i className="fas fa-bars"></i></span>
      </nav>
      </div>
      {this.state.about?<div className="overlay" onClick={this.close}></div>:null}
      {this.state.about?<About close={this.close}/>:null}
        </div>
    );
  }
}
export default Navnew;
