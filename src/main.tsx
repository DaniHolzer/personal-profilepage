import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Layout } from './layouts/layout/Layout.tsx';
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
          </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);
