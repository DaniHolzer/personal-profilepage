import { HeroContainer } from "components/container/variants/hero-container/HeroContainer.tsx";
import { AboutContainer } from "components/container/variants/about-container/About";
import { MainNavigation } from "components/navigations/variants/main-navigation/MainNavigation";

//-------------------------------------------------------------------------------------------------
// Home Page Component

export default function Home() {
  return (
    <>
{/*       <MainNavigation debug /> */}
      <HeroContainer debug />
      <AboutContainer debug />
    </>
  );
}
