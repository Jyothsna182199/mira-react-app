import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";

function Dashboard() {
  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 3, textAlign: "center" }}>
        
        {/* SVG Image with Spacing */}
        <Box sx={{ marginTop: 3, marginBottom: 4 }}>  
          <img 
            src={`${process.env.PUBLIC_URL}/logo.png`} 
            alt="Dashboard Illustration" 
            style={{ width: "100%", maxWidth: "400px", height: "100%" }} 
          />
        </Box>

        {/* Headline */}
        <Typography variant="h4" paragraph>
          Welcome to the MiraCT Dashboards
        </Typography>

        {/* Body Text */}
        <Typography variant="body1">
          Select a Dashboard from the sidebar to monitor panels.
        </Typography>
        
      </Paper>

      {/* Floating Share Button */}
      
    </Container>
  );
}

export default Dashboard;
