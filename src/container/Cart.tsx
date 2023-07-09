<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
=======
import React from 'react';
>>>>>>> 2a13422 (fix: Added Actions generator and style fix)
import { CartItem } from '../types';
import { CartItemComponent } from '../components/CartItem';
import styles from './cart.module.css';
import { useItem } from '../state/ItemContext';
<<<<<<< HEAD
import { CheckoutButton } from '../components/CheckoutButton';
=======
>>>>>>> 2a13422 (fix: Added Actions generator and style fix)
interface CartItemProps {
  cartItems: CartItem[];
}

export const Cart: React.FC<CartItemProps> = ({ cartItems }: CartItemProps) => {
  const { state } = useItem();
<<<<<<< HEAD

  const scrollingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    scrollingRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  });
=======
>>>>>>> 2a13422 (fix: Added Actions generator and style fix)
  return (
    <div className={styles.cartContainer}>
      {state.cartItems.length === 0 ? (
        <div className={styles.emptyCartWrapper}>
          <img className={styles.cartImg} src="./assets/cart.png" alt="cart" />
          <h5>Handelkurven er tom</h5>
        </div>
      ) : (
        <div className={styles.cartItemsHeader}>
<<<<<<< HEAD
<<<<<<< HEAD
          <h2>Din bestilling</h2>
          <h3>VARER:</h3>
=======
          <h1>Din bestilling</h1>
          <h2>VARER:</h2>
>>>>>>> 2a13422 (fix: Added Actions generator and style fix)
=======
          <h2>Din bestilling</h2>
          <h3>VARER:</h3>
>>>>>>> b7360c7 (feat: Use css modules)
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
<<<<<<< HEAD
<<<<<<< HEAD
        <div ref={scrollingRef}></div>
      </div>
      {state.cartItems.length > 0 && (
        <div className={styles.toPaymentBtnLg}>
          <CheckoutButton
            totalPrice={state.totalPrice}
            cartItemsNumber={state.cartItems.length}
            onClick={() => {}}
          />
        </div>
      )}
=======
      </div>
      <div className={styles.toPaymentBtn}>
        <div>Til betaling</div>
=======
        {state.cartItems.length > 0 && (
          <div className={styles.toPaymentBtn}>
            <div>Til betaling</div>
          </div>
        )}
>>>>>>> b7360c7 (feat: Use css modules)
      </div>
>>>>>>> 2a13422 (fix: Added Actions generator and style fix)
    </div>
  );
};
