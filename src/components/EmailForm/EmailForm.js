import React from 'react'
import { IoMdArrowForward } from "react-icons/io";
const EmailForm = ({className}) => {
    return (
        <div className={`emailform ${className}`}>
            <input type="email" placeholder="Subscribe to our newsletter"></input>
            <button type="submit"><IoMdArrowForward size="20px" /></button>
        </div>
    )
}

export default EmailForm
