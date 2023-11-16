import React, { useState } from 'react';
import Header from './components/layout/Header';
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleCartButtonClick = () => {
        setIsCartOpen(true);
    };

    const handleCloseCart = () => {
        setIsCartOpen(false);
    };

    return (
        <CartProvider>
            <Cart isOpen={isCartOpen} onClose={handleCloseCart} />
            <Header onCartButtonClick={handleCartButtonClick} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
