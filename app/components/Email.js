import { useEffect, useState } from "react";
import { Box, Heading, TextField, TextArea } from "gestalt";
import { useMediaQuery } from "react-responsive";

const Email = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Box smColumn={12} mdColumn={12} lgColumn={6} column={12}>
      <div
        style={{
          backgroundColor: "rgb(34,34,34,0.03)",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box paddingY={12} column={10} smColumn={10} mdColumn={10} lgColumn={8}>
          <Heading size={isTabletOrMobile ? "400" : "600"}>
            Асуух зүйлээ доорх хэсэгт бичнэ үү
          </Heading>
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
      </div>
    </Box>
  );
};

export default Email;
