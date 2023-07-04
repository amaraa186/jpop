import { useEffect, useState } from "react";
import { Box, Heading, TextField, TextArea } from "gestalt";

const Email = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  return (
    <Box column={6} color="light">
      <Box paddingY={12} paddingX={8}>
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
  );
};

export default Email;
