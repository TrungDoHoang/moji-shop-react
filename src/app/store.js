import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/productsSlice'
import cartReducer from './reducers/cartSlice'
import categoryReducer from './reducers/categorySlice'
import newsReducer from './reducers/newsSlice'

export const store = configureStore({
  reducer: {
    productsReducer,
    cartReducer,
    categoryReducer,
    newsReducer,
  },
});
