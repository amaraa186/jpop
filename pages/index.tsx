'use client'
import { Box } from "gestalt"

import Header from "../app/modules/landing/Header"
import Footer from "../app/modules/landing/Footer"
import Sponsor from "../app/modules/landing/Sponsor"
import Cover from "../app/modules/landing/Cover"
import Registration from "../app/modules/landing/Registration"


const Home = () => {
  return (
    <Box color="light">
      <Header />
      <Cover />
        <Registration />
        <Sponsor />
        <Footer />
    </Box>
  )
}

export default Home