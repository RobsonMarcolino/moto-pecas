import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';
import './FeaturedProducts.css';

const products = [
    { id: 'p1', name: 'ESCAPAMENTO ESPORTIVO AKRAPOVIC', brand: 'AKRAPOVIC', price: 3500.00 },
    { id: 'p2', name: 'KIT CILINDRO MOTOR 190CC', brand: 'ATHENA', price: 1250.00 },
    { id: 'p3', name: 'PNEU TRASEIRO PIRELLI DIABLO', brand: 'PIRELLI', price: 890.00 },
    { id: 'p4', name: 'PROTETOR DE MOTOR GIVI', brand: 'GIVI', price: 650.00 },
];

const FeaturedProducts = () => {
    const { addToCart } = useCart();
    return (
        <section className="featured-products">
            <div className="section-divider"></div>
            <div className="fp-overlay"></div>
            <div className="container fp-content">
                <h2 className="fp-title">
                    <span className="fp-bg-text">PRODUTOS</span>
                    <span className="fp-main-text">PRODUTOS EM DESTAQUE</span>
                    <div className="line mx-auto"></div>
                </h2>

                <div className="table-container">
                    <table className="events-table">
                        <thead>
                            <tr>
                                <th>PRODUTO</th>
                                <th>MARCA</th>
                                <th>PREÇO</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.brand}</td>
                                    <td className="text-accent font-bold">R$ {item.price.toFixed(2)}</td>
                                    <td style={{ textAlign: 'right' }}>
                                        <button
                                            className="add-to-cart-btn"
                                            onClick={() => addToCart(item)}
                                        >
                                            <ShoppingCart size={18} /> Adicionar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
