import { Box } from "gestalt";
import Email from "../../components/Email";
import Contact from "../../components/Contact";

const Footer = () => {
  return (
    <Box paddingY={12} display="flex">
      <Contact />
      <Email />
    </Box>
  );
};

export default Footer;
