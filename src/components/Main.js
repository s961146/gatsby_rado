import React from 'react'
import PropTypes from 'prop-types'

class Main extends React.Component {
    render(){
        let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

        return(
            <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
                <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                    <h2 className="major">About</h2>
                    <p>about Rado</p>
                    {close}
                </article>

                <article id="school" className={`${this.props.article === 'school' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                    <h2 className="major">School</h2>
                   <p>School article</p>
                   {close}
                </article>

                <article id="resume" className={`${this.props.article === 'resume' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                    <h2 className="major">Resume</h2>
                    <p>Resume</p>
                    {close}
                </article>

                <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                    <h2 className="major">Projects</h2>
                    <p>projects</p>
                    {close}
                </article>

                <article id="dogs" className={`${this.props.article === 'dogs' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                    <h2 className="major">Dogs</h2>
                    <p>My dogs</p>
                    {close}
                </article>



            </div>
        )
    }
}


Main.propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout: PropTypes.bool,
    setWrapperRef: PropTypes.func.isRequired,
}

export default Main