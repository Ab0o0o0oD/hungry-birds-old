import React from 'react';
import { CartItem } from '../types';
import { CartItemComponent } from '../components/CartItem';
import styles from './cart.module.css';
import { useItem } from '../state/ItemContext';
interface CartItemProps {
  cartItems: CartItem[];
}

export const Cart: React.FC<CartItemProps> = ({ cartItems }: CartItemProps) => {
  const { state } = useItem();
  return (
    <div className={styles.cartContainer}>
      {state.cartItems.length === 0 ? (
        <div className={styles.emptyCartWrapper}>
          <img className={styles.cartImg} src="./assets/cart.png" alt="cart" />
          <h5>Handelkurven er tom</h5>
        </div>
      ) : (
        <div className={styles.cartItemsHeader}>
          <h2>Din bestilling</h2>
          <h3>VARER:</h3>
        </div>
      )}
      <div className={styles.cartItemsWrapper}>
        {cartItems.map(
          (cartItem: CartItem, index: number) =>
            cartItem &&
            cartItem.quantity > 0 && (
              <CartItemComponent
                key={index}
                title={cartItem.product.title}
                product={cartItem.product}
              />
            ),
        )}
        {state.cartItems.length > 0 && (
          <div className={styles.toPaymentBtn}>
            <div>Til betaling</div>
          </div>
        )}
      </div>
    </div>
  );
};
