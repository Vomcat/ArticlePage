import { createSlice } from "@reduxjs/toolkit";
import { getArticleData } from "./actions";

import { ArticleData } from "../types/articleTypes";

const initialState: ArticleData = {
  articleData: {
    author: { value: "" },
    body: { values: [] },
    date: { value: "" },
    heading: { value: "" },
    mainImage: {
      value: {
        leadImage: {
          asset: {
            resourceUri: "",
            altText: "",
          },
        },
      },
    },
  },
  loading: "idle",
  error: null,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticleData.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getArticleData.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.articleData = action.payload;
    });
    builder.addCase(getArticleData.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
  },
});

export default articleSlice.reducer;
