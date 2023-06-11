import React from 'react'
import './home.css'
import Navigation from '../../components/navigation/Navigation'
import clients from '../../assets/Clients.json'

const Home = () => {
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
                    clients.map((client, index) => <img src={client.logo} alt={client.clientName} key={index} />)
                }
            </div>
        </div>
    </div>
  )
}

export default Home