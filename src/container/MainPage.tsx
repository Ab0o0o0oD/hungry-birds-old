import React from 'react';
import { MenyCard } from '../components/MenyCard';
import './main-page.css';
import { CartItem, Product } from '../types';
import { CartItemComponent } from '../components/CartItem';
import { useItem } from '../state/ItemContext';

export const MainPage: React.FC = () => {
  const { state, dispatch } = useItem();
  const addProduct = (product: Product) => {
    const isItemAdded = state.cartItems.find(
      (item) => item.product.id === product.id,
    );
    if (!isItemAdded) dispatch({ type: 'add', product: product });
  };
  console.log(state.cartItems);
  return (
    <div>
      <div className="products-cart">
        <div className="products-list" style={{ overflowY: 'auto' }}>
          {products.map((product) => (
            <MenyCard
              key={product.id}
              title={product.title}
              allergier={product.allergier}
              img={product.img}
              price={product.price}
              content={product.content}
              onClick={() => addProduct(product)}
            />
          ))}
        </div>
        <div className="cart">
          {state.cartItems.length === 0 && (
            <>
              <img className={'cart-img'} src="./assets/cart.png" alt="cart" />
              <h5>Handelkurven er tom</h5>
            </>
          )}
          {state.cartItems && (
            <div>
              {state.cartItems.map((cartItem: CartItem, index: number) => (
                <CartItemComponent
                  key={index}
                  title={cartItem.product.title}
                  product={cartItem.product}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const products: Product[] = [
  {
    id: 1,
    cat: 's',
    title: 'SHAWARMA I RULL',
    content: 'Agurk, chicken',
    price: 100,
    allergier: 'Allergier: gluten',
    img: './assets/shawarmarull.jpg',
  },
  {
    id: 2,
    cat: 's',
    title: 'SHAWARMA TALLARKEN',
    content: 'Agurk, chicken',
    price: 100,
    allergier: 'Allergier: gluten',
    img: './assets/shawrma-arabi.jpeg',
  },
  {
    id: 3,
    cat: 's',
    title: 'HUNGRY BIRDS ',
    content: 'Agurk, chicken',
    price: 100,
    allergier: 'Allergier: gluten',
    img: './assets/hungry-birds.png',
  },
  {
    id: 4,
    cat: 'c',
    title: 'CRISPY CHICKEN RULL',
    content: 'Agurk, chicken',
    price: 100,
    allergier: 'Allergier: gluten',
    img: './assets/cripsy-rull.png',
  },
  {
    id: 5,
    cat: 'c',
    title: 'CRISPY SNACK BOX',
    content: 'Agurk, chicken',
    price: 100,
    allergier: 'Allergier: gluten',
    img: './assets/crispy-snack-box.jpeg',
  },
  {
    id: 6,
    cat: 'c',
    title: 'CRIPSY BOX',
    content: 'Agurk, chicken',
    price: 100,
    allergier: 'Allergier: gluten',
    img: './assets/cripsy-box.jpg',
  },
  {
    id: 7,
    cat: 'c',
    title: 'CRIPSY BURGER',
    content: 'Agurk, chicken',
    price: 100,
    allergier: 'Allergier: gluten',
    img: './assets/crispy-burger.jpg',
  },
  {
    id: 8,
    cat: 'v',
    title: 'FALAFEL RULL',
    content: 'Agurk, chicken',
    price: 100,
    allergier: 'Allergier: gluten',
    img: './assets/falafel-rull.jpeg',
  },
];
