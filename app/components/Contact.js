import { Box, Heading, Text, Icon } from "gestalt";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #f271ac;
`;

const Contact = () => {
  return (
    <Box column={6}>
      <Wrapper>
        <Box padding={2}>
          <Heading color="light">Бидэнтэй холбогдох</Heading>
          <Box opacity={0.7}>
            <Text color="light" size="400">
              Биднээс асуух зүйл байна уу? Бид танд дуртайяа хариулах болно.
            </Text>
          </Box>
          <Text color="light">+976 8866 1138</Text>
          <Text color="light">association@jpop.mn</Text>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Contact;
