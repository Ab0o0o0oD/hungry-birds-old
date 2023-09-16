<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
=======
import React from 'react';
>>>>>>> 2a13422 (fix: Added Actions generator and style fix)
=======
import React, { LegacyRef, useEffect, useRef } from 'react';
>>>>>>> 1ec328b (feat: Scrollable cart items (#12))
=======
import React, { useEffect, useRef } from 'react';
>>>>>>> f0bdd3f (fix: remove unused import)
=======
import React, { useEffect, useRef, useState } from 'react';
>>>>>>> bda5181 (fix: Added checkout modal content (#16))
import { CartItem } from '../types';
import { CartItemComponent } from '../components/CartItem';
import styles from './cart.module.css';
import { useItem } from '../state/ItemContext';
<<<<<<< HEAD
<<<<<<< HEAD
import { CheckoutButton } from '../components/CheckoutButton';
<<<<<<< HEAD
=======
>>>>>>> 2a13422 (fix: Added Actions generator and style fix)
=======
import { CheckoutButton } from '../components/CheckoutButton';
>>>>>>> 6346829 (fix: Added checkout modal (#15))
=======
import { CheckoutModal } from './CheckoutModal';
>>>>>>> bda5181 (fix: Added checkout modal content (#16))
interface CartItemProps {
  cartItems: CartItem[];
}

export const Cart: React.FC<CartItemProps> = ({ cartItems }: CartItemProps) => {
  const { state } = useItem();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1ec328b (feat: Scrollable cart items (#12))
=======
  const [isOpenCheckoutModal, setIsOpenCheckoutModal] =
    useState<boolean>(false);
>>>>>>> bda5181 (fix: Added checkout modal content (#16))

  const scrollingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    scrollingRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  });
<<<<<<< HEAD
=======
>>>>>>> 2a13422 (fix: Added Actions generator and style fix)
=======
>>>>>>> 1ec328b (feat: Scrollable cart items (#12))
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
              <CartItemComponent key={index} product={cartItem.product} />
            ),
        )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <div ref={scrollingRef}></div>
      </div>
      {state.cartItems.length > 0 && (
        <div className={styles.toPaymentBtnLg}>
          <CheckoutButton
            onClick={() => setIsOpenCheckoutModal(!isOpenCheckoutModal)}
          />
          <CheckoutModal
            isOpenCheckoutModal={isOpenCheckoutModal}
            setIsOpenCheckoutModal={setIsOpenCheckoutModal}
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
=======
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
>>>>>>> 1ec328b (feat: Scrollable cart items (#12))
    </div>
  );
};
