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
      <div className={styles.description}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.addon}>Addons</h2>
      </div>
      <div className={styles.buttons}>
        <PlusMinusButton product={product} />
      </div>
    </div>
  );
};
