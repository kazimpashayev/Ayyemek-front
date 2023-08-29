import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { plansApi } from './apis/plansApi';
import { packagesApi } from './apis/packagesApi';
import { foodsApi } from './apis/foodsApi';

const store = configureStore({
  reducer: {
    [plansApi.reducerPath]: plansApi.reducer,
    [packagesApi.reducerPath]: packagesApi.reducer,
    [foodsApi.reducerPath]: foodsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(plansApi.middleware)
      .concat(packagesApi.middleware)
      .concat(foodsApi.middleware);
  },
});

setupListeners(store.dispatch);

export { store };
export { useGetPlansQuery, useGetPlanQuery } from './apis/plansApi';
export { useGetFoodsQuery } from './apis/foodsApi';
export { useGetPackagesQuery, useGetPackageQuery } from './apis/packagesApi';
