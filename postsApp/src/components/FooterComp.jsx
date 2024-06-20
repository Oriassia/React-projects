import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function FooterComp() {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Instagram Clone
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        A simple Instagram-like website created with React and Material-UI.
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {"© "}
        {new Date().getFullYear()}
        {" Your Website"}
      </Typography>
    </Box>
  );
}

export default FooterComp;
