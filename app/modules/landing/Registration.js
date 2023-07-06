import { Box, Flex, TapArea, Image, Mask } from "gestalt";
import Title from "../../components/Title";

const contests = [
  {
    src: "https://docs.google.com/uc?export=download&id=1g5jx8VZ7H0MWnFX-usH-JR6ViYn3uP3d",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=1jFSU4ESDmXmi9Rgi_5E9NjLn4HvhRyBH",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=171blojuM0NLj6kCVPqJhw3zRAg6bz_Uu",
  },
  {
    src: "https://docs.google.com/uc?export=download&id=1bSroIcFhbnWxRoQLMXCsN91v9hYLU_ry",
  },
];

const Registration = () => {
  return (
    <Box padding={12}>
      <Title text="ТЭМЦЭЭНИЙ БҮРТГЭЛ" />
      <Flex gap={4} justifyContent="center" wrap>
        {contests.map((contest, i) => (
          <Box column={12} key={i} color="brand">
            <TapArea onTap={() => {}}>
              <img src={contest.src} style={{ width: "100%" }} />
            </TapArea>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Registration;
