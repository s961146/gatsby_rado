import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) =>(
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div>
            <nav>
                <ul>
                    <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Intro</a></li>
                    <li><a href="javascript:;" onClick={() => {props.onOpenArticle('school')}}>School</a></li>
                    <li><a href="javascript:;" onClick={() => {props.onOpenArticle('resume')}}>Resume</a></li>
                    <li><a href="javascript:;" onClick={() => {props.onOpenArticle('projects')}}>Projects</a></li>
                    <li><a href="javascript:;" onClick={() => {props.onOpenArticle('dogs')}}>Dogs</a></li>
                </ul>
            </nav>
        </div>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header