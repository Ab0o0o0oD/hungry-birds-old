import React from 'react';
import styles from './cart-item.module.css';
import { PlusMinusButton } from './PlusMinusButton';
<<<<<<< HEAD
import { Product } from '../types';
import { PrimaryButton } from './PrimaryButton';
import { useItem } from '../state/ItemContext';

interface CartItemProps {
  title: string;
=======
import { CartItem, Product } from '../types';

interface CartItemProps {
  title: string;
  itemsCart: CartItem[];
  setItemsCart: (itemsCart: CartItem[]) => void;
>>>>>>> 8bb6725 (feat: Implemented Cart)
  product: Product;
}

export const CartItemComponent: React.FC<CartItemProps> = ({
  title,
<<<<<<< HEAD
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
=======
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
>>>>>>> 8bb6725 (feat: Implemented Cart)
    </div>
  );
};
