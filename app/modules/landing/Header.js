import {
  Box,
  TapArea,
  Text,
  Sticky,
  Flex,
  CompositeZIndex,
  FixedZIndex,
  Link,
} from "gestalt";
import { useMediaQuery } from "react-responsive";

const BOX_ZINDEX = new FixedZIndex(1);
const STICKY_ZINDEX = new CompositeZIndex([BOX_ZINDEX]);

const Header = () => {
  const taps = [
    { title: "Эхлэл", url: "/" },
    { title: "Бүртгэл", url: "/" },
    { title: "Хөтөлбөр", url: "/" },
    { title: "Өдөрлөг", url: "/" },
    { title: "Холбогдох", url: "/" },
  ];
  const icons = [
    {
      name: "ig",
      src: "https://docs.google.com/uc?export=download&id=1Q_iLuIrj2SMA9u4ccwTysW58g5aD-7u8",
      link: "",
    },
    {
      name: "fb",
      src: "https://docs.google.com/uc?export=download&id=1dDEiREmIb44ZKyn2Lv_2kZxGEWxjwzD5",
      link: "https://www.facebook.com/MongolianJapanesePopCultureLoversAssociation",
    },
    {
      name: "yt",
      src: "https://docs.google.com/uc?export=download&id=1pi0bjemoe1qAQgJPcnrC1VERJrzLuyXU",
      link: "https://www.youtube.com/@japanesepopcultureloversas2784",
    },
  ];
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  if (isTabletOrMobile) return;

  return (
    <Sticky zIndex={STICKY_ZINDEX} top={0}>
      <div
        style={{
          backgroundColor: "#f271ac",
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="between">
          <Box marginStart={5} width={100}>
            <img
              style={{ width: "100%" }}
              src="https://docs.google.com/uc?export=download&id=1BBtd-kShtbf0LjZhLbNmNTn85mLPuVym"
            />
          </Box>
          <Flex gap={8}>
            {taps.map((tap, i) => (
              <Link key={i} underline="none" href={tap.url}>
                <Box padding={1}>
                  <Text weight="bold" color="light" size="400">
                    {tap.title}
                  </Text>
                </Box>
              </Link>
            ))}
          </Flex>
          <Box marginEnd={5}>
            <Flex gap={4} justifyContent="center" alignItems="center">
              {icons.map((icon, i) => (
                <Link key={i} href={icon.link}>
                  <Box width={25}>
                    <img style={{ width: "100%" }} src={icon.src} />
                  </Box>
                </Link>
              ))}
            </Flex>
          </Box>
        </Box>
      </div>
    </Sticky>
  );
};

export default Header;
