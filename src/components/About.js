import React, { Component } from 'react';

class About extends Component {

  constructor() {
    super();
      this.state = {
        resumeData: {"name":"陳金昌","bio":"full stack engineer","city":"Taipei","phone":"0910357519","email":"kyocoolcool@hotmail.com"}
      };
  }

  render() {
      var name = this.state.resumeData.name;
      var profilePic= "https://raw.githubusercontent.com/kyocoolcool/kyocoolcool.io/master/static/images/me.jpg";
      var bio = this.state.resumeData.bio;
      var city = this.state.resumeData.city;
      var phone= this.state.resumeData.phone;
      var email = this.state.resumeData.email;
      // var resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilePic} alt="Chris Chen Profile Pic" width="120px"/>
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{city}</span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               {/*<div className="columns download">*/}
               {/*   <p>*/}
               {/*      <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>*/}
               {/*   </p>*/}
               {/*</div>*/}
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
