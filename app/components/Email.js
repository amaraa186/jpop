import { useEffect, useState } from "react";
import { Box, Heading, TextField, TextArea } from "gestalt";

const Email = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  return (
    <Box smColumn={12} mdColumn={12} lgColumn={6}>
      <div
        style={{
          backgroundColor: "rgb(34,34,34,0.03)",
          height: "100%",
        }}
      >
        <Box paddingX={12}>
          <Box padding={12}>
            <Heading>Асуух зүйлээ доорх хэсэгт бичнэ үү</Heading>
            <Box height={10} />
            <TextField
              id="ner"
              label="Нэр"
              onChange={({ value }) => setName(value)}
            />
            <Box height={10} />
            <TextField
              id="email"
              label="Имэйл"
              onChange={({ value }) => setEmail(value)}
            />
            <Box height={10} />
            <TextArea
              id="description"
              label="Агуулга"
              onChange={({ value }) => setContent(value)}
            />
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Email;
