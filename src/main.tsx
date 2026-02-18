import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { RootLayout } from "~/layouts/root/RootLayout.tsx";
import Home from '~/pages/Home.tsx';
import Contact from '~/pages/Contact.tsx';
import Projects from "~/pages/Projects";
import Skills from "~/pages/Skills";
import Documents from "~/pages/Documents";
import SiteNotice from "~/pages/SiteNotice";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/sitenotice" element={<SiteNotice />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  </StrictMode>
);
