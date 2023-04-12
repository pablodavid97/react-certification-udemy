import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const newTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;

        const existingItemIndx = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingItemIndx];

        let updatedItems;
        if (existingCartItem) {
            updatedItems = [...state.items];
            updatedItems[existingItemIndx] = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: newTotalAmount,
        };
    }
    if (action.type === 'REMOVE_ITEM') {
        const existingItemIndx = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.items[existingItemIndx];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1,
            };
            updatedItems = [...state.items];
            updatedItems[existingItemIndx] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    return defaultCartState;
};

const CartProvider = ({ children }) => {
    const [cartState, cartActionDispatcher] = useReducer(
        cartReducer,
        defaultCartState
    );
    const handleAddItem = (item) => {
        cartActionDispatcher({ type: 'ADD_ITEM', item: item });
    };
    const handleRemoveItem = (id) => {
        cartActionDispatcher({ type: 'REMOVE_ITEM', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: handleAddItem,
        removeItem: handleRemoveItem,
    };
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
