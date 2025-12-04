import React, { useState } from 'react'
import './digitalmarketing.css'
import Navigation from '../../components/navigation/Navigation'
import { Helmet } from 'react-helmet-async'
import Footer from '../../components/footer/Footer'
import Button from '../../components/button/Button'
import ServiceCard from '../../components/service-card/ServiceCard'
import { CircularProgress } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify'
import emailjs from '@emailjs/browser';

const digitalServicesData = [
  {
    name: "Content Creation & Marketing",
    description: "We take the time to keep an eye on the state and perception of your brand online, and we construct unique strategies based on the data we gather. We also suggest specific actions you can do to develop your digital assets.",
    thumbnail: "https://res.cloudinary.com/emacon-production/image/upload/v1688998358/Emacon%20Production/convertkit--CbLJAUI_js-unsplash_hcgcsu.jpg"
  },
  {
    name: "Search Engine Optimization & Marketing",
    description: "In order to help you outperform your competitors and drive relevant traffic to the pages that are most important to your business, we reimagine online experiences for visitors to your website using research-backed keyword ranking.",
    thumbnail: "https://res.cloudinary.com/emacon-production/image/upload/v1688998430/Emacon%20Production/souvik-banerjee-OMhubJCrtu0-unsplash_vyqbui.jpg"
  },
  {
    name: "Social Media Marketing",
    description: "We handle all of your social media requirements, including design and maintenance, and oversee 360-degree campaign implementation. We also find the top influencers to assist your business gain even more local attention.",
    thumbnail: "https://res.cloudinary.com/emacon-production/image/upload/v1688998192/Emacon%20Production/alexander-shatov-mr4JG4SYOF8-unsplash_qkladv.jpg"
  },
  {
    name: " Performance Marketing",
    description: "Our Performance Marketing service drives measurable growth through targeted digital campaigns, data-led optimization, and compelling creatives. We ensure every shilling spent works harder — delivering real results, stronger visibility, and consistent ROI for your brand",
    thumbnail: "https://res.cloudinary.com/emacon-production/image/upload/v1764683451/Emacon%20Production/Social_Media_Strategy_Performance_Marketing_wtoicd.jpg"
  }
]

const renderLoading = () => (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <CircularProgress color="inherit" />
  </div>
)

const DigitalMarketing = () => {
  const [ loading, setLoading ] = useState(false);
  const [ emailData, setEmailData ] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "Digital Marketing",
    budget: "To be negotiated",
    details: ""
  });

  const handleContactForm = e => {
    e.preventDefault();
    setLoading(true);

    if( emailData.name && emailData.email && emailData.phone && emailData.organization && emailData.details ) {
        emailjs.send(`service_m6r8nkg`, 'template_y8yt3i4', emailData, '0fTYxssuxFtRgWxyD') 
            .then(res => {
                  setEmailData({
                    name: "",
                    email: "",
                    phone: "",
                    organization: "",
                    service: "Digital Marketing",
                    budget: "To be negotiated",
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
    <div className='digitalmarketing_wrapper'>
      {/* SEO Data */}
      <Helmet>
          <title>Digital Marketing | Emacon Production</title>
          <meta 
            name='description' 
            content="As a full-service digital agency with capabilities across Content Marketing, SEO, SEM, Social Media Marketing and Web Design & Development, we work with clients to unlock value through creativity, technology and business-minded business"
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

      <Navigation />

      <div className='digitalmarketing_content'>
        {/* Hero Section */}
        <div className='digitalmarketing_sectionone'>
          <h1>
            Where <span className='word_emphasy_v1' >Creative Strategy</span> meets <span className='word_emphasy_v1' >Measurable Results.</span>
          </h1>
          <div className='digitalmarketing_sectionone_desc'>
            <p>
              We help you validate your product or service within the correct target market and manage the full execution of your digital and performance marketing strategy. From positioning to optimization, we ensure your programs gain meaningful visibility and deliver measurable results.
            </p>
            <Button Placeholder="Get Started" type="route" targetLink="/contact" />
          </div>
        </div>

        {/* Digital Services Section */}
        <div className='digitalmarketing_sectiontwo'>
          {
            digitalServicesData.map((service, index) => (
                <ServiceCard 
                    key={index}
                    name={service.name}
                    description={service.description}
                    routeName={service.targetLink}
                    thumbnail={service.thumbnail}
                />
            ))
          }
        </div>

        {/* Digital Approach */}
        <div className='digitalmarketing_sectionthree'>
          {/* Our Digital Approach */}
          <div className='digitalmarketing_approach'>
            <img src='https://res.cloudinary.com/emacon-production/image/upload/v1598082872/homePage/digitalMarketingPage_pyucai.jpg' alt='Emacon Production | Brand Visibility' />
            <div>
              <h2><span className='word_emphasy_v1' >Our Approach </span> to Digital Marketing</h2>
              <p>
                At the core of our digital marketing and performance services is a commitment to delivering real business value not vanity metrics. We combine strategic insight, data intelligence, and high-performing creative to engineer campaigns that deliver measurable growth, stronger engagement, and sustainable ROI. <br/> <br/>
                We begin by deeply understanding your brand’s purpose, customer journey, and KPIs, allowing us to design tailored strategies that speak to your audience with precision. Every decision—whether in media buying, targeting, content creation, or optimization is guided by data and aligned to your revenue goals. <br/><br/>
                From conversion-focused ad campaigns to full-funnel performance systems, we ensure your digital presence does more than exist; it competes, converts, and consistently captures market share. Our goal isn’t just to run campaigns—it’s to amplify your brand’s impact and deliver results you can see, measure, and scale.
              </p>
            </div>
          </div> 

          {/* Our Digital Approach on Social Media Influencers */}
          <div className='digitalmarketing_approach'>
            <div>
              <h2>Don’t Underestimate the Clout of <span className='word_emphasy_v1' >Social Media Influencers </span></h2>
              <p>
                The digital age has opened many opportunities for people all over the world, especially since the 
                internet particularly has made communication a whole lot easier by making communication across the 
                globe, borderless! Consequently, entrepreneurs have taken advantage of this borderless communication 
                to reach more potential customers via various indirect, online marketing strategies. Influencer 
                Marketing is one of those key strategies. Consumers and decision makers are constantly looking to 
                other people on the internet and social media to inform their purchasing decisions. This is why your 
                company should adopt a holistic approach to identifying and building relationships with influencers 
                in your industry
              </p>
            </div>
            <img src='https://res.cloudinary.com/emacon-production/image/upload/v1598181006/homePage/socialmediaInfluencers_f01ipt.jpg' alt='Emacon Production | Brand Visibility' />
          </div>  
        </div>

        {/* Contact Form */}
        <div className='digitalmarketing_contactform'>
          <div className='digitalcontactform_sectionone'>
            <h1>
              Get more <span className='word_emphasy_v1' >traffic, leads & conversions.</span>
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
        </div>
      </div>

      <Footer />

      <ToastContainer />
    </div>
  )
}

export default DigitalMarketing