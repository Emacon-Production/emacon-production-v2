import React, { useState } from 'react'
import './home.css'
import Navigation from '../../components/navigation/Navigation'
import clients from '../../assets/Clients.json'
import Button from '../../components/button/Button'
import ServiceCard from '../../components/service-card/ServiceCard'
import services from '../../assets/Services.json'
import workstages from '../../assets/WorkStages.json'
import ProjectCard from '../../components/project-card/ProjectCard'
import testimonials from '../../assets/Testimonials.json'
import TestimonialCard from '../../components/testimonial-card/TestimonialCard'
// import insights from '../../assets/Insights.json'
// import BlogCard from '../../components/blog-card/BlogCard'
import Footer from '../../components/footer/Footer'
import { Helmet } from 'react-helmet-async'
import ContactForm from '../../components/contact-form/ContactForm'


// Works menu
const worksMenu = [
    "All",
    "Photography", 
    "Video Production",
    "Web Design & Development"
]

const Home = () => {
    // This helps navigate the works menu
    const [activeWorksMenuIndex, setActiveWorksMenuIndex] = useState(0);
    const [worksMenuData, setWorksMenuData] = useState("All");

    // This filters out duplicate clients
    let companylist = clients.filter((currentObject, index) => {
        return clients.findIndex(client => client.clientName === currentObject.clientName && client.logo !== "") === index
    });

    // This filters out only photography clients
    const photographyClients = clients.filter(client => client.projectType === "Photography");
    // This filters out only video clients
    const videoClients = clients.filter(client => client.projectType === "Video Production");
    // This filters out only digital marketing clients
    const digitalClients = clients.filter(client => client.projectType === "Digital Marketing");
    // This filters out only web clients
    const webClients = clients.filter(client => client.projectType === "Web Design & Development");

  return (
    <div className='home_wrapper'>
        <Helmet>
            <title>Home | Emacon Production</title>
            <meta 
            name='description' 
            content="We specialize in Digital Innovation for your business and make a positive impact by combining the power of strategy, creativity and technology. Our services include Photography, Video Production, Digital Marketing and Web Design & Development."
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
            <link rel='canonical' href='/' />
        </Helmet>

        <Navigation />

        {/* Hero Section */}
        <div className='home_hero_wrapper'>
            <div className='home_hero_sectionone'>
                <h1>
                    We are a <span className='word_emphasy_v1' >Creative Performance</span> Digital Agency
                </h1>
            </div>

            {/* <div className='divider_horizontal_v1' /> */}

            <div className='home_hero_sectiontwo'>
                <p>
                    We specialize in <span className='word_emphasy_v1'>Digital Innovation</span> for 
                    your business and make a positive impact by combining the power of strategy, 
                    creativity and technology
                </p>
            </div>
        </div>

        {/* Showreel & Client Logos */}
        <div className='home_sectiontwo_wrapper'>
            <div className='home_sctiontwo_showreel'>
                <iframe 
                    src="https://www.youtube.com/embed/mPayg3SPZhw?si=upD-QbatMGapAoB4" 
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
                <img src='https://res.cloudinary.com/emacon-production/image/upload/v1764681883/Emacon%20Production/WhatsApp_Image_2023-12-28_at_15.25.50_rm60zj.jpg' alt='Emacon Production' />
            </div>

            <div className='about_content'>
                <h3>ABOUT US</h3>
                <h2>Why Brands Choose to Work With Us</h2>
                <p>
                    At Emacon Production, we combine strategy, creativity, and performance to create content that truly works for your brand. We don’t just produce beautiful visuals, we craft intentional stories 
                    designed to drive engagement, strengthen brand presence, and convert audiences across digital platforms. <br/><br/> With a full-stack team of filmmakers, photographers, and digital strategists, we handle 
                    everything from concept to distribution, ensuring every asset aligns with your goals and delivers measurable impact. Rooted in African storytelling and powered by global production standards, 
                    we partner with brands that want consistent, high-quality content and a creative team that understands growth, not just aesthetics.
                </p>
                <Button Placeholder="Let's Talk" type="route" targetLink="/contact" />
            </div>
        </div>

        {/* Services */}
        <div className='home_services_wrapper' >
            <div className='home_services_sectionOne'>
                <h1>
                    What <span className='word_emphasy_v1'>Services</span> We're Offering
                </h1>
                <p>
                    We are a performance creative agency specializing in content strategy, media production, digital storytelling, social media and performance marketing. 
                    We help forward-thinking brands communicate their value through cinematic visuals, consistent content creation, and platform-specific strategies. <br/><br/> 
                    Our work spans lifestyle content, impactful education narratives, branded documentaries, social media management and creative design all executed with 
                    intentionality, cultural relevance, and a strong focus on performance.
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
                        How do We <span className='word_emphasy_v1'>Work?</span> <br />
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
                                            index < 3 ? <ProjectCard key={index} data={client} /> : null
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
                                                index < 3 ? <ProjectCard key={index} data={client} /> : null
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
                                                index < 3 ? <ProjectCard key={index} data={client} /> : null
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
                                                index < 3 ? <ProjectCard key={index} data={client} /> : null
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
                                                index < 3 ? <ProjectCard key={index} data={client} /> : null
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
                                                index < 3 ? <ProjectCard key={index} data={client} /> : null
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

        {/* Reviews/ Testimonials */}
        <div className='testimonials_wrapper'>
            <div className='testimonials_sectionOne'>
                <div>
                    <h3>TESTIMONIALS</h3>
                    <h1>
                        What People <span className='word_emphasy_v1'>Say</span> About Us
                    </h1>
                </div>
            </div>
            <div className='testimonials_sectionTwo'>
                {
                    testimonials.map((testimonial, index) => (
                        <React.Fragment>
                            {
                                index < 3 ? <TestimonialCard data={testimonial} key={index} /> : null
                            }
                        </React.Fragment>) )
                }
            </div>
        </div>

        <ContactForm />

        {/* Blog */}
        {/* <div className='insights_wrapper'>
            <div className='insights_sectionOne'>
                <h1>
                    Digital <span className='word_emphasy_v1'>Insights</span>
                </h1>
            </div>

            <div className='insights_data'>
                {
                    insights.map((insight, index) => (
                        <React.Fragment>
                            {
                                index < 3 ? <BlogCard key={index} data={insight} /> : null
                            }
                            
                        </React.Fragment>
                    ))
                }
            </div>

            <div className='works_learnmore' >
                <Button Placeholder="Learn More" type="route" targetLink="/work" /> 
            </div>
        </div> */}

        {/* Footer */}
        <Footer />
    </div>
  )
}

export default Home