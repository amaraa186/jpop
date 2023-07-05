import { Box } from "gestalt";

const Title = (props) => {
  const { text } = props;

  return (
    <Box
      display="flex"
      justifyContent="between"
      alignItems="center"
      position="relative"
    >
      <Box width={180}>
        <img
          src="https://docs.google.com/uc?export=download&id=1SnsdZmk9hCM2w2vv4_fs6daLkrtIk06n"
          style={{
            width: "100%",
          }}
        />
      </Box>
      <Box position="absolute" marginBottom={8} marginStart={12}>
        <h1
          style={{
            fontSize: "35px",
            color: "#F270AC",
            fontWeight: "bold",
            textShadow: "2px 1px #fff",
          }}
        >
          {text}
        </h1>
      </Box>
      <Box width={180}>
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
