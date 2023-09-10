import { createSlice} from "@reduxjs/toolkit";


const initialState = {
  cart: [],
  cartStatus:false,
  showCart:false,
  showSummary:false,
  yxQuantity:0,
  xx99mkIIQuantity:0,
  xx99mkIQuantity:0,
  xx59Quantity:0,
  zx9Qunatity:0,
  zx7Quantity:0,
};




const cartSlice = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    addItem: {
        reducer(state, action) {
       
          const existingItemIndex = state.cart.findIndex(
            (cartItem) => cartItem.name === action.payload.name
          );
      
          if (existingItemIndex !== -1) {
            //Earphones YX-1 
            if(state.cart[existingItemIndex].name === 'yx1'){
                // Item already exists, create a new array with the updated item
                const updatedCart = [...state.cart];
                updatedCart[existingItemIndex] = {
                    ...state.cart[existingItemIndex],
                    total: state.cart[existingItemIndex].total + action.payload.total,
                    quantity: state.cart[existingItemIndex].quantity + state.yxQuantity,
                };
                state.cart = updatedCart; // Update the cart in the state
                state.yxQuantity = updatedCart[existingItemIndex].quantity
                state.cartStatus = true
            }
            
            //Headphones XX99 MK II
            if(state.cart[existingItemIndex].name === 'xx99mkII'){
                const updatedCart = [...state.cart];
                updatedCart[existingItemIndex] = {
                    ...state.cart[existingItemIndex],
                    total: state.cart[existingItemIndex].total + action.payload.total,
                    quantity: state.cart[existingItemIndex].quantity + state.xx99mkIIQuantity,
                };
                state.cart = updatedCart; 
                state.xx99mkIIQuantity = updatedCart[existingItemIndex].quantity
                state.cartStatus = true
            }

             //Headphones XX99 MK I
             if(state.cart[existingItemIndex].name === 'xx99mkI'){
                const updatedCart = [...state.cart];
                updatedCart[existingItemIndex] = {
                    ...state.cart[existingItemIndex],
                    total: state.cart[existingItemIndex].total + action.payload.total,
                    quantity: state.cart[existingItemIndex].quantity + state.xx99mkIIQuantity,
                };
                state.cart = updatedCart; 
                state.xx99mkIQuantity = updatedCart[existingItemIndex].quantity
                state.cartStatus = true
            }

            //Headphones XX59
            if(state.cart[existingItemIndex].name === 'xx59'){
                const updatedCart = [...state.cart];
                updatedCart[existingItemIndex] = {
                    ...state.cart[existingItemIndex],
                    total: state.cart[existingItemIndex].total + action.payload.total,
                    quantity: state.cart[existingItemIndex].quantity + state.xx59Quantity,
                };
                state.cart = updatedCart;
                state.xx59Quantity = updatedCart[existingItemIndex].quantity
                state.cartStatus = true
            }
          
            //Speaker ZX9
            if(state.cart[existingItemIndex].name === 'zx9'){
                const updatedCart = [...state.cart];
                updatedCart[existingItemIndex] = {
                    ...state.cart[existingItemIndex],
                    total: state.cart[existingItemIndex].total + action.payload.total,
                    quantity: state.cart[existingItemIndex].quantity + state.zx9Qunatity,
                };
                state.cart = updatedCart;
                state.zx9Qunatity = updatedCart[existingItemIndex].quantity 
                state.cartStatus = true
            }
          
            //Speaker ZX7
            if(state.cart[existingItemIndex].name === 'zx7'){
                const updatedCart = [...state.cart];
                updatedCart[existingItemIndex] = {
                    ...state.cart[existingItemIndex],
                    total: state.cart[existingItemIndex].total + action.payload.total,
                    quantity: state.cart[existingItemIndex].quantity + state.zx7Quantity,
                };
                state.cart = updatedCart; 
                state.zx7Quantity = updatedCart[existingItemIndex].quantity 
                state.cartStatus = true
            }
          
          } else {
   
            state.cart.push(action.payload);
            state.cartStatus = true
           
          }
        },
    },
    updateQuantity:{
        reducer(state,action){
            if(action.payload.type === 'add-yx1'){
                state.yxQuantity += 1

               
                const existingItemIndex = state.cart.findIndex(
                    (cartItem) => cartItem.name === action.payload.name
                  );
                 
                  if (existingItemIndex !== -1) {
                     //Earphones YX-1 
                     if(state.cart[existingItemIndex].name === 'yx1'){
                          // Item already exists, create a new array with the updated item
                          const updatedCart = [...state.cart];
                          updatedCart[existingItemIndex] = {
                              ...state.cart[existingItemIndex],
                              total: state.cart[existingItemIndex].total + action.payload.defaultPrice,
                              quantity: state.cart[existingItemIndex].quantity + state.yxQuantity,
                          };
                          if (updatedCart[existingItemIndex].total === 0) {
                              // Remove the item from the cart if its total becomes 0
                              state.cart = updatedCart.filter((item) => item.total !== 0);
                          } else {
                              state.cart = updatedCart;
                          }
                     }
                    }   
            }
            if(action.payload.type === 'remove-yx1'){
                if(state.yxQuantity !== 0){
                    state.yxQuantity -= 1
                    if(state.cart.length === 0 ) {
                        state.cart = [];
                        return
                    }
                    const existingItemIndex = state.cart.findIndex(
                        (cartItem) => cartItem.name === action.payload.name
                      );
                     
                      if (existingItemIndex !== -1) {
                         //Earphones YX-1 
                         if(state.cart[existingItemIndex].name === 'yx1'){
                              // Item already exists, create a new array with the updated item
                              const updatedCart = [...state.cart];
                              updatedCart[existingItemIndex] = {
                                  ...state.cart[existingItemIndex],
                                  total: state.cart[existingItemIndex].total - action.payload.defaultPrice,
                                  quantity: state.cart[existingItemIndex].quantity - state.yxQuantity,
                              };
                              if (updatedCart[existingItemIndex].total === 0) {
                                  // Remove the item from the cart if its total becomes 0
                                  state.cart = updatedCart.filter((item) => item.total !== 0);
                                 
                              } else {
                                  state.cart = updatedCart;
                              }
                         }
                        }   
                }
            }
            if(action.payload.type === 'add-markI'){
                state.xx99mkIQuantity += 1

                
                const existingItemIndex = state.cart.findIndex(
                    (cartItem) => cartItem.name === action.payload.name
                  );
                 
                  if (existingItemIndex !== -1) {
                     //Earphones YX-1 
                     if(state.cart[existingItemIndex].name === 'xx99mkI'){
                          // Item already exists, create a new array with the updated item
                          const updatedCart = [...state.cart];
                          updatedCart[existingItemIndex] = {
                              ...state.cart[existingItemIndex],
                              total: state.cart[existingItemIndex].total + action.payload.defaultPrice,
                              quantity: state.cart[existingItemIndex].quantity + state.xx99mkIQuantity,
                          };
                          if (updatedCart[existingItemIndex].total === 0) {
                              // Remove the item from the cart if its total becomes 0
                              state.cart = updatedCart.filter((item) => item.total !== 0);
                          } else {
                              state.cart = updatedCart;
                          }
                     }
                    }   
            }
            if(action.payload.type === 'remove-markI'){
                if(state.xx99mkIQuantity !== 0){
                    state.xx99mkIQuantity -= 1

                    if(state.cart.length === 0 ) {
                        state.cart = [];
                        return
                    }
                    const existingItemIndex = state.cart.findIndex(
                        (cartItem) => cartItem.name === action.payload.name
                      );
                     
                      if (existingItemIndex !== -1) {
                         //Earphones YX-1 
                         if(state.cart[existingItemIndex].name === 'xx99mkI'){
                              // Item already exists, create a new array with the updated item
                              const updatedCart = [...state.cart];
                              updatedCart[existingItemIndex] = {
                                  ...state.cart[existingItemIndex],
                                  total: state.cart[existingItemIndex].total - action.payload.defaultPrice,
                                  quantity: state.cart[existingItemIndex].quantity - state.xx99mkIQuantity,
                              };
                              if (updatedCart[existingItemIndex].total === 0) {
                                  // Remove the item from the cart if its total becomes 0
                                  state.cart = updatedCart.filter((item) => item.total !== 0);
                              } else {
                                  state.cart = updatedCart;
                              }
                         }
                        }   
                }
            }
            if(action.payload.type === 'add-markII'){
                state.xx99mkIIQuantity += 1

                 
                const existingItemIndex = state.cart.findIndex(
                    (cartItem) => cartItem.name === action.payload.name
                  );
                 
                  if (existingItemIndex !== -1) {
                     //Earphones YX-1 
                     if(state.cart[existingItemIndex].name === 'xx99mkII'){
                          // Item already exists, create a new array with the updated item
                          const updatedCart = [...state.cart];
                          updatedCart[existingItemIndex] = {
                              ...state.cart[existingItemIndex],
                              total: state.cart[existingItemIndex].total + action.payload.defaultPrice,
                              quantity: state.cart[existingItemIndex].quantity + state.xx99mkIIQuantity,
                          };
                          if (updatedCart[existingItemIndex].total === 0) {
                              // Remove the item from the cart if its total becomes 0
                              state.cart = updatedCart.filter((item) => item.total !== 0);
                          } else {
                              state.cart = updatedCart;
                          }
                     }
                    }   
            }
            if(action.payload.type === 'remove-markII'){
                if(state.xx99mkIIQuantity !== 0){
                    state.xx99mkIIQuantity -= 1

                    if(state.cart.length === 0 ) {
                        state.cart = [];
                        return
                    }
                    const existingItemIndex = state.cart.findIndex(
                        (cartItem) => cartItem.name === action.payload.name
                      );
                     
                      if (existingItemIndex !== -1) {
                         //Earphones YX-1 
                         if(state.cart[existingItemIndex].name === 'xx99mkII'){
                              // Item already exists, create a new array with the updated item
                              const updatedCart = [...state.cart];
                              updatedCart[existingItemIndex] = {
                                  ...state.cart[existingItemIndex],
                                  total: state.cart[existingItemIndex].total - action.payload.defaultPrice,
                                  quantity: state.cart[existingItemIndex].quantity - state.xx99mkIIQuantity,
                              };
                              if (updatedCart[existingItemIndex].total === 0) {
                                  // Remove the item from the cart if its total becomes 0
                                  state.cart = updatedCart.filter((item) => item.total !== 0);
                              } else {
                                  state.cart = updatedCart;
                                 
                              }
                         }
                        }   
                }
            }
            if(action.payload.type === 'add-xx59'){
                state.xx59Quantity += 1

                 
                const existingItemIndex = state.cart.findIndex(
                    (cartItem) => cartItem.name === action.payload.name
                  );
                 
                  if (existingItemIndex !== -1) {
                     //Earphones YX-1 
                     if(state.cart[existingItemIndex].name === 'xx59'){
                          // Item already exists, create a new array with the updated item
                          const updatedCart = [...state.cart];
                          updatedCart[existingItemIndex] = {
                              ...state.cart[existingItemIndex],
                              total: state.cart[existingItemIndex].total + action.payload.defaultPrice,
                              quantity: state.cart[existingItemIndex].quantity + state.xx59Quantity,
                          };
                          if (updatedCart[existingItemIndex].total === 0) {
                              // Remove the item from the cart if its total becomes 0
                              state.cart = updatedCart.filter((item) => item.total !== 0);
                          } else {
                              state.cart = updatedCart;
                          }
                     }
                    }   
            }
            if(action.payload.type === 'remove-xx59'){
                if(state.xx59Quantity !== 0){
                    state.xx59Quantity-= 1

                    
                    if(state.cart.length === 0 ) {
                        state.cart = [];
                        return
                    }
                    const existingItemIndex = state.cart.findIndex(
                        (cartItem) => cartItem.name === action.payload.name
                      );
                     
                      if (existingItemIndex !== -1) {
                         //Earphones YX-1 
                         if(state.cart[existingItemIndex].name === 'xx59'){
                              // Item already exists, create a new array with the updated item
                              const updatedCart = [...state.cart];
                              updatedCart[existingItemIndex] = {
                                  ...state.cart[existingItemIndex],
                                  total: state.cart[existingItemIndex].total - action.payload.defaultPrice,
                                  quantity: state.cart[existingItemIndex].quantity - state.xx59Quantity,
                              };
                              if (updatedCart[existingItemIndex].total === 0) {
                                  // Remove the item from the cart if its total becomes 0
                                  state.cart = updatedCart.filter((item) => item.total !== 0);
                              } else {
                                  state.cart = updatedCart;
                              }
                         }
                        }   
                }
            }
            if(action.payload.type === 'add-zx9'){
                state.zx9Qunatity += 1;

                 
                const existingItemIndex = state.cart.findIndex(
                    (cartItem) => cartItem.name === action.payload.name
                  );
                 
                  if (existingItemIndex !== -1) {
                     //Earphones YX-1 
                     if(state.cart[existingItemIndex].name === 'zx9'){
                          // Item already exists, create a new array with the updated item
                          const updatedCart = [...state.cart];
                          updatedCart[existingItemIndex] = {
                              ...state.cart[existingItemIndex],
                              total: state.cart[existingItemIndex].total + action.payload.defaultPrice,
                              quantity: state.cart[existingItemIndex].quantity + state.zx9Qunatity,
                          };
                          if (updatedCart[existingItemIndex].total === 0) {
                              // Remove the item from the cart if its total becomes 0
                              state.cart = updatedCart.filter((item) => item.total !== 0);
                          } else {
                              state.cart = updatedCart;
                          }
                     }
                    }   
                
            }
            if(action.payload.type === 'remove-zx9'){
                if(state.zx9Qunatity !== 0){
                    state.zx9Qunatity-= 1

                    if(state.cart.length === 0 ) {
                        state.cart = [];
                        return
                    }
                    const existingItemIndex = state.cart.findIndex(
                        (cartItem) => cartItem.name === action.payload.name
                      );
                     
                      if (existingItemIndex !== -1) {
                         //Earphones YX-1 
                         if(state.cart[existingItemIndex].name === 'zx9'){
                              // Item already exists, create a new array with the updated item
                              const updatedCart = [...state.cart];
                              updatedCart[existingItemIndex] = {
                                  ...state.cart[existingItemIndex],
                                  total: state.cart[existingItemIndex].total - action.payload.defaultPrice,
                                  quantity: state.cart[existingItemIndex].quantity - state.zx9Qunatity
                              };
                              if (updatedCart[existingItemIndex].total === 0) {
                                  // Remove the item from the cart if its total becomes 0
                                  state.cart = updatedCart.filter((item) => item.total !== 0);
                              } else {
                                  state.cart = updatedCart;
                              }
                         }
                        }   
                }
            }
            if(action.payload.type === 'add-zx7'){
                state.zx7Quantity +=1

                 
                const existingItemIndex = state.cart.findIndex(
                    (cartItem) => cartItem.name === action.payload.name
                  );
                 
                  if (existingItemIndex !== -1) {
                     //Earphones YX-1 
                     if(state.cart[existingItemIndex].name === 'zx7'){
                          // Item already exists, create a new array with the updated item
                          const updatedCart = [...state.cart];
                          updatedCart[existingItemIndex] = {
                              ...state.cart[existingItemIndex],
                              total: state.cart[existingItemIndex].total + action.payload.defaultPrice,
                              quantity: state.cart[existingItemIndex].quantity + state.zx7Quantity,
                          };
                          if (updatedCart[existingItemIndex].total === 0) {
                              // Remove the item from the cart if its total becomes 0
                              state.cart = updatedCart.filter((item) => item.total !== 0);
                          } else {
                              state.cart = updatedCart;
                          }
                     }
                    }   
            }
            if(action.payload.type === 'remove-zx7'){
                if(state.zx7Quantity !== 0){
                    state.zx7Quantity-= 1

                    if(state.cart.length === 0 ) {
                        state.cart = [];
                        return
                    }
                    const existingItemIndex = state.cart.findIndex(
                        (cartItem) => cartItem.name === action.payload.name
                      );
                     
                      if (existingItemIndex !== -1) {
                         //Earphones YX-1 
                         if(state.cart[existingItemIndex].name === 'zx7'){
                              // Item already exists, create a new array with the updated item
                              const updatedCart = [...state.cart];
                              updatedCart[existingItemIndex] = {
                                  ...state.cart[existingItemIndex],
                                  total: state.cart[existingItemIndex].total - action.payload.defaultPrice,
                                  quantity: state.cart[existingItemIndex].quantity - state.zx7Quantity,
                              };
                              if (updatedCart[existingItemIndex].total === 0) {
                                  // Remove the item from the cart if its total becomes 0
                                  state.cart = updatedCart.filter((item) => item.total !== 0);
                              } else {
                                  state.cart = updatedCart;
                              }
                         }
                        }   
                }
            }
        }
    },
    removeAll:{
        reducer(state,action){
            state.cart = [];
            state.yxQuantity = 0;
            state.xx99mkIIQuantity = 0;
            state.xx99mkIQuantity = 0;
            state.xx59Quantity = 0;
            state.zx9Qunatity = 0;
            state.zx7Quantity = 0;
            state.cartStatus = false;
            state.showCart = false;
        }
    },
    showCart:{
        reducer(state,action){
            state.showCart = !state.showCart
            
        }
    },
    showSummary:{
        reducer(state,action){
            state.showSummary = !state.showSummary
            
        }
    }
  },

  extraReducers(builder) {
 
  },
});

export const getCart = (state) => state.cart
export const getEarphoneQuantity = (state) => state.yxQuantity
export const getXX99MKIIQuantity = (state) => state.xx99mkIIQuantity
export const getXX99MKIQuantity = (state) => state.xx99mkIQuantity
export const getXX59Quantity = (state) => state.xx59Quantity
export const getZX9Quantity = (state) => state.zx9Qunatity
export const getZX7Quantity = (state) => state.zx7Quantity
export const getShowCart = (state) => state.showCart
export const getCartStatus = (state) => state.cartStatus;
export const getScrollStatus = (state) => state.scroll;
export const getSummary = (state) => state.showSummary;
export const { 
    addItem,
    updateQuantity,
    removeAll,
    showCart,
    showSummary
} = cartSlice.actions;

export default cartSlice.reducer;