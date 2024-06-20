import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function HomePage() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My social media
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {"Your personal space to share and discover amazing moments."}
        </Typography>
        <Typography variant="body1">
          This platform allows you to connect with friends, share photos, and
          explore the latest updates from people around the world. Join our
          community and start sharing your moments today!
        </Typography>
      </Box>
    </Container>
  );
}

export default HomePage;
