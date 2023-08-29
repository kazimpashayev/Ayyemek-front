import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const foodsApi = createApi({
  reducerPath: 'foods',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000',
  }),
  endpoints(builder) {
    return {
      getFoods: builder.query({
        query: () => {
          return {
            url: '/api/foods',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useGetFoodsQuery } = foodsApi;
export { foodsApi };
