'use client'
import Header from "./modules/landing/Header"
import Footer from "./modules/landing/Footer"
import Sponsor from "./modules/landing/Sponsor"
import { Box } from "gestalt"

export default function Home() {
  return (
    <Box color="light">
      <Header />
      <Sponsor />
      <Footer />
    </Box>
  )
}
