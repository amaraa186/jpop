import { Box, Link, Text } from "gestalt";
import { useMediaQuery } from "react-responsive";

const Button = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const { link, text } = props;

  return (
    <Box display="flex" justifyContent="center">
      <Box
        position="relative"
        width={isTabletOrMobile ? 250 : 300}
        paddingX={isTabletOrMobile ? 3 : 5}
        paddingY={3}
      >
        <div
          style={{
            backgroundColor: "#F270AC",
            borderRadius: 8,
          }}
        >
          <Box width={40} position="absolute" top left>
            <img
              src="https://docs.google.com/uc?export=download&id=1SnsdZmk9hCM2w2vv4_fs6daLkrtIk06n"
              style={{
                width: "100%",
              }}
            />
          </Box>
          <Link href={link} underline="none">
            <Box paddingY={4} paddingX={6}>
              <Text
                color="light"
                weight="bold"
                size={isTabletOrMobile ? 100 : 200}
                align="center"
              >
                {text.toUpperCase()}
              </Text>
            </Box>
          </Link>
          <Box width={40} position="absolute" top right>
            <img
              src="https://docs.google.com/uc?export=download&id=1SnsdZmk9hCM2w2vv4_fs6daLkrtIk06n"
              style={{
                width: "100%",
                transform: "rotate(90deg)",
              }}
            />
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default Button;
