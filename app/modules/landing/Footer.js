import { Box } from "gestalt";
import Email from "../../components/Email";
import Contact from "../../components/Contact";

const Footer = () => {
  return (
    <Box display="flex" wrap id="contract">
      <Contact />
      <Email />
    </Box>
  );
};

export default Footer;
