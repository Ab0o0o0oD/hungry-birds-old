import React from 'react';
import { CartItem, Product } from '../types';
<<<<<<< HEAD
import './plus-minus-button.css';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import styles from './plus-minus-button.module.css';
>>>>>>> bda5181 (fix: Added checkout modal content (#16))
import { useItem } from '../state/ItemContext';

interface PlusMinusButtonProps {
=======

interface PlusMinusButtonProps {
  itemsCart: CartItem[];
  setItemsCart: (itemsCart: CartItem[]) => void;
>>>>>>> 8bb6725 (feat: Implemented Cart)
=======
import { useItem } from '../state/ItemContext';

interface PlusMinusButtonProps {
>>>>>>> 9a9ad78 (feat: Added cart item context provider)
  product: Product;
}

export const PlusMinusButton: React.FC<PlusMinusButtonProps> = ({
<<<<<<< HEAD
<<<<<<< HEAD
  product,
}) => {
  const { state, dispatch } = useItem();

  return (
    state.cartItems && (
      <div className={styles.plusMinusButton}>
        <button
          className={styles.minusButton}
          onClick={() => dispatch({ type: 'decrement', product: product })}
        >
          <span className="minus">-</span>
        </button>
        <span className={styles.quantity}>
          {
            state.cartItems.find(
              (value: CartItem) => value.product.id === product.id,
            )?.quantity
          }
        </span>
        <button
          className={styles.plusButton}
          onClick={() => dispatch({ type: 'increment', product: product })}
        >
          +
        </button>
      </div>
    )
=======
  itemsCart,
  setItemsCart,
=======
>>>>>>> 9a9ad78 (feat: Added cart item context provider)
  product,
}) => {
  const { state, dispatch } = useItem();

  return (
<<<<<<< HEAD
    <div className="plus-minus-button">
      <button className="minus-button" onClick={decrement}>
        <span className="minus">-</span>
      </button>
      <span className="quantity">
        {itemsCart.find((value) => value.product.id === product.id)?.quantity}
      </span>
      <button className="plus-button" onClick={increment}>
        +
      </button>
    </div>
>>>>>>> 8bb6725 (feat: Implemented Cart)
=======
    state.cartItems && (
      <div className="plus-minus-button">
        <button
          className="minus-button"
          onClick={() => dispatch({ type: 'decrement', product: product })}
        >
          <span className="minus">-</span>
        </button>
        <span className="quantity">
          {
            state.cartItems.find(
              (value: CartItem) => value.product.id === product.id,
            )?.quantity
          }
        </span>
        <button
          className="plus-button"
          onClick={() => dispatch({ type: 'increment', product: product })}
        >
          +
        </button>
      </div>
    )
>>>>>>> 9a9ad78 (feat: Added cart item context provider)
  );
};
