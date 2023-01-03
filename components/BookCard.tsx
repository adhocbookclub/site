import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import type { Book } from "../utils/types";

interface BookCardProps {
  book: Book;
}

const BookCard = (props: BookCardProps) => {
  const {
    book: { title, author, goodreadsUrl, cover },
  } = props;

  return (
    <Card
      sx={{
        width: 180,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {cover ? (
        <CardMedia>
          <Image src={cover} alt={title} width={180} height={270} />
        </CardMedia>
      ) : null}

      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography>{title}</Typography>
        <Typography variant="caption" color="textSecondary">
          {author}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton
          component={Link}
          href={goodreadsUrl}
          target="_blank"
          aria-label="Goodreads"
          size="small"
        >
          <Avatar
            sx={{ color: "#927f64", bgcolor: "#d6d0c4", width: 24, height: 24 }}
          >
            G
          </Avatar>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default BookCard;
