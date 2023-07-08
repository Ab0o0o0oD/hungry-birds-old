import React from 'react';
import { CartItem, Product } from '../types';
import './plus-minus-button.css';

interface PlusMinusButtonProps {
  itemsCart: CartItem[];
  setItemsCart: (itemsCart: CartItem[]) => void;
  product: Product;
}

export const PlusMinusButton: React.FC<PlusMinusButtonProps> = ({
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
  );
};
