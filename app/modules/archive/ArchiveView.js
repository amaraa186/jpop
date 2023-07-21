import { useState, useEffect } from "react";
import { Box, Flex } from "gestalt";
import { withRouter } from "next/router";
import _ from "lodash";
import Header from "@/app/modules/landing/Header";
import Cover from "@/app/modules/landing/Cover";
import Title from "@/app/components/Title";

const events = [
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1J3Aw-PUfCuxX8FyYg1hvrEKrRJNzGVza",
    title: "JPOP - 2012 Өдөрлөг",
    slug: "2012",
    photos: [
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/1013244_900237983370904_1035490728062231936_n_900237983370904.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/10439400_900238133370889_3836674933401522976_n_900238133370889.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/11009969_900236976704338_3134772116141895472_n_900236976704338.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/11015197_900238076704228_1016686652368863222_n_900238076704228.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/11015955_900238036704232_2214447577918702139_n_900238036704232.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/11036033_900237056704330_6898683603034412218_n_900237056704330.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/11049446_900237926704243_3261541523105092126_n_900237926704243.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/11128715_900237023371000_3088733279859445347_n_900237023371000.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/11148640_900237013371001_1483834794611943936_n_900237013371001.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/11156329_900238030037566_870859686735965462_n_900238030037566.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/11159480_900238100037559_3875974900870536663_n_900238100037559.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/11168590_900237920037577_1396513137565959354_n_900237920037577.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/11173368_900237986704237_432162633186002820_n_900237986704237.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/11179946_900237960037573_9151797555278581753_n_900237960037573.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/11182079_900238020037567_2360297982206792873_n_900238020037567.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/11182084_900236963371006_8271616491919008468_n_900236963371006.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/11182285_900238120037557_7867358548404544059_n_900238120037557.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/11188187_900237050037664_908999409176726641_n_900237050037664.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/11188205_900236966704339_5449228232843117061_n_900236966704339.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/11188330_900237923370910_6274871206882950260_n_900237923370910.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/11193404_900238096704226_7691661288618651583_n_900238096704226.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/19712_900238136704222_8751147474729544606_n_900238136704222.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2012/549296_900237010037668_4101920944560797484_n_900237010037668.jpg",
      },
    ],
    slogon: "JPOP 2012",
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1s6xJ3luz-zzZ8a7vjp6OFNpiQHSfjh0O",
    title: "JPOP - 2013 Өдөрлөг",
    slug: "2013",
    slogon: "JPOP 2013",
    photos: [
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/10409683_900225013372201_941057714040077875_n_900225013372201.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/10632833_900225340038835_6286672928978558046_n_900225340038835.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/10660249_900225730038796_299483044886689461_n_900225730038796.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/10995669_900225653372137_815616923527542306_n_900225653372137.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11011885_900225223372180_4535984659339900789_n_900225223372180.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11011885_900225316705504_3400107843766883362_n_900225316705504.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11022520_900225433372159_1219865398139490855_n_900225433372159.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11050660_900225123372190_4964376757602293638_n_900225123372190.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11051901_900225190038850_9045274359602267741_n_900225190038850.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11054310_900225756705460_3264840491430675042_n_900225756705460.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11065935_900225460038823_4744199892181514509_n_900225460038823.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11071142_900225203372182_5397883064760475291_n_900225203372182.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11081292_900226046705431_6070266378285781440_n_900226046705431.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11128637_900225546705481_4562777078060551786_n_900225546705481.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11146565_900225540038815_2629278643914897792_n_900225540038815.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11150754_900225713372131_3604233519265065903_n_900225713372131.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11168893_900225283372174_7185917744244781541_n_900225283372174.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11169872_900225966705439_2938401153935111606_n_900225966705439.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11173336_900224953372207_4490425745743087076_n_900224953372207.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11173405_900225490038820_141750079871788632_n_900225490038820.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11180328_900225246705511_3457657771262332495_n_900225246705511.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11182247_900225370038832_6904745055067054082_n_900225370038832.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11183358_900224943372208_6056625064736212932_n_900224943372208.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11193395_900225576705478_6914796269523050397_n_900225576705478.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11203127_900225000038869_5359102869509689600_n_900225000038869.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11205079_900225700038799_6619209474050778387_n_900225700038799.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11205977_900224980038871_8356527812387522605_n_900224980038871.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/11659_900224950038874_2637841553743161830_n_900224950038874.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2013/1975175_900225630038806_2478744065795629704_n_900225630038806.jpg",
      },
    ],
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1YFgO5XHVZfSjiFrIEmHImX047ylmY90q",
    title: "JPOP - 2014 Өдөрлөг",
    slug: "2014",
    slogon: "JPOP 2014",
    photos: [
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/10530776_900228546705181_1195481137480119083_n_900228546705181.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/10659314_900228803371822_1624839837129726037_n_900228803371822.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11018776_900228873371815_6342707047400305682_n_900228873371815.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11027997_900228866705149_1977131499578872092_n_900228866705149.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11052398_900228483371854_531780826637261022_n_900228483371854.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11066514_900228486705187_1966392285434546735_n_900228486705187.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11067668_900231896704846_8343322728040286691_n_900231896704846.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11114144_900231986704837_2849275157043606971_n_900231986704837.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11128640_900228580038511_3569513850651107694_n_900228580038511.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11128794_900232010038168_447353814473145018_n_900232010038168.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11150484_900232560038113_5474408673549206858_n_900232560038113.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11150526_900228700038499_463128136527217539_n_900228700038499.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11150581_900228926705143_1466086729450815182_n_900228926705143.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11150888_900232503371452_2842482268931068341_n_900232503371452.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11152335_900228623371840_4874536866141524913_n_900228623371840.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11159473_900228796705156_3496781538572242863_n_900228796705156.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11159509_900228793371823_1770764400213879219_n_900228793371823.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11160590_900228666705169_474693445040190056_n_900228666705169.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11169837_900228476705188_258780110523817886_n_900228476705188.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11169932_900231900038179_4399056963225690537_n_900231900038179.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11173361_900228770038492_8347188905882270985_n_900228770038492.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11181405_900232623371440_3281166301829575501_n_900232623371440.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11188487_900228640038505_8022104721024930825_n_900228640038505.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11193281_900231890038180_7454842267333199293_n_900231890038180.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11196361_900232630038106_8904440038161730362_n_900232630038106.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11200629_900228716705164_852979511222171772_n_900228716705164.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11202561_900232516704784_750240655544508817_n_900232516704784.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/11203055_900228870038482_713601453051770337_n_900228870038482.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/13718_900232496704786_5733825788798321607_n_900232496704786.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/14029_900228533371849_868004630482863370_n_900228533371849.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/20816_900228726705163_2326671979693606827_n_900228726705163.jpg",
      },
      {
        url: "https://storage.cloud.google.com/photos-jpop/Events/JPOP-2014/9437_900228553371847_2219848598237168604_n_900228553371847.jpg",
      },
    ],
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=181annn56_gDU1GoVK3K7CcDgkcUPoDCT",
    title: "JPOP - 2015 Өдөрлөг",
    slug: "2015",
    slogon: "JPOP 2015",
    photos: [],
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1y-gFs62Q4Nf_Q4Pix7X_u7InBiW7kyTq",
    title: "JPOP - 2016 Өдөрлөг",
    slug: "2016",
    slogon: "JPOP 2016",
    photos: [],
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1-2-0I_LikxK_GFE3nay4lN8SHO8P6FQD",
    title: "JPOP - 2017 Зуны өдөрлөг",
    slug: "2017su",
    slogon: "JPOP 2017 оны зуны",
    photos: [],
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1xqLhWK6sNc0Gg7KRG47tt_74Q-c2WH3X",
    title: "JPOP - 2017 Намрын өдөрлөг",
    slug: "2017au",
    slogon: "JPOP 2017 оны намрын",
    photos: [],
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=15NA25-66-KGDLSYzTEozpRNBKJJakX77",
    title: "JPOP - 2018 Өдөрлөг",
    slug: "2018",
    slogon: "JPOP 2018",
    photos: [],
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=16Hu7VPYIAdgjNCVOCB_LEl7eO3D-j3XW",
    title: "JPOP - 2019 Хаврын өдөрлөг",
    slug: "2019sp",
    slogon: "JPOP 2019 оны хаврын",
    photos: [],
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1qClhF2nVaKIwpN_g_rguzrKkOtSN6FtU",

    title: "JPOP - 2019 Зуны өдөрлөг",
    slug: "2019su",
    slogon: "JPOP 2019 оны зуны",
    photos: [],
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1-649srj56wr09MlT7zGOKVro-dq4SJ03",

    title: "JPOP - 2020 Өдөрлөг",
    slug: "2020",
    slogon: "JPOP 2020",
    photos: [],
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1NRvayBxdtGdy1FOLuuD69VWv-pAQIb4b",

    title: "JPOP - 2022 Хаврын өдөрлөг",
    slug: "2022sp",
    slogon: "JPOP 2022 оны хаврын",
    photos: [],
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1_iaZjZtWaWqHeilltREnthzwBW8RLVnw",
    title: "JPOP - 2022 Зуны өдөрлөг",
    slug: "2022su",
    slogon: "JPOP 2022 оны зуны",
    photos: [],
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1QNbcHGQWpmJu0gIU2oEv4Qz2a02r9-ti",

    title: "JPOP - 2023 Хаврын өдөрлөг",
    slug: "2023sp",
    slogon: "JPOP 2023 оны хаврын",
    photos: [],
  },
  {
    cover:
      "https://docs.google.com/uc?export=download&id=1cSAjc4EARaSjBqC51J-b8ET3UZ9x3KJh",
    title: "JPOP - 2023 Зуны өдөрлөг",
    slug: "2023su",
    slogon: "JPOP 2023 оны зуны",
    photos: [],
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
        <Box paddingX={2}>
          <Box padding={12} display="flex" justifyContent="center">
            <img src={event.cover} width="40%" />
          </Box>
          <Title text={event.slogon + " дурсамж дагуулсан гэрэл зургууд"} />
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
