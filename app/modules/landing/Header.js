import {
  Box,
  TapArea,
  Text,
  Sticky,
  Flex,
  CompositeZIndex,
  FixedZIndex,
} from "gestalt";
import styled from "styled-components";

const BOX_ZINDEX = new FixedZIndex(1);
const STICKY_ZINDEX = new CompositeZIndex([BOX_ZINDEX]);

const Wrapper = styled.div`
  background: #f271ac;
`;

const Header = () => {
  const taps = ["Эхлэл", "Бүртгэл", "Хөтөлбөр", "Өдөрлөг", "Холбогдох"];
  const icons = [
    {
      name: "ig",
      src: "https://docs.google.com/uc?export=download&id=1Q_iLuIrj2SMA9u4ccwTysW58g5aD-7u8",
    },
    {
      name: "fb",
      src: "https://docs.google.com/uc?export=download&id=1dDEiREmIb44ZKyn2Lv_2kZxGEWxjwzD5",
    },
    {
      name: "yt",
      src: "https://docs.google.com/uc?export=download&id=1pi0bjemoe1qAQgJPcnrC1VERJrzLuyXU",
    },
  ];

  return (
    <Sticky zIndex={STICKY_ZINDEX} top={0}>
      <Wrapper>
        <Box display="flex" alignItems="center" justifyContent="between">
          <Box marginStart={5}>
            <img
              style={{ width: "25%" }}
              src="https://docs.google.com/uc?export=download&id=1BBtd-kShtbf0LjZhLbNmNTn85mLPuVym"
            />
          </Box>
          <Flex gap={8}>
            {taps.map((tap, i) => (
              <TapArea key={i}>
                <Box padding={1}>
                  <Text weight="bold" color="light" size="400">
                    {tap}
                  </Text>
                </Box>
              </TapArea>
            ))}
          </Flex>
          <Box marginEnd={5}>
            <Flex gap={4} justifyContent="center" alignItems="center">
              {icons.map((icon, i) => (
                <TapArea key={i}>
                  <Box width={30}>
                    <img style={{ width: "100%" }} src={icon.src} />
                  </Box>
                </TapArea>
              ))}
            </Flex>
          </Box>
        </Box>
      </Wrapper>
    </Sticky>
  );
};

export default Header;
