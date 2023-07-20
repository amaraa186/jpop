import { Box, Mask, Flex, Column, Image } from "gestalt";
import Title from "@/app/components/Title";
import Button from "@/app/components/Button";

const events = [
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1J3Aw-PUfCuxX8FyYg1hvrEKrRJNzGVza",
    title: "JPOP - 2012 Өдөрлөг",
    slug: "2012",
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

const Events = () => {
  return (
    <Box paddingX={12} paddingY={10}>
      <Title text="АРГА ХЭМЖЭЭНҮҮД" />
      <Box height={20} />
      <Flex
        justifyContent="center"
        gap={6}
        alignItems="center"
        width="100%"
        wrap
      >
        {events.map((event, i) => (
          <Flex direction="column" alignItems="center" gap={2}>
            <Mask width={700}>
              <Image src={event.cover} naturalHeight={1} naturalWidth={2} />
            </Mask>
            <Button link={"/archive/" + event.slug} text={event.title} />
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Events;
