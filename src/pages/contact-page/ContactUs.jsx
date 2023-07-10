import React, { useState } from 'react'
import './contactus.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import Button from '../../components/button/Button'
import { CircularProgress } from '@mui/material'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async'

const renderLoading = () => (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <CircularProgress color="inherit" />
  </div>
)

const ContactUs = () => {
  const [ loading, setLoading ] = useState(false);
  const [ emailData, setEmailData ] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "",
    budget: "",
    details: ""
  });

  const handleContactForm = e => {
    e.preventDefault();
    setLoading(true);

    if( emailData.name && emailData.email && emailData.phone && emailData.organization && emailData.service !== "" && emailData.budget && emailData.details ) {
        emailjs.send(`service_m6r8nkg`, 'template_y8yt3i4', emailData, '0fTYxssuxFtRgWxyD') 
            .then(res => {
                  setEmailData({
                    name: "",
                    email: "",
                    phone: "",
                    organization: "",
                    service: "",
                    budget: "",
                    details: ""
                  });
                setLoading(false);
                toast('Your message has been sent successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                    });
            }).catch(err => {
                toast.error(`${err.text}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                    });

                setLoading(false);
            })
    } else {
        toast.error(`Please fill all the fields in the form`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            })
        setLoading(false);
      }
  }

  return (
    <div className='contactus_wrapper'>
       <Helmet>
        <title>Contact Us | Emacon Production</title>
        <meta 
          name='description' 
          content="Let us help you become even greaterat what you do. Our services include Photography, Video Production, Digital Marketing and Web Design & Development."
        />
        <link rel='canonical' href='/contact' />
      </Helmet>

        <Navigation />

        <div className='contactus_sectionone'>
          <h1>
            Let's work <span className='word_emphasy_v1' >together!</span>
          </h1>
          <p>
            Let us help you become even greater at what you do. <br />
            Fill out the following form and we will get back to you in the next 24 hours.
          </p>
        </div>

        <div className='contactus_sectiontwo'>
          <form>
            <div className="input-wrapper">
              <p>What's your name?</p>
              <input 
                className="input-box" 
                type="text" 
                placeholder="Type your full name" 
                value={emailData.name}
                onChange={e => setEmailData({...emailData, name : e.target.value})}
              />
              <span className="underline"></span>
            </div>

            <div className="input-wrapper">
              <p>What's your email address?</p>
              <input 
                className="input-box" 
                type="text" 
                placeholder="example@email.com" 
                value={emailData.email}
                onChange={e => setEmailData({...emailData, email: e.target.value})}
              />
              <span className="underline"></span>
            </div>

            <div className="input-wrapper">
              <p>What's your phone number?</p>
              <input 
                className="input-box" 
                type="text" 
                placeholder="+254 701 234567" 
                value={emailData.phone}
                onChange={e => setEmailData({...emailData, phone: e.target.value})}
              />
              <span className="underline"></span>
            </div>

            <div className="input-wrapper">
              <p>What's your company/ organization name?</p>
              <input 
                className="input-box" 
                type="text" 
                placeholder="Type your company/ organization name" 
                value={emailData.organization}
                onChange={e => setEmailData({...emailData, organization: e.target.value})}
              />
              <span className="underline"></span>
            </div>

            <div className="input-wrapper">
              <p>What's service are you looking for?</p>
              <select 
                id="services" 
                name="services"  
                className="input-box" 
                value={emailData.service}
                onChange={e => setEmailData({...emailData, service: e.target.value})}
              >
                <option value="">Choose from the list here</option>
                <option value="Photography">Photography</option>
                <option value="Video Production">Video Production</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Web Design & Development">Web Design & Development</option>
              </select>

              <span className="underline"></span>
            </div>

            <div className="input-wrapper">
              <p>What have you budgeted for this project?</p>
              <input 
                className="input-box" 
                type="number" 
                placeholder="Type your budget for the project" 
                value={emailData.budget}
                onChange={e => setEmailData({...emailData, budget: e.target.value})}
              />
              <span className="underline"></span>
            </div>

            <div className="input-wrapper">
              <p>Tell us more about your project</p>
              <textarea 
                rows="6" 
                className="input-box" 
                type="text" 
                placeholder="Type your message" 
                value={emailData.details}
                onChange={e => setEmailData({...emailData, details: e.target.value})}
              />
              <span className="underline"></span>
            </div>

            <Button Placeholder={ loading ? renderLoading() : "Send" } handleForm={e => handleContactForm(e)} />
          </form>

          <div className='contactus_sectiontwo_address'>
            <h4>CALL US</h4>
            <p>
              +254 701 230892
            </p>

            <h4>Email US</h4>
            <p>
              info@emaconproduction.com
            </p>

          </div>
        </div>

        <Footer />

        <ToastContainer />
    </div>
  )
}

export default ContactUs