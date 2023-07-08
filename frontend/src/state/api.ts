import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getApplicantsResponse } from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["ApplicantList"],
  endpoints: (build) => ({
    getApplicantListInfo: build.query<Array<getApplicantsResponse>, void>({
      query: () => "/awesome/applicant",
      providesTags: ["ApplicantList"]
    })
  })
})

export const { useGetApplicantListInfoQuery } = api;
