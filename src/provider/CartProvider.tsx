import { CartItem, Product } from '@/types';
import { randomUUID } from 'expo-crypto';
import React, { createContext, PropsWithChildren, useContext, useState } from 'react'

type CartType = {
    items: CartItem[],
    addItems: (product: Product, size: CartItem['size']) => void;
    updateQuantity: (itemId: string, amount: -1 | 1) => void;
}

const CartContext = createContext<CartType>({
    items: [],
    addItems: () => { },
    updateQuantity: () => { },
});

const CartProvider = ({ children }: PropsWithChildren) => {
    const [items, setItems] = useState<CartItem[]>([]);

    //if already in cart,increment quantity
    const updateQuantity = (itemId: string, amount: -1 | 1) => {
        setItems(items.map((item) => item.id !== itemId
            ? item
            : { ...item, quantity: item.quantity + amount }
        ).filter((item) => item.quantity > 0)
        );
    }
    const addItems = (product: Product, size: CartItem['size']) => {
        const newCartItem: CartItem = {
            id: randomUUID(),
            product,
            product_id: product.id,
            quantity: 1,
            size
        };
        //check already in cart
        const checkExsistItem = items.find(x => x.product == product && x.size == size)
        console.log("Exist item", checkExsistItem);
        if (checkExsistItem) {
            updateQuantity(checkExsistItem.id, 1)
            return;
        }
        console.log(newCartItem);
        setItems([newCartItem, ...items]);
        console.warn(items.length);
    };

    //update quantity

    return (
        <CartContext.Provider value={{ items, addItems, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
export const useCart = () => useContext(CartContext);