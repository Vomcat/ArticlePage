export interface ArticleData {
  articleData: DataProps;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: null | unknown;
}

export interface DataProps {
  author: DataStringProps;
  body: DataArrayProps;
  date: DataStringProps;
  heading: DataStringProps;
  mainImage: ImageProps;
}

export interface DataStringProps {
  value: string;
}

export interface DataArrayProps {
  values: [];
}

export interface ImageProps {
  value: {
    leadImage: {
      asset: { resourceUri: string; altText: string };
    };
  };
}
