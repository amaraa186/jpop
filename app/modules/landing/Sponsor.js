import { useEffect, useState } from "react";
import { Box, Flex } from "gestalt";

const sponsors = [
  {
    src: "https://docs.google.com/uc?export=download&id=1hvOTIzTm_cOXSoFnoxK0i5xOjW5C23Kh",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=1HgKwU3mCco-iuP-QzFSjviOmTiBa76xO",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=1GIiiTDddAlKHDIex3lwjT6U0M4atjMsn",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=1p3XOzMyW_8davmWr6Grhlw9ENfKxC_L8",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=1HSdtbx5bY5CMNoXSwhlpAltYa02ur-FA",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=14Z-Ge1PZMXc2D15QMgci50_YSb4Y86OG",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=1qH8uqcLvPBakluJJgN7yFwK9ecSqod5b",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=1yZyuCIdHYinB3xFRgL9lqCtuAIyDUCq4",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=1m4xFDXmgE1mfCBrd5khOO-MuZ5Pc_RxY",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=1ZSY8V1WVRXWI52VH6oHXTyWjRcMH2cSO",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=1LFN0vWwuulv6JxyfNlEupnpwhCGzuSUb",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=1WJG20aizUVD88f8_5aagU3GaeZXSEUq8",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=1kmRlEyxVsFkKik48pDOvC7oGtRNLxhMt",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=1d_7UULZZj4SE3ALdSPgSGiCzbQGIPCXS",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=1f9JoJP6tFNS3-rpAvFbNUsVGeNajo5MC",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=1SAAv4MdleZxmmDjLCMz6MNrZ1WlRUEwW",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=1f-E1BJcttDodWEFIEw0Op4P60b54h8Is",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=1VtnA_u4Cmsbl4YpHh7i5oLjLty8pZqa6",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=1ZyiDjWuJ2B1pT932vv32E-zbMFLJgDzJ",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=1Dv96NXPHFHBgvryZfyYnHB6fdZAdgu5P",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=13rTsSBlnygO4Layxy2Wgx4RMkEDtZuTZ",
  },
];

const Sponsor = () => {
  return (
    <Box padding={12}>
      <Flex
        display="flex"
        wrap
        gap={8}
        justifyContent="around"
        alignItems="center"
      >
        {sponsors.map((sponsor, i) => (
          <Box key={i} padding={12}>
            <img src={sponsor.src} style={{ width: "100%" }} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Sponsor;
