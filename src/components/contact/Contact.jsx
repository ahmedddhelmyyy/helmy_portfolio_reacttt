import React ,{useRef} from 'react'
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';


import emailjs from '@emailjs/browser'

const ContactData=[
{
  id:1,
  icon:<MdOutlineEmail/>,
  title:"Email",
  info:"ahmedd.ashraff.helmyy@gmail.com",
  link:"mailto:ahmedd.ashraff.helmyy@gmail.com"
}
,
{
    id:2,
  icon:<BsWhatsapp/>,
  title:"Whatsapp",
  info:"01014981364",
  link:"https://api.whatsapp.com/send?phone=201014981364"

}
];




function Contact() {

 const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wo73rpg', 'template_lt716j8', form.current,'HNZXb5pFWZmGTnUzn')
  e.target.reset();
    };

  return (
  <section className="contact" id="contact">
    <div className="top_section">
      <h5>Get In Touch</h5>
      <h2>Contact Me !</h2>
    </div>

<div className="container contact_container">
  <div className="contact_options">

{ContactData.map(({id , icon , title, info , link})=>

(<article key={id} className="contact_option">
{icon}
<h4>{title}</h4>
<h6>{info}</h6>
<a href={link} target='_blank'>Send Message </a>
</article>
))}
  </div>


  <form ref={form} onSubmit={sendEmail} action="">
    <input type='text' placeholder='Enter Your Full Name' name='name'/>
    <input type='email' placeholder='Enter Your Email' name='email'/>
    <input type='text' placeholder='Title' name='title'/>
    <textarea row={7}  name='message' id='' placeholder='Enter Your Message'></textarea>
<button className='btn btn-primary'>Send Message</button>

  </form>
</div>

  </section>
  )
}

export default Contact
