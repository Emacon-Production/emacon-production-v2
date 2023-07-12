import React, { useState } from 'react'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import clients from '../../assets/Clients.json'
import ProjectCard from '../../components/project-card/ProjectCard'
import { Helmet } from 'react-helmet-async'

// Works menu
const worksMenu = [
    "All",
    "Photography", 
    "Video Production",
    "Web Design & Development"
]

const Works = () => {
    // This helps navigate the works menu
    const [activeWorksMenuIndex, setActiveWorksMenuIndex] = useState(0);
    const [worksMenuData, setWorksMenuData] = useState("All");

    // This filters out only photography clients
    const photographyClients = clients.filter(client => client.projectType === "Photography");
    // This filters out only video clients
    const videoClients = clients.filter(client => client.projectType === "Video Production");
    // This filters out only digital marketing clients
    const digitalClients = clients.filter(client => client.projectType === "Digital Marketing");
    // This filters out only web clients
    const webClients = clients.filter(client => client.projectType === "Web Design & Development");

  return (
    <div>
        <Helmet>
            <title>Our Work | Emacon Production</title>
            <meta 
            name='description' 
            content="Our services include Photography, Video Production, Digital Marketing and Web Design & Development."
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
                                clients.map((client, index) => <ProjectCard key={index} data={client} />)
                            }
                            
                        </React.Fragment>) : <React.Fragment /> &&

                        worksMenuData === "Photography" ? (
                            <React.Fragment>
                                {
                                    photographyClients.map((client, index) => <ProjectCard key={index} data={client} />)
                                }
                                
                            </React.Fragment>) : <React.Fragment /> &&
                        
                        worksMenuData === "Video Production" ? (
                            <React.Fragment>
                                {
                                    videoClients.map((client, index) => <ProjectCard key={index} data={client} />)
                                }
                                
                            </React.Fragment>) : <React.Fragment /> &&
                        
                        worksMenuData === "Digital Marketing" ? (
                            <React.Fragment>
                                {
                                    digitalClients.map((client, index) => <ProjectCard key={index} data={client} />)
                                }
                                
                            </React.Fragment>) : <React.Fragment /> &&

                        worksMenuData === "Digital Marketing" ? (
                            <React.Fragment>
                                {
                                    digitalClients.map((client, index) => <ProjectCard key={index} data={client} />)
                                }
                                
                            </React.Fragment>) : <React.Fragment /> &&
                        
                        worksMenuData === "Web Design & Development" ? (
                            <React.Fragment>
                                {
                                    webClients.map((client, index) => <ProjectCard key={index} data={client} />)
                                }
                                
                            </React.Fragment>) : <React.Fragment />
                }
                
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Works