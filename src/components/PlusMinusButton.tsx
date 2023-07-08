import React from 'react';
import { CartItem, Product } from '../types';
import './plus-minus-button.css';
<<<<<<< HEAD
import { useItem } from '../state/ItemContext';

interface PlusMinusButtonProps {
=======

interface PlusMinusButtonProps {
  itemsCart: CartItem[];
  setItemsCart: (itemsCart: CartItem[]) => void;
>>>>>>> 8bb6725 (feat: Implemented Cart)
  product: Product;
}

export const PlusMinusButton: React.FC<PlusMinusButtonProps> = ({
<<<<<<< HEAD
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
=======
  itemsCart,
  setItemsCart,
  product,
}) => {
  const increment = () => {
    const productQuantity =
      itemsCart.find((value) => value.product.id === product.id)?.quantity ?? 0;
    setItemsCart([
      ...itemsCart,
      { product: product, quantity: productQuantity + 1 },
    ]);
    itemsCart.map((value) => console.log(product.title, value.quantity));
  };

  const decrement = () => {
    const productQuantity =
      itemsCart.find((value) => value.product.id === product.id)?.quantity ?? 0;
    setItemsCart([
      ...itemsCart,
      { product: product, quantity: productQuantity - 1 },
    ]);
    itemsCart.map((value) => console.log(product.title, value.quantity));
  };

  return (
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
  );
};
