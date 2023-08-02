import { useState, useEffect } from "react";

import { Container, Box } from "@mui/material";

import { DataProps } from "../../types/articleTypes";

import useFetch from "../../hooks/useFetch";
import Heading from "../Heading/Heading";
import ArticleBody from "../ArticleBody/ArticleBody";

const Article = () => {
  const [data, setData] = useState<DataProps>();
  const { error, sendRequest, isLoading } = useFetch();

  useEffect(() => {
    sendRequest(setData);
  }, []);

  if (error) return <>sdasd</>;

  if (isLoading) return <>sdasd</>;

  return (
    <>
      {data && (
        <>
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
              sx={{ maxWidth: "100%" }}
            />
            <ArticleBody values={data.body.values} />
          </Container>
        </>
      )}
    </>
  );
};

export default Article;
