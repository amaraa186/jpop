import dynamic from "next/dynamic";

const HomeViewContainer = dynamic(
  () => import("@/app/modules/landing/HomeView"),
  {
    ssr: false,
  }
);

function HomePage() {
  return <HomeViewContainer />;
}

export default HomePage;
