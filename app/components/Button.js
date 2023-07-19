import { Box, Link, Text } from "gestalt";
import { useMediaQuery } from "react-responsive";

const Button = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const { link, text } = props;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      paddingY={3}
    >
      <Box width={40} position="absolute" left marginStart={7} top>
        <img
          src="https://docs.google.com/uc?export=download&id=1SnsdZmk9hCM2w2vv4_fs6daLkrtIk06n"
          style={{
            width: "100%",
          }}
        />
      </Box>
      <div
        style={{
          backgroundColor: "#F270AC",
          borderRadius: 8,
        }}
      >
        <Link href={link} underline="none">
          <Box paddingY={3} paddingX={4}>
            <Text color="light" weight="bold" size="200">
              {text.toUpperCase()}
            </Text>
          </Box>
        </Link>
      </div>
      <Box width={40} position="absolute" right top marginEnd={7}>
        <img
          src="https://docs.google.com/uc?export=download&id=1SnsdZmk9hCM2w2vv4_fs6daLkrtIk06n"
          style={{
            width: "100%",
            transform: "rotate(90deg)",
          }}
        />
      </Box>
    </Box>
  );
};

export default Button;
