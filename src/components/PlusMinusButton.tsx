import React from 'react';
import { CartItem, Product } from '../types';
import './plus-minus-button.css';
import { useItem } from '../state/ItemContext';

interface PlusMinusButtonProps {
  product: Product;
}

export const PlusMinusButton: React.FC<PlusMinusButtonProps> = ({
  product,
}) => {
  const { state, dispatch } = useItem();

  return (
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
  );
};
