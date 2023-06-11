import React from 'react'
import './navigation.css'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import menuData from '../../assets/MenuData.json'
import Button from '../button/Button'

const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener('mousedown', (e) => {
        // user click toogle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)){
            content_ref.current.classList.toggle('active')
        } else {
            // user click outside toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target)){
                content_ref.current.classList.remove('active')
            }
        }
    })
}

const Navigation = () => {
    const menu_ref = useRef(null);
    const menu_toggle_ref = useRef(null);

    clickOutsideRef(menu_ref, menu_toggle_ref);

    const setActiveMenu = () => menu_ref.current.classList.add('active');
    const closeMenu = () => menu_ref.current.classList.remove('active');

  return (
    <div className='nav_wrapper'>
        <Link to="/" className='logo_wrapper'>
            <img src='https://res.cloudinary.com/emacon-production/image/upload/v1686491832/Emacon%20Production/Emacon_Logo_Gold_ipmblj.png' alt='Emacon Production' />
        </Link>

        <div className='navlink_wrapper'>
          {
            menuData.map((menu, index) => (
              <React.Fragment key={index}>
                {
                  menu.type === "button" ? <Button Placeholder={menu.name} type="route" targetLink={menu.target} /> : <Link to={menu.target} className='navlink'>{menu.name}</Link>
                }
              </React.Fragment>
            ))
          }
            {/* <Link to="/" className='navlink'>Home</Link>
            <Link to="/about" className='navlink'>What We Do</Link>
            <Link to="/services" className='navlink'>Our Services</Link>
            <Link to="/works" className='navlink'>Works</Link> */}
            
        </div>

        <div className='mobile_menu_wrapper'>
            <i 
              className="bx bx-menu menu__toggle"
              ref={menu_toggle_ref}
              onClick={setActiveMenu}
            />

            <div 
                className="theme-menu"
                ref={menu_ref}
            >
                <img src='https://res.cloudinary.com/emacon-production/image/upload/v1686491832/Emacon%20Production/Emacon_Logo_Gold_ipmblj.png' alt='Emacon Production' />

                <i 
                  className="bx bx-x theme-menu__close"
                  onClick={closeMenu}
                />
                      

                <div className='mobile_menu'>
                  {
                    menuData.map((menu, index) => (
                      <React.Fragment key={index}>
                        {
                          menu.type === "button" ? <Button Placeholder={menu.name} type="route" targetLink={menu.target} /> : <Link to={menu.target} className='navlink'>{menu.name}</Link>
                        }
                      </React.Fragment>
                    ))
                  }
                </div>
                
            </div>
        
        </div>
    </div>
  )
}

export default Navigation