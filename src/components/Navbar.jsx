import React from 'react';
import { User, Menu, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import logoImg from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const { itemCount, setIsCartOpen } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logoImg} alt="Moto Peças Logo" className="logo-image" />
        </div>

        <div className="navbar-links">
          <a href="#home" className="nav-link active">home</a>
          <a href="#products" className="nav-link">products</a>
          <a href="#about" className="nav-link">about</a>
          <a href="#community" className="nav-link">community</a>
        </div>

        <div className="navbar-actions">
          <button
            className="cart-btn text-accent"
            onClick={() => setIsCartOpen(true)}
          >
            <div className="cart-icon-wrapper">
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="cart-badge">{itemCount}</span>
              )}
            </div>
          </button>
          <button className="account-btn text-accent">
            Account <User size={18} />
          </button>
          <button className="mobile-menu-btn text-accent">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
