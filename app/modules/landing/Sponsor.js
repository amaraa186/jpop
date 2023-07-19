import { Box, Flex } from "gestalt";
import Title from "../../components/Title";
import { useMediaQuery } from "react-responsive";

const Sponsor = () => {
  const sponsors = [
    {
      tier: 1,
      logos: [
        {
          src: "https://docs.google.com/uc?export=download&id=1HgKwU3mCco-iuP-QzFSjviOmTiBa76xO",
        },
        {
          src: "https://docs.google.com/uc?export=download&id=1aNyZGBspZ-vMEkjAEQZitenX_NZn71uS",
        },
        {
          src: "https://docs.google.com/uc?export=download&id=18kLGdhRJEXDJmtw9m2bTh5-j04pY4yqK",
        },
        {
          src: "https://docs.google.com/uc?export=download&id=16LzH3c1DN_RdlPk6Us6iEXEX7fK8Jh4P",
        },
      ],
    },
    {
      tier: 2,
      logos: [
        {
          src: "https://docs.google.com/uc?export=download&id=1ZyiDjWuJ2B1pT932vv32E-zbMFLJgDzJ",
        },
        {
          src: "https://docs.google.com/uc?export=download&id=1GIiiTDddAlKHDIex3lwjT6U0M4atjMsn",
        },
        {
          src: "https://docs.google.com/uc?export=download&id=1HSdtbx5bY5CMNoXSwhlpAltYa02ur-FA",
        },
        {
          src: "https://docs.google.com/uc?export=download&id=1f-E1BJcttDodWEFIEw0Op4P60b54h8Is",
        },
      ],
    },
    {
      tier: 3,
      logos: [
        {
          src: "https://docs.google.com/uc?export=download&id=1Dv96NXPHFHBgvryZfyYnHB6fdZAdgu5P",
        },
        {
          src: "https://docs.google.com/uc?export=download&id=1f9JoJP6tFNS3-rpAvFbNUsVGeNajo5MC",
        },
        {
          src: "https://docs.google.com/uc?export=download&id=1SAAv4MdleZxmmDjLCMz6MNrZ1WlRUEwW",
        },
        {
          src: "https://docs.google.com/uc?export=download&id=1d_7UULZZj4SE3ALdSPgSGiCzbQGIPCXS",
        },
      ],
    },
    {
      tier: 4,
      logos: [
        {
          src: "https://docs.google.com/uc?export=download&id=13rTsSBlnygO4Layxy2Wgx4RMkEDtZuTZ",
        },
        {
          src: "https://docs.google.com/uc?export=download&id=1qb8Ym-BLkvMlx08BaZOANV5XWdeq9OTs",
        },
        {
          src: "https://docs.google.com/uc?export=download&id=1j6qVmA0K8bVdaj6P7HUM0_-Aubk-DnN_",
        },
        {
          src: "https://docs.google.com/uc?export=download&id=1i4hKdV06t0n-f7c6XlCiKaSZ1YWyvZCz",
        },
      ],
    },
    {
      tier: 5,
      logos: [
        {
          src: "https://docs.google.com/uc?export=download&id=1qH8uqcLvPBakluJJgN7yFwK9ecSqod5b",
        },
        {
          src: "https://docs.google.com/uc?export=download&id=1VtnA_u4Cmsbl4YpHh7i5oLjLty8pZqa6",
        },
        {
          src: "https://docs.google.com/uc?export=download&id=1p3XOzMyW_8davmWr6Grhlw9ENfKxC_L8",
        },
        {
          src: "https://docs.google.com/uc?export=download&id=14Z-Ge1PZMXc2D15QMgci50_YSb4Y86OG",
        },
      ],
    },
    {
      tier: 6,
      logos: [
        {
          src: "https://docs.google.com/uc?export=download&id=1kmRlEyxVsFkKik48pDOvC7oGtRNLxhMt",
        },
        {
          src: "https://docs.google.com/uc?export=download&id=17jhiFvLBikPTAJeRIS9FMyAjequIXTdj",
        },
        {
          src: "https://docs.google.com/uc?export=download&id=1yZyuCIdHYinB3xFRgL9lqCtuAIyDUCq4",
        },
        {
          src: "https://docs.google.com/uc?export=download&id=1WJG20aizUVD88f8_5aagU3GaeZXSEUq8",
        },
      ],
    },
    {
      tier: 7,
      logos: [
        {
          src: "https://docs.google.com/uc?export=download&id=1hvOTIzTm_cOXSoFnoxK0i5xOjW5C23Kh",
        },
        {
          src: "https://docs.google.com/uc?export=download&id=1LFN0vWwuulv6JxyfNlEupnpwhCGzuSUb",
        },
        {
          src: "https://docs.google.com/uc?export=download&id=1m4xFDXmgE1mfCBrd5khOO-MuZ5Pc_RxY",
        },
        {
          src: "https://docs.google.com/uc?export=download&id=1ZSY8V1WVRXWI52VH6oHXTyWjRcMH2cSO",
        },
      ],
    },
  ];

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Box padding={12}>
      <Title text="ДЭМЖИГЧ БАЙГУУЛЛАГУУД" />
      <Box display="flex" direction="column">
        {sponsors.map((sponsor, index) => (
          <Box key={index} marginTop={4}>
            <Flex gap={2} alignItems="center" justifyContent="around">
              {sponsor.logos.map((logo, i) => (
                <Box key={i}>
                  <img src={logo.src} style={{ width: "100%" }} />
                </Box>
              ))}
            </Flex>
            {index < sponsors.length - 1 && (
              <Box marginTop={4}>
                <div
                  style={{
                    height: isTabletOrMobile ? 5 : 10,
                    width: "100%",
                    background: "#F271AC",
                  }}
                />
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Sponsor;
