import { Box, Heading, Text, Icon, Flex } from "gestalt";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Box
      smColumn={12}
      mdColumn={12}
      lgColumn={6}
      column={12}
      position="relative"
    >
      <div
        style={{
          backgroundColor: "#f271ac",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box paddingY={12} smColumn={10} mdColumn={10} lgColumn={8} column={10}>
          <Heading color="light" size={isTabletOrMobile ? "400" : "600"}>
            Бидэнтэй холбогдох
          </Heading>
          <Box opacity={0.7}>
            <Text color="light" size={isTabletOrMobile ? "200" : "400"}>
              Биднээс асуух зүйл байна уу? Бид танд дуртайяа хариулах болно.
            </Text>
          </Box>
          <Box height={30} />
          <Flex gap={2} alignItems="center">
            <Icon icon="phone" color="light" />
            <Text
              color="light"
              weight="bold"
              size={isTabletOrMobile ? "200" : "400"}
            >
              +976 8866 1138
            </Text>
          </Flex>
          <Box height={30} />
          <Flex gap={2} alignItems="center">
            <Icon icon="envelope" color="light" />
            <Text
              color="light"
              weight="bold"
              size={isTabletOrMobile ? "200" : "400"}
            >
              association@jpop.mn
            </Text>
          </Flex>
        </Box>
        <Box
          position="absolute"
          bottom
          right
          width={isTabletOrMobile ? 120 : 200}
        >
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
  );
};

export default Contact;
