import { useEffect } from "react";

import { Container, Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { getArticleData } from "../../store/actions";

import Heading from "../Heading/Heading";
import ArticleBody from "../ArticleBody/ArticleBody";

const Article = () => {
  const {
    articleData: data,
    loading,
    error,
  } = useAppSelector(({ asrticleState }) => asrticleState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loading === "idle") dispatch(getArticleData());
  }, []);

  console.log(loading);

  if (error) return <>{error}</>;
  if (loading === "pending" || loading === "idle") return <>loading...</>;

  return (
    <Container maxWidth="md">
      <Heading
        title={data.heading.value}
        author={data.author.value}
        date={data.date.value}
      />

      <Box
        component="img"
        src={`${import.meta.env.VITE_BASE_URL}/${
          data.mainImage.value.leadImage.asset.resourceUri
        }`}
        alt={data.mainImage.value.leadImage.asset.altText}
        sx={{ maxWidth: "100%" }}
      />
      <ArticleBody values={data.body.values} />
    </Container>
  );
};

export default Article;
