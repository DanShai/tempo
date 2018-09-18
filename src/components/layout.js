import React from 'react'
import PropTypes from 'prop-types'
import '../assets/css/styles.css'
import Banner from './Banner'
import Footer from './Footer'

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <Banner />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
