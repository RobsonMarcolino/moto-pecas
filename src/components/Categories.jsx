import React from 'react';
import { useCart } from '../context/CartContext';
import './Categories.css';

const Categories = () => {
    const { addToCart } = useCart();

    const handleAddToCart = (e, item) => {
        e.preventDefault();
        addToCart(item);
    };

    return (
        <section className="categories">
            <div className="section-divider"></div>
            <div className="category-block">
                <h3 className="category-title">EXAUSTORES &<br /> ESCAPAMENTOS</h3>
                <p className="category-desc">
                    Encontre os melhores escapamentos esportivos e originais para aumentar a performance e o ronco da sua moto.
                </p>
                <a href="#exhausts" className="discover-link" onClick={(e) => handleAddToCart(e, { id: 'c1', name: 'Escapamento Esportivo', price: 1200.00 })}>
                    COMPRAR AGORA
                </a>
            </div>

            <div className="category-block highlight">
                <h3 className="category-title">PEÇAS DE<br /> MOTOR</h3>
                <p className="category-desc">
                    Kits de motor, pistões, anéis e juntas. Tudo o que você precisa para a manutenção completa e segura.
                </p>
                <a href="#engine" className="discover-link" onClick={(e) => handleAddToCart(e, { id: 'c2', name: 'Kit Cilindro Motor', price: 850.00 })}>
                    COMPRAR AGORA
                </a>
            </div>

            <div className="category-block">
                <h3 className="category-title">ACESSÓRIOS &<br /> CUSTOMIZAÇÃO</h3>
                <p className="category-desc">
                    De retrovisores a manoplas e sliders. Personalize sua moto com estilo, segurança e exclusividade máxima.
                </p>
                <a href="#accessories" className="discover-link" onClick={(e) => handleAddToCart(e, { id: 'c3', name: 'Kit Acessórios Premium', price: 450.00 })}>
                    COMPRAR AGORA
                </a>
            </div>
        </section>
    );
};

export default Categories;
