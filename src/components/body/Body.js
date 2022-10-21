import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import CardSection from "../card/CardSection";

export default function Body() {
  const [listData, setListData] = useState([]);

  const fetchingData = async () => {
    const payload = {
      page: 1,
      page: 10,
      append: "small_image",
      sort: "-published_at",
    };
    await fetch(
      "https://suitmedia-backend.suitdev.com/api/ideas?page[number]=1&page[size]=10&append[]=small_image&append[]=medium_image&sort=-published_at",
      {
        method: "GET", // default, so we can ignore
      }
    )
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <Grid container spacing={1} style={{ mt: 3 }}>
      <Grid item xs={4}>
        <CardSection header={"halo"} date="20-10-2022" />
      </Grid>
      <Grid item xs={4}>
        <CardSection header={"halo"} date="20-10-2022" />
      </Grid>
      <Grid item xs={4}>
        <CardSection header={"halo"} date="20-10-2022" />
      </Grid>
      <Grid item xs={4}>
        <CardSection header={"halo"} date="20-10-2022" />
      </Grid>
      <Grid item xs={4}>
        <CardSection header={"halo"} date="20-10-2022" />
      </Grid>
      <Grid item xs={4}>
        <CardSection header={"halo"} date="20-10-2022" />
      </Grid>
      <Grid item xs={4}>
        <CardSection header={"halo"} date="20-10-2022" />
      </Grid>
      <Grid item xs={4}>
        <CardSection header={"halo"} date="20-10-2022" />
      </Grid>
      <Grid item xs={4}>
        <CardSection header={"halo"} date="20-10-2022" />
      </Grid>
    </Grid>
  );
}
