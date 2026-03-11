import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="section-divider"></div>
            <div className="container footer-content">
                <div className="footer-col">
                    <img src={logoImg} alt="Moto Peças Logo" className="footer-logo" />
                    <p className="footer-desc">
                        A MOTO PEÇAS é a sua parceira ideal na estrada. Oferecemos as melhores marcas, peças customizadas e acessórios premium com garantia de qualidade.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon"><Instagram size={20} /></a>
                        <a href="#" className="social-icon"><Facebook size={20} /></a>
                        <a href="#" className="social-icon"><Twitter size={20} /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Links Rápidos</h4>
                    <ul className="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Produtos</a></li>
                        <li><a href="#about">Sobre Nós</a></li>
                        <li><a href="#community">Comunidade</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Contato</h4>
                    <ul className="footer-contact">
                        <li>
                            <MapPin size={18} className="text-accent" />
                            <span>Av. Paulista, 1000 - São Paulo, SP</span>
                        </li>
                        <li>
                            <Phone size={18} className="text-accent" />
                            <span>(11) 99999-9999</span>
                        </li>
                        <li>
                            <Mail size={18} className="text-accent" />
                            <span>contato@motopecas.com.br</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} MOTO PEÇAS. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
