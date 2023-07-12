import React, { useState } from 'react'
import './photographyvideo.css'
import { Helmet } from 'react-helmet-async'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import { ToastContainer, toast } from 'react-toastify'
// import showreel from '../../assets/Showreel.mp4'
import Button from '../../components/button/Button'
import { CircularProgress } from '@mui/material'
import emailjs from '@emailjs/browser';
import clients from '../../assets/Clients.json'
import ProjectCard from '../../components/project-card/ProjectCard'

const renderLoading = () => (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CircularProgress color="inherit" />
    </div>
)

// Works menu
const worksMenu = [
    "Photography", 
    "Video Production"
]

//Project Types
const projectTypes = [
  {
    name: "Corporate Films",
    description: "Tell your company’s story with a brand promotional video. Convert your customers by implementing these style videos on your website."
  },
  {
    name: "Live Events",
    description: "We have a team of talented filmmakers & Photographers ready to capture your upcoming event!"
  },
  {
    name: "Social Media ADS",
    description: "We create scroll-stopping video ads to generate more leads or traffic to your site."
  },
  {
    name: "Social Media Content",
    description: "Our social creative team will help you create engaging and viral content for your social media platforms!"
  },
  {
    name: "Branding Production",
    description: "For your brand to be represented and to establish distinct visual identities, we provide bespoke photos and videos. It features team headshots in addition to all of your product photographs and videos. "
  },
  {
    name: "Podcast Production",
    description: "Whether you want to expand an existing podcast or launch a brand-new one. We'll support you in achieving your objectives."
  }
]

const PhotographyVideo = () => {
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
    // This helps navigate the works menu
    const [activeWorksMenuIndex, setActiveWorksMenuIndex] = useState(1);
    const [worksMenuData, setWorksMenuData] = useState("Video Production");

    // This filters out only photography clients
    const photographyClients = clients.filter(client => client.projectType === "Photography");
    // This filters out only video clients
    const videoClients = clients.filter(client => client.projectType === "Video Production");

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
            <title>Photography & Video Production | Emacon Production</title>
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

        <Navigation />

        {/* Hero Section */}
        <div className='photographyvideo_hero'>
            <video src="https://res.cloudinary.com/emacon-production/video/upload/v1689078975/Emacon%20Production/Showreel_ibv4ay.mp4" autoPlay loop muted playsInline className='hero_video' />

            <div className='photographyvideo_hero_content'>
                <h1>
                    We create <span className='word_emphasy_v1' >High Impact & Authentic</span> content that convert. 
                </h1>
                <p>We help commercial businesses leverage the power of video to drive traffic and boost awareness.</p>
                <Button Placeholder="Partner With Us" type="route" targetLink="/contact" />
            </div>
        </div>

        {/* Project Types */}
        <div className='projecttypes_wrapper'>
          <h1>We offer a wide range of <span className='word_emphasy_v1' >Production Services</span></h1>

          <div className='projectTypes' >
            {
              projectTypes.map((item, index) => (
                <div key={index}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>

        {/* Photography & Video Works */}
        <div className='works_wrapper'>
            <h1>Our Latest Projects</h1>
            <div className='works_Menu'>
                {
                    worksMenu.map((menu, index) => (
                        <p 
                            key={index} 
                            className={`${activeWorksMenuIndex === index ? "activeWorksMenu" : ""}`} 
                            onClick={() => {
                                setActiveWorksMenuIndex(index)
                                setWorksMenuData(menu)
                            }}
                        >
                            {menu}
                        </p>))
                }
            </div>

            <div className='works_data'>
                {
                        worksMenuData === "Photography" ? (
                            <React.Fragment>
                                {
                                    photographyClients.map((client, index) => (
                                        <React.Fragment>
                                            {
                                                index < 5 ? <ProjectCard key={index} data={client} /> : null
                                            }
                                            
                                        </React.Fragment>))
                                }
                                
                            </React.Fragment>) : <React.Fragment /> &&
                        
                        worksMenuData === "Video Production" ? (
                            <React.Fragment>
                                {
                                    videoClients.map((client, index) => (
                                        <React.Fragment>
                                            {
                                                index < 5 ? <ProjectCard key={index} data={client} /> : null
                                            }
                                            
                                        </React.Fragment>))
                                }
                                
                            </React.Fragment>) : <React.Fragment /> 
                }
                
            </div>

            <div className='works_learnmore' >
                <Button Placeholder="View More" type="route" targetLink="/work" /> 
            </div>
        </div>

        {/* Contact Form */}
        <div className='digitalmarketing_contactform'>
          <div className='digitalcontactform_sectionone'>
            <h1>
              BOOK OUR PRODUCTION SERVICES <span className='word_emphasy_v1' >TODAY!</span>
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
                <option value="Photography">Photography</option>
                <option value="Video Production">Video Production</option>
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
        </div>

        <Footer />

        <ToastContainer />
    </div>
  )
}

export default PhotographyVideo