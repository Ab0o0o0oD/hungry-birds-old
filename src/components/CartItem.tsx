import React from 'react';
import styles from './cart-item.module.css';
import { PlusMinusButton } from './PlusMinusButton';
import { Product } from '../types';
import { PrimaryButton } from './PrimaryButton';
import { useItem } from '../state/ItemContext';

interface CartItemProps {
  title: string;
  product: Product;
}

export const CartItemComponent: React.FC<CartItemProps> = ({
  title,
  product,
}: CartItemProps) => {
  const { dispatch } = useItem();
  return (
    <div className={styles.cartItemWrapper}>
      <div className={styles.description}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.addon}>Addons</h2>
      </div>
      <div className={styles.buttons}>
        <PlusMinusButton product={product} />
        <div style={{ margin: '0 0 0 20px' }}>
          <PrimaryButton
            text={'Slett'}
            color={'secondary'}
            onClick={() =>
              dispatch({ type: 'deleteFromCart', product: product })
            }
          />
        </div>
      </div>
    </div>
  );
};
