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
    }),
    createApplicant: build.mutation<getApplicantsResponse, Partial<getApplicantsResponse>>({
      query: (applicant) => ({
        url: "/awesome/applicant",
        method: "POST",
        body: applicant
      }),
      invalidatesTags: ["ApplicantList"]
    }),
    deleteApplicant: build.mutation<void, number>({
      query: (id) => ({
        url: `/awesome/applicant/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["ApplicantList"]
    })
  })
})

export const { useGetApplicantListInfoQuery, useCreateApplicantMutation, useDeleteApplicantMutation } = api;
