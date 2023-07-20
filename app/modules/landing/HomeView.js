"use client";
import { Box } from "gestalt";
import { withRouter } from "next/router";

import Header from "@/app/modules/landing/Header";
import Footer from "@/app/modules/landing/Footer";
import Sponsor from "@/app/modules/landing/Sponsor";
import Cover from "@/app/modules/landing/Cover";
import Registration from "@/app/modules/landing/Registration";
import CountDown from "@/app/modules/landing/CountDown";
import Schedule from "@/app/modules/landing/Schedule";
import Events from "@/app/modules/landing/Events";

const HomeView = () => {
  return (
    <Box color="light">
      <Header />
      <Cover />
      <Registration />
      <CountDown />
      <Schedule />
      <Events />
      <Sponsor />
      <Footer />
    </Box>
  );
};

export default withRouter(HomeView);
