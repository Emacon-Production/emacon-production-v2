import React, { useState } from 'react'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import clients from '../../assets/Clients.json'
import ProjectCard from '../../components/project-card/ProjectCard'

// Works menu
const worksMenu = [
    "All",
    "Photography", 
    "Video Production",
    "Digital Marketing",
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