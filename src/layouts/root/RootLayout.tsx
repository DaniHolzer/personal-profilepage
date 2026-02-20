import { HeaderLayout } from "src/layouts/header/HeaderLayout";
import { FooterLayout } from "src/layouts/footer/FooterLayout";

//-----------------------------------------------------------------------------
// Root Layout - Component

export function RootLayout({ children }: { children: React.ReactNode }) {

  return(
    <>
      <HeaderLayout/>
      <main className="pt-[5.6rem]">{ children }</main>
      <FooterLayout/>
    </>
  );
}
