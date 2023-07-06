import { Box } from "gestalt";
import { useMediaQuery } from "react-responsive";

const Title = (props) => {
  const { text } = props;
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Box
      display="flex"
      justifyContent="between"
      alignItems="center"
      position="relative"
    >
      <Box width={isTabletOrMobile ? 50 : 180}>
        <img
          src="https://docs.google.com/uc?export=download&id=1SnsdZmk9hCM2w2vv4_fs6daLkrtIk06n"
          style={{
            width: "100%",
          }}
        />
      </Box>
      <Box
        position="absolute"
        marginBottom={isTabletOrMobile ? 0 : 8}
        marginStart={isTabletOrMobile ? 4 : 12}
      >
        <h1
          style={{
            fontSize: isTabletOrMobile ? "13px" : "35px",
            color: "#F270AC",
            fontWeight: "bold",
            textShadow: "2px 1px #fff",
          }}
        >
          {text}
        </h1>
      </Box>
      <Box width={isTabletOrMobile ? 50 : 180}>
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

export default Title;
