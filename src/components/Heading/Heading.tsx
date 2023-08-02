import { Typography } from "@mui/material";

interface HeadingProps {
  title: string;
  author: string;
  date: string;
}

const Heading = (props: HeadingProps) => {
  const { title, author, date } = props;

  const dateValue = new Date(date);
  const year = dateValue.getFullYear();
  const month = dateValue.getMonth();
  const day = dateValue.getDate();

  const fullDate = `${day}/${month}/${year}`;

  return (
    <>
      <Typography variant="h3" component="h1">
        {title}
      </Typography>
      <Typography color="orange" fontStyle="italic" mb={2}>
        by {author} | {fullDate}
      </Typography>
    </>
  );
};

export default Heading;
