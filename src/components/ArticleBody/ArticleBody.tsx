import { DataArrayProps } from "../../types/articleTypes";

const ArticleBody = (props: DataArrayProps) => {
  const { values } = props;

  return (
    <>
      {values.map((item, index) => (
        //INDEX IS BAD KEY BUT IT IS WHAT IT IS :/
        <div key={index} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </>
  );
};

export default ArticleBody;
