import { HeaderLayout } from "../header/HeaderLayout";

//-----------------------------------------------------------------------------
// Root Layout - Component

export function RootLayout({ children }: { children: React.ReactNode }) {
  return(
    <>
      <HeaderLayout debug />
      <main>{ children }</main>
      <footer className="align-bottom h-20 bg-green-300">I'm the footer</footer>
    </>
  );
}
