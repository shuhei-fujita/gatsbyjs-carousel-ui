import * as React from "react"
import Layout from "../components/layout"
import Carousel from 'react-elastic-carousel'

const IndexPage = () => (
  <Layout>
    <h1>Carousel UI</h1>
    <Carousel itemsToShow={1}>
      <p>1</p>
      <p>1</p>
      <p>1</p>
    </Carousel>
  </Layout>
)

export default IndexPage
