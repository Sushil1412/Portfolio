import React, { useRef } from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import emailjs from 'emailjs-com';
emailjs.init('4F07Bjzsp5LoUAbxK9');
const Contact = () => {

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lhuxto9', 'template_80n3pnz', form.current, '4F07Bjzsp5LoUAbxK9')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message, please try again.');
        }
      );
  };


  return (

    <section id="contact">

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail />
            <h1>Email</h1>
            <h5>ssssushil25783@gmail.com</h5>
            <a href='mailto:ssssushil25783@gmail.com' target='_blank'>Send Messege</a>

          </article>


          <article className='contact_option'>
            < IoLogoInstagram />
            <h1>Instagram</h1>
            <h5></h5>
            <a href='https://www.instagram.com/name_is_sushil/?next=%2F' target='_blank'>Send Messege</a>

          </article>

          <article className='contact_option'>
            < FaXTwitter />
            <h1>X</h1>
            <h5></h5>
            <a href='https://x.com/SushilNayak1412' target='_blank'>Send Messege</a>

          </article>


        </div>

        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="9743bd21-e207-4e33-8b05-0f7260bb1144" />
          <input type='text' name='name' placeholder='your full name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary' >send message</button>
        </form>


      </div>


    </section>


  )
}

export default Contact
