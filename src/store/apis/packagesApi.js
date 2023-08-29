import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const packagesApi = createApi({
  reducerPath: 'packages',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000',
  }),
  endpoints(builder) {
    return {
      getPackage: builder.query({
        query: (itemId) => {
          return {
            url: `/api/package/${itemId}`,
            method: 'GET',
          };
        },
      }),
      getPackages: builder.query({
        query: () => {
          return {
            url: '/api/packages',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useGetPackagesQuery, useGetPackageQuery } = packagesApi;
export { packagesApi };
