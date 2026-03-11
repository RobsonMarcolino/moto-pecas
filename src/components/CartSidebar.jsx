import React from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './CartSidebar.css';

const CartSidebar = () => {
    const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>
            <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h2><ShoppingBag size={24} className="text-accent" /> Seu Carrinho</h2>
                    <button className="close-cart-btn" onClick={() => setIsCartOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <ShoppingBag size={48} />
                            <p>Seu carrinho está vazio.</p>
                            <button className="continue-shopping" onClick={() => setIsCartOpen(false)}>
                                Continuar Comprando
                            </button>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div className="cart-item-info">
                                    <h4 className="cart-item-title">{item.name}</h4>
                                    <span className="cart-item-price">R$ {item.price.toFixed(2)}</span>
                                </div>
                                <div className="cart-item-actions">
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, -1)}><Minus size={14} /></button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></button>
                                    </div>
                                    <button
                                        className="remove-item-btn text-accent"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Total</span>
                            <span className="text-accent">R$ {cartTotal.toFixed(2)}</span>
                        </div>
                        <button className="checkout-btn bg-accent">
                            Finalizar Compra
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartSidebar;
