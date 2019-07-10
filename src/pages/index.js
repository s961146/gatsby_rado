import React from "react"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Layout from '../components/layout'
import Main from '../components/Main'

class IndexPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isArticleVisible: false,
            timeout: false,
            articleTimeout: false,
            article: '',
            loading: 'is-loading'
        }
    }


    componentDidMount () {
        this.timeoutId = setTimeout(()=>{
            this.setState({loading:''})
        },100)
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount () {
        if(this.timeoutId){
            clearTimeout(this.timeoutId)
        }
        document.removeEventListener('mousedown', this.handleClickOutside)
    }

    setWrapperRef = (node) => {
        this.wrapperRef = node
    }

    handleOpenArticle = (article) => {
        this.setState({
            isArticleVisible : !this.isArticleVisible,
            article
        })

        setTimeout(()=>{
            this.setState({
                timeout:!this.state.timeout,
            })
        },325)

        setTimeout(()=>{
            this.setState({
                articleTimeout:!this.state.articleTimeout,
            })
        },350)
    }

    handleCloseArticle = () =>{
        this.setState({
            articleTimeout: !this.state.articleTimeout
        })

        setTimeout(() => {
            this.setState({
              timeout: !this.state.timeout
            })
        }, 325)

        setTimeout(() => {
            this.setState({
              isArticleVisible: !this.state.isArticleVisible,
              article: ''
            })
        }, 350)
    }

    handleClickOutside = (event) =>{
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            if (this.state.isArticleVisible) {
              this.handleCloseArticle();
            }
        }
    }

    render(){
        return(
            <Layout location={this.props.location}>
                <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
                    <div id="wrapper">
                    <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />


                    <Main
                        isArticleVisible={this.state.isArticleVisible}
                        timeout={this.state.timeout}
                        articleTimeout={this.state.articleTimeout}
                        article={this.state.article}
                        onCloseArticle={this.handleCloseArticle}
                        setWrapperRef={this.setWrapperRef}
                    />

                    <Footer timeout={this.state.timeout} />

                    </div>   
                    <div id="bg"></div> 
                </div>
            </Layout>    
        )
    }
}


export default IndexPage