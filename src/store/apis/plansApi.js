import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const plansApi = createApi({
  reducerPath: 'plans',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000',
  }),
  endpoints(builder) {
    return {
      getPlan: builder.query({
        query: (itemId) => {
          return {
            url: `/api/plan/${itemId}`,
            method: 'GET',
          };
        },
      }),
      getPlans: builder.query({
        query: () => {
          return {
            url: '/api/plans',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useGetPlansQuery, useGetPlanQuery } = plansApi;
export { plansApi };
