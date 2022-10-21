import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import style from "./navbar.module.css";

export default function Navbar() {
  const [show, setShow] = useState(true);

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar());
    return () => {
      window.addEventListener("scroll", controlNavbar());
    };
  }, []);

  return (
    <div
      className={`${style.nav} ${
        show ? style.nav_color : style.nav_color_transparent
      }`}
    >
      <Grid container>
        <Stack direction={"row"} spacing={12}>
          <Stack sx={{ m: "15px 12em 10px 5em" }}>
            <Typography variant="h5" className={style.logo}>
              Logo
            </Typography>
          </Stack>
          <Stack>
            <ul className={style.ul}>
              <li className={style.list}>
                <a className={`${style.list_link}`} href="/work">
                  Work
                </a>
              </li>
              <li className={style.list}>
                <a className={`${style.list_link}`} href="/about">
                  About
                </a>
              </li>
              <li className={style.list}>
                <a className={`${style.list_link}`} href="/service">
                  Service
                </a>
              </li>
              <li className={style.list}>
                <a className={`${style.list_link}`} href="/ideas">
                  Ideas
                </a>
              </li>
              <li className={style.list}>
                <a className={`${style.list_link}`} href="/careers">
                  Careers
                </a>
              </li>
              <li className={style.list}>
                <a className={`${style.list_link}`} href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </Stack>
        </Stack>
      </Grid>
    </div>
  );
}
