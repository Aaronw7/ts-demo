import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["UserInfo"],
  endpoints: (build) => ({
    getUserInfo: build.query<void, void>({
      query: () => "/awesome/applicant",
      providesTags: ["UserInfo"]
    })
  })
})

export const { useGetUserInfoQuery } = api;
