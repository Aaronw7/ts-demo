import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["PersonalInfo"],
  endpoints: (build) => ({
    getPersonalInfo: build.query<void, void>({
      query: () => "personalInfo/personalInfo/",
      providesTags: ["PersonalInfo"]
    })
  })
})

export const { useGetPersonalInfoQuery } = api;
