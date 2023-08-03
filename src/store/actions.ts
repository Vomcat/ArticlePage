import { createAsyncThunk } from "@reduxjs/toolkit";

interface MyError {
  errorMessage: string;
}
export const getArticleData = createAsyncThunk("article/fetch", async () => {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_BASE_URL
      }/delivery/v1/content/db4930e9-7504-4d9d-ae6c-33facca754d1`
    );

    const data = await response.json();

    return data.elements;
  } catch (err) {
    return "Opps there seems to be an error";
  }
});
