import React from 'react';
import styles from './cart-item.module.css';
import { PlusMinusButton } from './PlusMinusButton';
import { Product } from '../types';

interface CartItemProps {
  title: string;
  product: Product;
}

export const CartItemComponent: React.FC<CartItemProps> = ({
  title,
  product,
}: CartItemProps) => {
  return (
    <div className={styles.cartItemWrapper}>
      <h1 className={styles.title}>{title}</h1>
      <h2>Addons</h2>
      <PlusMinusButton product={product} />
    </div>
  );
};
