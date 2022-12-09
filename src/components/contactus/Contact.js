import React, { useRef } from 'react'
import './Contact.css'
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import img from "../../assets/contact/contactimg.png";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jw6ntdp",
        "template_p932tj4",
        form.current,
        "dsjzXEI4RsrRd2CWM"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className='contact' id='contact'>

      <StyledContactForm>
        <h2>Quick Contact</h2>
        <span>
          hbhjd saj hjas dbjabshdbabjs djabsd asjdbahus dbasvdgasjbd jasvda sjdvasjd abs
        </span>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </StyledContactForm>
      <div className='bg'>
        <img src={img} alt="" />
      </div>
    </section>
  )

}

const StyledContactForm = styled.div`
  width: 50%;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      padding:10px;
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 10px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }

  @media screen and (max-width:768px){
    width:100%;
    text-align:center;
    span{
      width:100%;
      text-align:justify
    }
  }
`;
export default Contact