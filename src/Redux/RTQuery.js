import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shoeApi = createApi({
    reducerPath : 'showApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:3000/'
    }),
    endpoints : builder => ({
        shoeData : builder.query({
            query : () => '/shoePage'
        })
    })
})

export const {useShoeDataQuery} = shoeApi