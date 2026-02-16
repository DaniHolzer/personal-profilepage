import { HeaderLayout } from "src/layouts/header/HeaderLayout";
import { FooterLayout } from "src/layouts/footer/FooterLayout";

//-----------------------------------------------------------------------------
// Root Layout - Component

export function RootLayout({ children }: { children: React.ReactNode }) {

  return(
    <>
      <HeaderLayout debug />
      <main className="pt-[6rem]">{ children }</main>
      <FooterLayout debug />
    </>
  );
}
