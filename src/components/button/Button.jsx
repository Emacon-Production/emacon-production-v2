import React from 'react'
import "./button.css"
import { Link } from 'react-router-dom'

const Button = ({ type, bgcolor, Placeholder, targetLink, handleForm }) => {
  return (
    <React.Fragment>
        {
            type === "route" ? (
                <Link to={targetLink} className={`button ${bgcolor === "secondary" ? "secondary" : "main"}`}>
                    <span>{Placeholder}</span>
                </Link>
            ) : (
                <button className={`button ${bgcolor === "secondary" ? "secondary" : "main"}`} onClick={handleForm}>
                    <span>{Placeholder}</span>
                </button>
            )
        }
    </React.Fragment>
  )
}

export default Button