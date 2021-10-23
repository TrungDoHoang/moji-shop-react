import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/productsSlice'
import cartReducer from './reducers/cartSlice'
import categoryReducer from './reducers/categorySlice'
import newsReducer from './reducers/newsSlice'
import userReducer from './reducers/userSlice'

export const store = configureStore({
  reducer: {
    userReducer,
    productsReducer,
    cartReducer,
    categoryReducer,
    newsReducer,
  },
});
