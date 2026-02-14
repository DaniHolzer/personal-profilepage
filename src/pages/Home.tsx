import { HeroContainer } from "components/container/variants/hero-container/HeroContainer.tsx";
import { AboutContainer } from "components/container/variants/about-container/About";

//-------------------------------------------------------------------------------------------------
// Home Page Component

export default function Home() {
  return (
    <>
      <HeroContainer debug />
      <AboutContainer debug />
    </>
  );
}
