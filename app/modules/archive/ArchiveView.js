import { useState, useEffect } from "react";
import { Box, Flex, Mask, Image, Column } from "gestalt";
import { withRouter } from "next/router";
import _ from "lodash";
import Header from "@/app/modules/landing/Header";
import Cover from "@/app/modules/landing/Cover";

const events = [
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1J3Aw-PUfCuxX8FyYg1hvrEKrRJNzGVza",
    title: "JPOP - 2012 Өдөрлөг",
    slug: "2012",
    photos: [],
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1s6xJ3luz-zzZ8a7vjp6OFNpiQHSfjh0O",
    title: "JPOP - 2013 Өдөрлөг",
    slug: "2013",
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1YFgO5XHVZfSjiFrIEmHImX047ylmY90q",
    title: "JPOP - 2014 Өдөрлөг",
    slug: "2014",
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=181annn56_gDU1GoVK3K7CcDgkcUPoDCT",
    title: "JPOP - 2015 Өдөрлөг",
    slug: "2015",
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1y-gFs62Q4Nf_Q4Pix7X_u7InBiW7kyTq",
    title: "JPOP - 2016 Өдөрлөг",
    slug: "2016",
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1-2-0I_LikxK_GFE3nay4lN8SHO8P6FQD",
    title: "JPOP - 2017 Зуны өдөрлөг",
    slug: "2017su",
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1xqLhWK6sNc0Gg7KRG47tt_74Q-c2WH3X",
    title: "JPOP - 2017 Намарын өдөрлөг",
    slug: "2017au",
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=15NA25-66-KGDLSYzTEozpRNBKJJakX77",
    title: "JPOP - 2018 Өдөрлөг",
    slug: "2018",
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=16Hu7VPYIAdgjNCVOCB_LEl7eO3D-j3XW",
    title: "JPOP - 2019 Хаврын өдөрлөг",
    slug: "2019sp",
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1qClhF2nVaKIwpN_g_rguzrKkOtSN6FtU",

    title: "JPOP - 2019 Зуны өдөрлөг",
    slug: "2019su",
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1-649srj56wr09MlT7zGOKVro-dq4SJ03",

    title: "JPOP - 2020 Өдөрлөг",
    slug: "2020",
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1NRvayBxdtGdy1FOLuuD69VWv-pAQIb4b",

    title: "JPOP - 2022 Хаврын өдөрлөг",
    slug: "2022sp",
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1_iaZjZtWaWqHeilltREnthzwBW8RLVnw",
    title: "JPOP - 2022 Зуны өдөрлөг",
    slug: "2022su",
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1QNbcHGQWpmJu0gIU2oEv4Qz2a02r9-ti",

    title: "JPOP - 2023 Хаврын өдөрлөг",
    slug: "2023sp",
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1cSAjc4EARaSjBqC51J-b8ET3UZ9x3KJh",
    title: "JPOP - 2023 Зуны өдөрлөг",
    slug: "2023su",
  },
];

const ArchiveView = (props) => {
  const [event, setEvent] = useState({});

  useEffect(() => {
    setEvent(events.find((eve) => eve.slug == props.router.query.archiveId));
    console.log(events.find((eve) => eve.slug == props.router.query.archiveId));
  }, []);

  return (
    <Box color="light">
      <Header />
      <Cover />
      {!_.isEmpty(event) && (
        <Box>
          <Box padding={12} display="flex" justifyContent="center">
            <img src={event.cover} width="40%" />
          </Box>
          <Flex wrap justifyContent="center" gap={4}>
            {event.photos.map((photo, i) => (
              <Box key={i}>
                <img src={photo.url} width="100%" />
              </Box>
            ))}
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default withRouter(ArchiveView);
