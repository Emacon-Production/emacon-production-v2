import React, { useState } from 'react'
import './footer.css'
import { ToastContainer, toast } from 'react-toastify'
import { CircularProgress } from '@mui/material'
import Button from '../button/Button'
import menuData from '../../assets/MenuData.json'
import { Link } from 'react-router-dom'
import sociasldata from '../../assets/Socials.json'

const renderLoading = () => (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CircularProgress color="inherit" />
    </div>
)


const Footer = () => {
    const [ loading, setLoading ] = useState(false);
    const [ email, setEmail ] = useState();
    const [ subscriptionTerms, setSubscriptionTerms ] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        setLoading(true);

        // if(email !== null || undefined && subscriptionTerms === true) {
        //     axios.post(`${ENDPOINT}/email-subscriptions/subscribe`, { "email": email })
        //         .then(res => {
        //             toast("Thank You for subscribing!", {
        //                 type: "success",
        //                 position: "top-right",
        //                 autoClose: "5000",
        //                 hideProgressBar: false,
        //                 closeOnClick: false,
        //                 pauseOnHover: false,
        //                 draggable: false,
        //                 progress: undefined,
        //             })
        //             setEmail('');
        //             setSubscriptionTerms(false)
        //             setLoading(false);
        //         })
        //         .catch(err => {
        //             toast(`Ooop! Something wrong happened. ${err}`, {
        //                 type: "error",
        //                 position: "top-right",
        //                 autoClose: "5000",
        //                 hideProgressBar: false,
        //                 closeOnClick: false,
        //                 pauseOnHover: false,
        //                 draggable: false,
        //                 progress: undefined,
        //             })
        //             setLoading(false);
        //         })
        // }
        toast("Thank You for subscribing!", {
            type: "success",
            position: "top-right",
            autoClose: "5000",
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        })
    }
  return (
    <div className='footer_wrapper'>
        <div className='footer_sectionOne'>
            {/* Subscription Form */}
            <div className='footer_emailSubscription_wrapper'>
                <div className='subscribe_form-title'>
                    <h1> STAY IN <span className='word_emphasy_v1'>TOUCH</span></h1>
                </div>

                <div className='subscribe_form-wrapper'>
                    <input type="email" placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)} className='' />

                    <div className='subscribe_form-wrapper_checkbox'>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onChange={() => setSubscriptionTerms(!subscriptionTerms)} />
                        <label for="vehicle1"> I hereby consent to the collection and use of my personal data by Emacon Production for the purpose of receiving news and updates on Emacon Production insights and services. </label><br></br>
                    </div>

                    {
                        email !== null && subscriptionTerms === true ? (
                            <Button Placeholder={ loading ? renderLoading() : "Subscribe" } type="route" onClick={handleSubscribe} />
                        ) : null
                    }

                    <ToastContainer />

                </div>
            </div>

            {/* Page Navigation & Social Icons Wrapper */}
            <div className='footer_links_socials'>
                {/* Page Navigation */}
                <div className='footer_menu'>
                    {
                        menuData.map((menu, index) => <Link to={menu.target} className='navlink'>{menu.name}</Link>)
                    }
                </div>

                {/* Social Icons */}
                <div className='footer_socials_wrapper'>
                    <img 
                        src='https://res.cloudinary.com/emacon-production/image/upload/v1686491832/Emacon%20Production/Emacon_Logo_Gold_ipmblj.png' 
                        alt='Emacon Production' 
                    />

                    <div className='footer_socials'>
                        {
                            sociasldata.map(social => (
                                <a key={social.socialsname} href={social.link} target='_blank' rel="noreferrer">
                                   <i className={social.socialsicon} ></i> 
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

        {/* Copyright */}
        <div className='copyright'>
            <p className="copyright_details">
                {`Copyright © ${new Date().getFullYear()} `}
                <a color="inherit" href="https://emaconproduction.com/" target="_blank" rel="noreferrer">
                    Emacon Production
                </a>{' '}
                
            </p>
        </div>
    </div>
  )
}

export default Footer