import { Box } from "gestalt";
import Counter from "@/app/components/Counter";
import { useMediaQuery } from "react-responsive";

const CountDown = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Box display="flex" alignItems="center" direction="column">
      <h1
        style={{
          fontSize: isTabletOrMobile ? "18px" : "36px",
          color: "#F270AC",
          fontWeight: "bold",
          textShadow: "2px 1px #fff",
        }}
      >
        Тэмцээнүүдийн бүртгэл дуусахад
      </h1>
      <Counter />
    </Box>
  );
};

export default CountDown;
