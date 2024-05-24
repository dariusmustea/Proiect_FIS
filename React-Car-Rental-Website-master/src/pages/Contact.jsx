import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/message6825.jpg'
import phone_icon from '../../assets/phone.jpeg'
import mail_icon from '../../assets/mail-icon.png'
import addres_icon from '../../assets/addres-icon.jpeg'
import white_arrow from  '../../assets/black_arrow.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "231b0afb-9ec5-4fb2-99ad-b98d32201406");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
         <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt=""/></h3>
            <p>Feel free to reach out through contact form or find our contact
                information below. Your feedback, questions, and suggestions 
                are important for us as we strive to provide exceptional service!
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@LuxRentMonaco.dev</li>
                <li><img src={phone_icon} alt="" />+203512</li>
                <li><img src={addres_icon} alt="" />11 Rue des Remparts<br/>MA 02133, Monaco</li>
            </ul>
         </div>
         <div className="contact-col"> 
         <form onSubmit={onSubmit}>

          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <label>Phone number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
          <label>Write your message here</label>
          <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
        <button type='submit ' className='btn dark-btn'>Submit now<img src={white_arrow} alt=""></img></button>
         </form>
         <span>{result}</span>
         </div>
    </div>
  )
}

export default Contact