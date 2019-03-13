import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

var po = document.createElement('script')
po.type = 'text/javascript'
po.async = true
po.src =
  'https://www.skiddle.com/infofeed/ticketpage.php?ilid=13490591;type=embedded'
var s = document.getElementsByTagName('script')[0]
s.parentNode.insertBefore(po, s)

window.fnames = new Array()
window.ftypes = new Array()
window.fnames[0] = 'EMAIL'
window.ftypes[0] = 'email'
window.fnames[1] = 'FNAME'
window.ftypes[1] = 'text'
window.fnames[2] = 'LNAME'
window.ftypes[2] = 'text'
window.fnames[3] = 'ADDRESS'
window.ftypes[3] = 'address'
window.fnames[4] = 'PHONE'
window.ftypes[4] = 'phone'
window.fnames[5] = 'BIRTHDAY'
window.ftypes[5] = 'birthday'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      })
    }, 350)
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
      })
    }, 350)
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle()
      }
    }
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <div
          className={`body ${this.state.loading} ${
            this.state.isArticleVisible ? 'is-article-visible' : ''
          }`}
        >
          <div id="wrapper">
            <div id="ticketbox_ph_13490591" style={{ width: '100%' }}>
              <p>
                To buy tickets for this event please visit our events page:{' '}
                <a href="https://www.skiddle.com/whats-on/cyprus/The-Dock/Plug-Nation-Festival/13490591/">
                  <strong>Plug Nation Festival tickets from Skiddle</strong>
                </a>
                .
              </p>
            </div>

            <div id="mc_embed_signup">
              <form
                action="https://plugnationfestival.us20.list-manage.com/subscribe/post?u=8564c716dccc4c6cb3180916d&amp;id=8fdd7777fd"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                novalidate
              >
                <div id="mc_embed_signup_scroll">
                  <h2>Subscribe to our mailing list</h2>
                  <div className="indicates-required">
                    <span className="asterisk">*</span> indicates required
                  </div>
                  <div className="mc-field-group">
                    <label for="mce-EMAIL">
                      Email Address <span className="asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      name="EMAIL"
                      className="required email"
                      id="mce-EMAIL"
                    />
                  </div>
                  <div id="mce-responses" className="clear">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: 'none' }}
                    />
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: 'none' }}
                    />
                  </div>
                  <div
                    style={{ position: 'absolute', left: '-5000px' }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_8564c716dccc4c6cb3180916d_8fdd7777fd"
                      tabindex="-1"
                    />
                  </div>
                  <div className="clear">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                    />
                  </div>
                </div>
              </form>
            </div>

            <Header
              onOpenArticle={this.handleOpenArticle}
              timeout={this.state.timeout}
            />

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
          <div id="bg" />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
