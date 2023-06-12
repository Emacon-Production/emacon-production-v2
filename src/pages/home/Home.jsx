import React, { useState } from 'react'
import './home.css'
import Navigation from '../../components/navigation/Navigation'
import clients from '../../assets/Clients.json'
import Button from '../../components/button/Button'
import ServiceCard from '../../components/service-card/ServiceCard'
import services from '../../assets/Services.json'
import workstages from '../../assets/WorkStages.json'
import ProjectCard from '../../components/project-card/ProjectCard'

const worksMenu = [
    "All",
    "Photography", 
    "Video Production",
    "Digital Marketing",
    "Web Design & Development"
]

const Home = () => {
    const [activeWorksMenuIndex, setActiveWorksMenuIndex] = useState(0);
    const [worksMenuData, setWorksMenuData] = useState("All");

    let companylist = clients.filter((currentObject, index) => {
        return clients.findIndex(client => client.clientName === currentObject.clientName) === index
    });

    const photographyClients = clients.filter(client => client.projectType === "Photography");
    const videoClients = clients.filter(client => client.projectType === "Video Production");
    const digitalClients = clients.filter(client => client.projectType === "Digital Marketing");
    const webClients = clients.filter(client => client.projectType === "Web Design & Development");

  return (
    <div className='home_wrapper'>
        <Navigation />

        {/* Hero Section */}
        <div className='home_hero_wrapper'>
            <div className='home_hero_sectionone'>
                <h1>
                    We Are a <span className='word_emphasy_v1' >Creative</span> <br/>
                    Digital Agency
                </h1>
            </div>

            {/* <div className='divider_horizontal_v1' /> */}

            <div className='home_hero_sectiontwo'>
                <p>
                    We specialize in <span className='word_emphasy_v1'>Digital Innovation</span> for 
                    your business and make a positive impact by combining the power od strategy, 
                    creativity and technology
                </p>
            </div>
        </div>

        {/* Showreel & Client Logos */}
        <div className='home_sectiontwo_wrapper'>
            <div className='home_sctiontwo_showreel'>
                <iframe 
                    src="https://www.youtube.com/embed/Vy9OvZEXcZg" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                ></iframe>
            </div>

            <div className='home_sectiontwo_logos'>
                {
                    companylist.map((client, index) => <img src={client.logo} alt={client.clientName} key={index} />)
                }
            </div>
        </div>

        {/* About Us */}
        <div className='about_wrapper'>
            <div className='about_img'>
                <img src='https://res.cloudinary.com/emacon-production/image/upload/v1686514699/Emacon%20Production/WhatsApp_Image_2023-05-18_at_08.01.12_aelox2.jpg' alt='Emacon Production' />
            </div>

            <div className='about_content'>
                <h3>ABOUT US</h3>
                <h2>Why You Should Choose Emacon</h2>
                <p>
                    We set out to create an agency with the goal of resolving tomorrow's business issues, and that calls for a different business model.
                    We don't work as a tech-focused creative agency or a development business that abandons you when it's time to launch a product. 
                    <br /> <br />
                    To provide completely integrated digital solutions, we start with the human experience and add layers of creativity, strategy, technology, and marketing.
                    DIG is positioned to assist you in achieving your goals thanks to this distinctive collection of competences that sets us different from other agencies.
                </p>
                <Button Placeholder="Let's Talk" type="route" targetLink="/contact" />
            </div>
        </div>

        {/* Services */}
        <div className='home_services_wrapper' >
            <div className='home_services_sectionOne'>
                <h1>
                    What <span className='word_emphasy_v1'>Services</span> <br />
                    We're Offering
                </h1>
                <p>
                    We provide services that can assist businesses in improving their online visibility 
                    and reputation, expanding market reach, and increasing turn over through innovative 
                    strategies. The following are the services we offer:
                </p>
            </div>

            <div className='home_services_sectionTwo' >
                {
                    services.map((service, index) => (
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
        </div>

        {/* How We Work Section */}
        <div className='how_we_work_wrapper'>
            <div className='how_we_work_sectionOne'>
                <div>
                    <h3>HERE ARE THE STEPS</h3>
                    <h1>
                        How do We <span className='word_emphasy'>Work?</span> <br />
                    </h1>
                </div>
                
                <p>
                    We have a structured work process to ensure that the projects handled can be completed properly
                    and according to your needs. Here are some common stages in the work process that we offer.
                </p>
            </div>

            <div className='how_we_work_sectionTwo'>
                {
                    workstages.map((stage, index) => (
                        <div className='stage_wrapper' key={index}>
                            <div className='stage_icon_wrapper'>
                                <i class={stage.icon}></i>
                            </div>
                            <h2>{stage.name}</h2>
                            <p>
                                {stage.description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>

        {/* Works */}
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
                    worksMenuData === "All" ? (
                        <React.Fragment>
                            {
                                clients.map((client, index) => (
                                    <React.Fragment>
                                        {
                                            index < 4 ? <ProjectCard key={index} data={client} /> : null
                                        }
                                        
                                    </React.Fragment>))
                            }
                            
                        </React.Fragment>) : <React.Fragment /> &&

                        worksMenuData === "Photography" ? (
                            <React.Fragment>
                                {
                                    photographyClients.map((client, index) => (
                                        <React.Fragment>
                                            {
                                                index < 4 ? <ProjectCard key={index} data={client} /> : null
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
                                                index < 4 ? <ProjectCard key={index} data={client} /> : null
                                            }
                                            
                                        </React.Fragment>))
                                }
                                
                            </React.Fragment>) : <React.Fragment /> &&
                        
                        worksMenuData === "Digital Marketing" ? (
                            <React.Fragment>
                                {
                                    digitalClients.map((client, index) => (
                                        <React.Fragment>
                                            {
                                                index < 4 ? <ProjectCard key={index} data={client} /> : null
                                            }
                                            
                                        </React.Fragment>))
                                }
                                
                            </React.Fragment>) : <React.Fragment /> &&

                        worksMenuData === "Digital Marketing" ? (
                            <React.Fragment>
                                {
                                    digitalClients.map((client, index) => (
                                        <React.Fragment>
                                            {
                                                index < 4 ? <ProjectCard key={index} data={client} /> : null
                                            }
                                            
                                        </React.Fragment>))
                                }
                                
                            </React.Fragment>) : <React.Fragment /> &&
                        
                        worksMenuData === "Web Design & Development" ? (
                            <React.Fragment>
                                {
                                    webClients.map((client, index) => (
                                        <React.Fragment>
                                            {
                                                index < 4 ? <ProjectCard key={index} data={client} /> : null
                                            }
                                            
                                        </React.Fragment>))
                                }
                                
                            </React.Fragment>) : <React.Fragment />
                }
                
            </div>

            <div className='works_learnmore' >
                <Button Placeholder="Learn More" type="route" targetLink="/work" /> 
            </div>

            {/* Reviews */}

            {/* Blog */}
        </div>
    </div>
  )
}

export default Home