import React from 'react';
import "./Contact.css";
import emailjs from "@emailjs/browser";
// import { themeContext } from "../../Context";
import { useRef } from "react"

export const Contact = () => {
    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;
    const form = useRef();
    
    // const [done, setDone] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        alert("Your Message Send Successfully");

        emailjs
        .sendForm(
            "service_6ln4wi3",
            "template_qm3137h",
            form.current,
            "XPW2aettovNP95YAL"
        )
        .then(
            (result) => {
            console.log(result.text);
            // setDone(true);
            // form.reset();
            },
            (error) => {
            console.log(error.text);
            }
        );
    };

    // const sendMessage = () => {
    //   // e.preventDefault();
    //   alert("hello");
    // }
  return (
    <div className="contact-form" id='Contact'>
      <div className="w-left">
        <div className="awesome">
          <span>Get in Touch</span><br />
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name" required/>
          <input type="email" name="user_email" className="user" placeholder="Email" required/>
          <textarea name="message" className="user" placeholder="Message" required/>
          <input type="submit" value="Send"  className="button"/>
          {/* <span>{ "Your Message Send Successfully"}</span> */}
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>    
  );
};


export default Contact;