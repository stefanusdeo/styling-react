import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import style from './navbar.module.css';

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
    window.addEventListener('scroll', controlNavbar());
    return () => {
      window.addEventListener('scroll', controlNavbar());
    };
  }, []);

  return (
    <div
      className={`${style.nav} ${
        show ? style.nav_color_transparent : style.nav_color
      }`}
    >
      <Grid container>
        <Stack direction={'row'} spacing={12}>
          <Stack sx={{ m: '15px 12em 10px 5em' }}>
            <Typography variant='h5' className={style.logo}>
              Logo
            </Typography>
          </Stack>
          <Stack>
            <ul className={style.ul}>
              <li className={style.list}>Work</li>
              <li className={style.list}>About</li>
              <li className={style.list}>Service</li>
              <li className={style.list}>Ideas</li>
              <li className={style.list}>Careers</li>
              <li className={style.list}>Contact</li>
            </ul>
          </Stack>
        </Stack>
      </Grid>
    </div>
  );
}
