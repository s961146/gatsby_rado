import React from 'react'
import PropTypes from 'prop-types'
import { FaLinkedin, FaFacebookSquare, FaGithubSquare, FaGitlab } from 'react-icons/fa'
import "../styles/global.css"

const Footer = (props)=> (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p>
            <FaLinkedin />
            <a href="https://www.facebook.com/radoslav.danev.5/"> <FaFacebookSquare /> </a>
            <FaGithubSquare />
            <FaGitlab /> 
        </p>
        
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer