import { Container } from "components/container/base/Container";
import { HeaderLayout } from "~/layouts/header/HeaderLayout";

//-------------------------------------------------------------------------------------------------
// Contact Page - Component

export default function Contact() {
  return (
    <>
      <Container as="section" className="h-auto p-3" debug>
        <HeaderLayout debug></HeaderLayout>
        <div className="pt-30">I'm Contact Page</div>
        <div className="">I'm Contact Page</div>
      </Container>
    </>
  );
}
