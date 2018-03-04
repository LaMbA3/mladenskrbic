import React, { Component } from 'react';
import '../css/Contact.css';
import $ from 'jquery';

class Contact extends Component{
  constructor(){
    super();
    this.send=this.send.bind(this);
  }

    send(e){
      e.preventDefault();
      var data={
        name:$("#formname").val(),
        email:$("#formemail").val(),
        message:$("#msg").val()
      }
      if(!data.name||!data.email||!data.message){
        alert("All fields are required");
        return;
      }
      else if(!/.*@.*\..*/.test(data.email)){
        alert("Please, check the email you entered");
        return;
      }
        var url= window.location.href;
      $.ajax({
        type:"POST",
        url:url+"send",
        data:data,
        success: function(data){
          $("#flash").text("Email has been sent")
          $("#formname").val("")
          $("#formemail").val("")
          $("#msg").val("")
          $("#flash").addClass("emailsent");

          setTimeout(function(){
            $("#flash").removeClass("emailsent")
          },5000)
  },
  error: function() {
    $("#flash").text("Sending failed")
    $("#formname").val("")
    $("#formemail").val("")
    $("#msg").val("")
    $("#flash").addClass("notsent");

    setTimeout(function(){
      $("#flash").removeClass("notsent")
    },5000)
  }
      })
  }


  render(){
    return(
      <div className="contact-comp" id="contact">
      <div className="form">
         <form method="POST"action="send"autoComplete="off">
          <p id="flash"></p>
          <div><input type="text"placeholder="Name"name="name"id="formname"required/></div>
          <div><input type="email"placeholder="Email"name="email"id="formemail"required/></div>
          <div><textarea id="msg"type="text"placeholder="Message"name="message"required/></div>
          <button type="submit"id="formsub"onClick={(e)=>this.send(e)}>Send</button>
        </form>
      </div>
      </div>
  );
  }
}
export default Contact;
