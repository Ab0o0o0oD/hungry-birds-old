import React, { useReducer } from 'react';
import { CartItem, Product } from '../types';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  addToCart,
  updateTotalPrice,
=======
import {
  addToCart,
>>>>>>> 2a13422 (fix: Added Actions generator and style fix)
  decrementItem,
  deleteFromCart,
  incrementItem,
} from './ActionsGenerator';
<<<<<<< HEAD

type Action =
  | { type: 'addToCart'; product: Product }
  | { type: 'deleteFromCart'; product: Product }
  | { type: 'increment'; product: Product }
  | { type: 'decrement'; product: Product }
  | { type: 'updateTotalPrice' };
type Dispatch = (action: Action) => void;
type State = {
  cartItems: CartItem[];
  totalPrice: number;
};
=======
=======
>>>>>>> 2a13422 (fix: Added Actions generator and style fix)

type Action =
  | { type: 'addToCart'; product: Product }
  | { type: 'deleteFromCart'; product: Product }
  | { type: 'increment'; product: Product }
  | { type: 'decrement'; product: Product };
type Dispatch = (action: Action) => void;
type State = { cartItems: CartItem[] };
>>>>>>> 9a9ad78 (feat: Added cart item context provider)
type ItemProviderProps = { children: React.ReactNode };

const ItemStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
<<<<<<< HEAD
>({ state: { cartItems: [], totalPrice: 0 }, dispatch: (action) => action });

export const itemsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'addToCart': {
      return {
        cartItems: addToCart(state.cartItems, action.product),
        totalPrice: state.totalPrice,
      };
    }
    case 'deleteFromCart': {
      return {
        cartItems: deleteFromCart(state.cartItems, action.product),
        totalPrice: state.totalPrice,
=======
>(undefined);

export const itemsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'addToCart': {
      return {
<<<<<<< HEAD
        cartItems: [
          ...state.cartItems,
          {
            product: action.product,
            quantity: 1,
          },
        ],
>>>>>>> 9a9ad78 (feat: Added cart item context provider)
=======
        cartItems: addToCart(state.cartItems, action.product),
      };
    }
    case 'deleteFromCart': {
      return {
        cartItems: deleteFromCart(state.cartItems, action.product),
>>>>>>> 2a13422 (fix: Added Actions generator and style fix)
      };
    }
    case 'increment': {
      return {
<<<<<<< HEAD
<<<<<<< HEAD
        cartItems: incrementItem(state.cartItems, action.product),
        totalPrice: state.totalPrice,
=======
        cartItems: state.cartItems?.map((cartItem: CartItem) =>
          cartItem.product.id === action.product.id
            ? {
                ...cartItem,
                ...{
                  product: action.product,
                  quantity: cartItem.quantity + 1,
                },
              }
            : cartItem,
        ),
>>>>>>> 9a9ad78 (feat: Added cart item context provider)
=======
        cartItems: incrementItem(state.cartItems, action.product),
>>>>>>> 2a13422 (fix: Added Actions generator and style fix)
      };
    }
    case 'decrement': {
      return {
<<<<<<< HEAD
<<<<<<< HEAD
        cartItems: decrementItem(state.cartItems, action.product),
        totalPrice: state.totalPrice,
      };
    }
    case 'updateTotalPrice': {
      return {
        cartItems: state.cartItems,
        totalPrice: updateTotalPrice(state.cartItems),
=======
        cartItems: state.cartItems?.map((cartItem: CartItem) =>
          cartItem.product.id === action.product.id
            ? {
                ...cartItem,
                ...{
                  product: action.product,
                  quantity: cartItem.quantity - 1,
                },
              }
            : cartItem,
        ),
>>>>>>> 9a9ad78 (feat: Added cart item context provider)
=======
        cartItems: decrementItem(state.cartItems, action.product),
>>>>>>> 2a13422 (fix: Added Actions generator and style fix)
      };
    }
  }
};

export const ItemProvider = ({ children }: ItemProviderProps) => {
<<<<<<< HEAD
  const [state, dispatch] = useReducer(itemsReducer, {
    cartItems: [],
    totalPrice: 0,
  });
=======
  const [state, dispatch] = useReducer(itemsReducer, { cartItems: [] });
>>>>>>> 9a9ad78 (feat: Added cart item context provider)
  const value = React.useMemo(() => ({ state, dispatch }), [state, dispatch]);
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  return (
    <ItemStateContext.Provider value={value}>
      {children}
    </ItemStateContext.Provider>
  );
};

export const useItem = () => {
  const context = React.useContext(ItemStateContext);
  if (context === undefined) {
<<<<<<< HEAD
<<<<<<< HEAD
    throw new Error('useItem must be used within a ItemProvider');
=======
    throw new Error('useCount must be used within a CountProvider');
>>>>>>> 9a9ad78 (feat: Added cart item context provider)
=======
    throw new Error('useItem must be used within a ItemProvider');
>>>>>>> 2a13422 (fix: Added Actions generator and style fix)
  }
  return context;
};
