import { createAsyncThunk } from "@reduxjs/toolkit";

import { DataProps } from "../types/articleTypes";

const ENDPOINT = `${
  import.meta.env.VITE_BASE_URL
}/delivery/v1/content/db4930e9-7504-4d9d-ae6c-33facca754d1`;

export const getArticleData = createAsyncThunk<DataProps>(
  "article/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(ENDPOINT);

      if (!response.ok) {
        throw new Error("Ups, Something went wrong");
      }

      const data = await response.json();

      return data.elements;
    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
    }
  }
);
