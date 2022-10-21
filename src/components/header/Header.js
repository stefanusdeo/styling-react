import { Typography } from "@mui/material";
import React from "react";
import { Parallax } from "react-parallax";

export default function Header() {
  const image1 =
    "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

  const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };

  return (
    <Parallax
      bgImage={image1}
      strength={500}
      renderLayer={() => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(0, 0, 0, 0.30)`,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
          <Typography
            variant="h1"
            style={{ color: "white", textAlign: "center" }}
          >
            Ideas
          </Typography>
          <Typography
            variant="h5"
            style={{ color: "white", textAlign: "center" }}
          >
            Where All greate things begin
          </Typography>
        </div>
      </div>
    </Parallax>
  );
}
