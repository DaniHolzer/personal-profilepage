import { HomeMainStyles } from "./HomeMain.styles";
import { Button } from "../../components/button/root/Button";
import  skiingImage  from '../../assets/skiing.jpg';
import { SocialsBar } from "../socials/Socials";

//-------------------------------------------------------------------------------------------------
// Home Page Main Component

export function HomeMain() {
    return (
      <>
        <section className={ HomeMainStyles() }>
          <p className="w-full font-[400] text-[18px] text-center mb-[1rem]">Lorem ipsum dolor sit amet, consta adipiscing elit.</p>
          <Button >Lorem ipsum</Button>
          <img src={skiingImage} alt="Person skiing on slope." className="h-[18rem] w-[18rem] my-[6.5rem]" />
          <SocialsBar />
        </section>
      </>
    );
}



