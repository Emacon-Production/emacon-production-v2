import React, { useState } from 'react'
import './webdesigndevelopment.css'
import { Helmet } from 'react-helmet-async'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import Button from '../../components/button/Button'
import ServiceCard from '../../components/service-card/ServiceCard'
import { CircularProgress } from '@mui/material'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify'

// Software Services
const services = [
    {
        name: "Website Design & Develoment",
        description: "launching a new business? We understand the art of making an impression, thus we design and construct functional Websites with scale and future development in mind to help you establish your online presence.",
        thumbnail: "https://res.cloudinary.com/emacon-production/image/upload/v1689841465/Emacon%20Production/le-buzz-studio-KiEiI2b9GkU-unsplash_ot50nq.jpg"
    },
    {
        name: "Web App Develoment",
        description: "We are able to design online web solutions specifically for you by utilizing our internal specialists, adaptable infrastructure, and years of experience.",
        thumbnail: "https://res.cloudinary.com/emacon-production/image/upload/v1689841456/Emacon%20Production/luke-chesser-JKUTrJ4vK00-unsplash_ezrxqa.jpg"
    },
    {
        name: "Mobile App Develoment",
        description: "Is it an e-commerce? Or a busniness? Or anything else? If you dream it we can code it! Our apps are well designed, fluid and have an amazing user experience. ",
        thumbnail: "https://res.cloudinary.com/emacon-production/image/upload/v1689841455/Emacon%20Production/balazs-ketyi-b9rPuUQ_YSs-unsplash_prbj0a.jpg"
    }
]

// Loading Component
const renderLoading = () => (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CircularProgress color="inherit" />
    </div>
)

const WebDesignDevelopment = () => {
    const [ loading, setLoading ] = useState(false);
    const [ emailData, setEmailData ] = useState({
        name: "",
        email: "",
        phone: "",
        organization: "",
        service: "",
        budget: "Requested quote",
        details: ""
    });

    // This handles the inquiry form
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
    <div>
        {/* SEO Data */}
        <Helmet>
            <title>Web Design & Development | Software Development | Emacon Production</title>
            <meta 
                name='description' 
                content="We create high-quality content that is targeted to all of your digital demands. We do hear. We comprehend. Then we start to make! A three-step procedure to help you develop the captivating brand identity you deserve!"
            />
            <meta
              name="keywords"
              content="
                Video Production, video production companies in Africa, video production companies in East Africa, video production companies in kenya, video production companies in Nairobi, 
                video production company, video production meaning, video production agency,video production agency near me,video production budget, video production business, 
                video production for social media, video production for small businesses, Nairobi Videographer, Nairobi Photographer,
                Travel Photography & Video production, travel photography companies,
                Documentary Video Production & Photography, documentary video production, documentary video production house, film video production, documentary video editing, full video production service, film & video production house, full video production agency, documentary video production company, video/film production companies, video film production agency,
                corporate Photography, corporate photography pricing, corporate photography near me"
            />
            <link rel='canonical' href='/services' />
        </Helmet>

        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <div className='webdesigndevelopment_sectionone'>
            <div className='webdesigndevelopment_hero_wrapper'>
                <h1>Developing your idea into <span className='word_emphasy_v1' >Reality</span></h1>
                <p>
                    We provide custom web and software solutions for any industry. Creating high-value websites, software and technology for your business.
                </p>
                <Button Placeholder="Get in touch" type="route" targetLink="/contact" />
            </div>
        </div>

        {/* About Section */}
        <div className='webdesigndevelopment_sectiontwo'>
            <h2>We help businesses to make their products <span className='word_emphasy_v1' >come to life</span>, worldwide </h2>
            <img src="https://res.cloudinary.com/emacon-production/image/upload/v1689839030/Emacon%20Production/christina-wocintechchat-com-FPQlXQtjkqU-unsplash_xtbspr.jpg" alt='Web Design & Development | Software Development | Emacon Production' />
            <div className='webdesigndevelopment_missionwrapper'>
                <div className='webdesigndevelopment_mission'>
                    <h4><span className='word_emphasy_v1' >Our Mission</span></h4>
                    <p>
                        To enhance the value of your company, we mix innovation, superior software development, and top-notch customer service. Our objective is to provide 
                        results, save you time and money, and establish a long-lasting partnership that is advantageous to both of us.
                    </p>
                </div>
            </div>
        </div>

        {/* Services Section */}
        <div className='webdesigndevelopment_sectionthree'>
            {
                services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        name={service.name}
                        description={service.description}
                        thumbnail={service.thumbnail}
                    />
                ))
            }
        </div>

        {/* Contact Form */}
        <div className='digitalmarketing_contactform'>
          <div className='digitalcontactform_sectionone'>
            <h1>
              BOOK OUR SOFTWARE SOLUTIONS SERVICES <span className='word_emphasy_v1' >TODAY!</span>
            </h1>
            <p>
              Please fill out the form and we will get back to you shortly.
            </p>
          </div>
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
                <option value="Web Design & Development">Web Design & Development</option>
                <option value="Web App Development">Web App Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
              </select>

              <span className="underline"></span>
            </div>

            {/* <div className="input-wrapper">
              <p>What have you budgeted for this project?</p>
              <input 
                className="input-box" 
                type="number" 
                placeholder="Type your budget for the project" 
                value={emailData.budget}
                onChange={e => setEmailData({...emailData, budget: e.target.value})}
              />
              <span className="underline"></span>
            </div> */}

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

            <Button Placeholder={ loading ? renderLoading() : "Request Quote" } handleForm={e => handleContactForm(e)} />
          </form>
        </div>

        {/* Footer */}
        <Footer/>

        {/* Toast Container */}
        <ToastContainer />
    </div>
  )
}

export default WebDesignDevelopment