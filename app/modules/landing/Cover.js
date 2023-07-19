import { Box } from "gestalt";
import Counter from "../../components/Counter";
import { useMediaQuery } from "react-responsive";

const Cover = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Box position="relative" display="flex" justifyContent="center">
      <Box width="100%">
        <img
          style={{ width: "100%" }}
          src="https://docs.google.com/uc?export=download&id=1-L1GOcb5wf7GNR5GwmH7r5kkuxkuSZ81"
        />
      </Box>
      <Box position="absolute" bottom>
        <Counter />
      </Box>
    </Box>
  );
};

export default Cover;
