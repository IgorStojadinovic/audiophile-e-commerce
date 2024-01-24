import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  cartStatus: false,
  showCart: false,
  showSummary: false,
  yxQuantity: 0,
  xx99mkIIQuantity: 0,
  xx99mkIQuantity: 0,
  xx59Quantity: 0,
  zx9Qunatity: 0,
  zx7Quantity: 0,
};

const cartSlice = createSlice({
  name: 'reducer',
  initialState,
  reducers: {
    addItem: {
      reducer(state, action) {
        const existingItemIndex = state.cart.findIndex(
          (cartItem) => cartItem.name === action.payload.name
        );

        if (existingItemIndex !== -1) {
          const quantityKey = action.payload.quantityKey;

          const updatedCart = [...state.cart];
          updatedCart[existingItemIndex] = {
            ...state.cart[existingItemIndex],
            total: state.cart[existingItemIndex].total + action.payload.total,
            quantity:
              state.cart[existingItemIndex].quantity + state[quantityKey],
          };

          state.cart = updatedCart;
          state[quantityKey] = updatedCart[existingItemIndex].quantity;
          state.cartStatus = true;
        } else {
          state.cart.push(action.payload);
          state.cartStatus = true;
        }
      },
    },
    updateQuantity: {
      reducer(state, action) {
        if (action.payload.type === 'add') {
          const itemKey = action.payload.name;
          state[itemKey] += 1;
        }
        if (action.payload.type === 'remove') {
          const itemKey = action.payload.name;
          state[itemKey] -= 1;
        }
      },
    },
    removeAll: {
      reducer(state, action) {
        state.cart = [];
        state.yxQuantity = 0;
        state.xx99mkIIQuantity = 0;
        state.xx99mkIQuantity = 0;
        state.xx59Quantity = 0;
        state.zx9Qunatity = 0;
        state.zx7Quantity = 0;
        state.cartStatus = false;
        state.showCart = false;
      },
    },
    showCart: {
      reducer(state, action) {
        state.showCart = !state.showCart;
      },
    },
    showSummary: {
      reducer(state, action) {
        state.showSummary = !state.showSummary;
      },
    },
  },

  extraReducers(builder) {},
});

export const getCart = (state) => state.cart;
export const getEarphoneQuantity = (state) => state.yxQuantity;
export const getXX99MKIIQuantity = (state) => state.xx99mkIIQuantity;
export const getXX99MKIQuantity = (state) => state.xx99mkIQuantity;
export const getXX59Quantity = (state) => state.xx59Quantity;
export const getZX9Quantity = (state) => state.zx9Qunatity;
export const getZX7Quantity = (state) => state.zx7Quantity;
export const getShowCart = (state) => state.showCart;
export const getCartStatus = (state) => state.cartStatus;
export const getScrollStatus = (state) => state.scroll;
export const getSummary = (state) => state.showSummary;
export const { addItem, updateQuantity, removeAll, showCart, showSummary } =
  cartSlice.actions;

export default cartSlice.reducer;
