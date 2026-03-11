import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import SaleCountdown from './components/SaleCountdown';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <HelmetProvider>
      <CartProvider>
        <Helmet>
          <title>Moto Peças | Peças e Acessórios Premium para Motos</title>
          <meta name="description" content="Encontre os melhores escapamentos, peças de motor e acessórios para customizar e manter sua moto com máxima performance." />
          <meta name="keywords" content="moto peças, escapamentos, acessórios para moto, peças de motor, customização" />

          {/* Open Graph Tags for WhatsApp / Instagram sharing */}
          <meta property="og:title" content="Moto Peças | A sua parceira ideal na estrada" />
          <meta property="og:description" content="Peças Originais e Esportivas. Tudo o que você precisa para a manutenção completa e segura da sua moto." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
          <meta property="og:url" content="https://motopecas.example.com" />
        </Helmet>

        <Navbar />
        <CartSidebar />
        <Hero />
        <Categories />
        <SaleCountdown />
        <FeaturedProducts />
        <Footer />
      </CartProvider>
    </HelmetProvider>
  );
}

export default App;
