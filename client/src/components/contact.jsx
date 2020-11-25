import React from "react";
import axios from 'axios';
import imageOverlay from "../img/earth.jpg";
class Contact extends React.Component {
  constructor(props){
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }
}
onChangeName(e){
    this.setState({
        name: e.target.value
    })
}
onChangeEmail(e){
    this.setState({
        email: e.target.value
    })
}
onChangeSubject(e){
    this.setState({
        subject: e.target.value
    })
}
onChangeMessage(e){
  this.setState({
      message: e.target.value
  })
}
onSubmit(e){
    e.preventDefault();
    
    const newtodo = {
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message
    }
    let url =  "https://hidden-oasis-23909.herokuapp.com/test/add";
    // const headers = {
    //   'Content-Type': 'application/json',
    //   'Authorization': '7bc374325b7041affdd56161e4511120'
    // }
    //  {headers: headers}
    axios.post(url, newtodo,)
            .then(res => console.log(res.data));

    this.setState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
}
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Send A Message</h5>
                      </div>
                      <div>
                        <form
                          onSubmit={this.onSubmit}
                          method="POST"
                          className="contactForm"
                        >
                          <div id="sendmessage">
                            Your message has been sent. Thank you!
                          </div>
                          <div id="errormessage"></div>
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Your Name"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 4 chars"
                                  value={this.state.name}
                                  onChange={this.onChangeName}
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  data-rule="email"
                                  data-msg="Please enter a valid email"
                                  value={this.state.email}
                                  onChange={this.onChangeEmail}
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 8 chars of subject"
                                  value={this.state.subject}
                                  onChange={this.onChangeSubject}
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows="5"
                                  data-rule="required"
                                  data-msg="Please write something for us"
                                  placeholder="Message"
                                  value={this.state.message}
                                  onChange={this.onChangeMessage}
                                ></textarea>
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button
                                type="submit"
                                className="button button-a button-big button-rouded"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Whether you want to get in touch, talk about a project
                          collaboration, or just say hi, I'd love to hear from
                          you.
                          <br />
                          Simply fill the form and click "Send Message" button.
                        </p>
                        <br></br>
                         <ul className="list-ico">
                                <li><span className="ion-ios-location"></span> Jalalabad, Shamli, U.P. India, 247772</li>
                                <li><span className="ion-ios-telephone"></span> +91 7060722684</li>
                                <li><span className="ion-email"></span> shuaibabbasi6@gmail.com</li>
                                </ul>
                      </div>
                      <div className="socials">
                        <ul>
                          <li>
                            <a
                              href="https://www.facebook.com/nawezabbasiSN/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-facebook"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/ShuaibAbbasi6"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-twitter"></i>
                              </span>
                            </a>
                          </li>

                          <li>
                            <a
                              href="https://github.com/shuaibabs"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/shuaib-abbasi-b83aa0155"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}
export default Contact;