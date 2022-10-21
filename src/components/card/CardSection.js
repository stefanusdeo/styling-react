import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function CardSection({ image, header, date }) {
  return (
    <Card sx={{ maxWidth: 345, m: 5 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {header}
        </Typography>
      </CardContent>
    </Card>
  );
}
