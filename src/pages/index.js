import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Interet from '../components/interests'
import About from '../components/about'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Dan - Shai"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Interet />
        <About />
      </Layout>
    )
  }
}

export default HomeIndex
