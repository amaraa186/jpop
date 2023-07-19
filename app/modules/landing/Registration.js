import { Box, Flex, TapArea, Image, Mask } from "gestalt";
import Title from "../../components/Title";
import Button from "../../components/Button";

const contests = [
  {
    src: "https://docs.google.com/uc?export=download&id=1g5jx8VZ7H0MWnFX-usH-JR6ViYn3uP3d",
    link: "https://forms.gle/d69XxpHSawkVsHw88",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=1jFSU4ESDmXmi9Rgi_5E9NjLn4HvhRyBH",
    link: "https://forms.gle/S5dNHvs6xXNMUHdN6",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=171blojuM0NLj6kCVPqJhw3zRAg6bz_Uu",
    link: "https://forms.gle/dp187SrR3G5G6QVPA",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=1bSroIcFhbnWxRoQLMXCsN91v9hYLU_ry",
    link: "https://forms.gle/K4EcrzMjPV2wiFJH6",
  },
];

const Registration = () => {
  return (
    <Box paddingX={12} paddingY={10}>
      <Title text="ТЭМЦЭЭНИЙ БҮРТГЭЛ" />
      <Box height={20} />
      <Flex gap={4} justifyContent="center" wrap>
        {contests.map((contest, i) => (
          <Box display="flex" direction="column">
            <Box width={300} key={i}>
              <TapArea onTap={() => {}}>
                <img src={contest.src} style={{ width: "100%" }} />
              </TapArea>
            </Box>
            <Box height={10} />
            <Button link={contest.link} text="Тэмцээнд бүртгүүлэх" />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Registration;
