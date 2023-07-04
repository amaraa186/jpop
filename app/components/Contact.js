import { Box, Heading, Text, Icon, Flex } from "gestalt";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #f271ac;
  height: 100%;
`;

const Contact = () => {
  return (
    <Box column={6} position="relative">
      <Wrapper>
        <Box padding={12}>
          <Heading color="light">Бидэнтэй холбогдох</Heading>
          <Box opacity={0.7}>
            <Text color="light" size="400">
              Биднээс асуух зүйл байна уу? Бид танд дуртайяа хариулах болно.
            </Text>
          </Box>
          <Box height={30} />
          <Flex gap={2} alignItems="center">
            <Icon icon="phone" color="light" />
            <Text color="light" weight="bold">
              +976 8866 1138
            </Text>
          </Flex>
          <Box height={30} />
          <Flex gap={2} alignItems="center">
            <Icon icon="envelope" color="light" />
            <Text color="light" weight="bold">
              association@jpop.mn
            </Text>
          </Flex>
        </Box>
        <Box position="absolute" bottom right width={200}>
          <img
            src="https://docs.google.com/uc?export=download&id=1SnsdZmk9hCM2w2vv4_fs6daLkrtIk06n"
            style={{
              width: "100%",
              transform: "rotate(90deg)",
            }}
          />
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Contact;
