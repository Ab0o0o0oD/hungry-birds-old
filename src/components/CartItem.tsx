import React from 'react';
import styles from './cart-item.module.css';
import { PlusMinusButton } from './PlusMinusButton';
import { CartItem, Product } from '../types';

interface CartItemProps {
  title: string;
  itemsCart: CartItem[];
  setItemsCart: (itemsCart: CartItem[]) => void;
  product: Product;
}

export const CartItemComponent: React.FC<CartItemProps> = ({
  title,
  itemsCart,
  setItemsCart,
  product,
}: CartItemProps) => {
  return (
    <div className={styles.cartItemWrapper}>
      <h1 className={styles.title}>{title}</h1>
      <h2>Addons</h2>
      <PlusMinusButton
        itemsCart={itemsCart}
        setItemsCart={setItemsCart}
        product={product}
      />
    </div>
  );
};
