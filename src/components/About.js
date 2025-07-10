import React from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh", // Full height of the viewport
        backgroundImage: `url(${process.env.PUBLIC_URL}/about.png)`, // Load from public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white", // White text for better readability
        textAlign: "center",
        p: 3, // Padding for better spacing
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
          zIndex: 1,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 2, maxWidth: "800px" }}>
        <Typography variant="h4" gutterBottom>
          About MiraCT – Observability & System Monitoring
        </Typography>

        <Typography variant="body1" paragraph>
          MiraCT is the central observability and monitoring platform for Miract, 
          a premier candy-based company with a global presence. With operations spanning 
          <strong> Atlanta, Novi, and India</strong>, Miract is renowned for its high-quality 
          confections, seamlessly blending <strong>innovation and efficiency</strong> to delight 
          customers worldwide.
        </Typography>

        <Typography variant="body1" paragraph>
          To support its large-scale <strong>candy production and distribution</strong>, 
          Miract has integrated a range of advanced <strong>automation and logistics systems</strong> 
          to ensure efficiency and precision in handling its sweet creations. These include:
        </Typography>

        <ul style={{ textAlign: "left" }}>
          <li><strong>ASRS (Automated Storage and Retrieval Systems)</strong> – Enhancing storage management and retrieval efficiency.</li>
          <li><strong>Pallet Shuttles</strong> – Automating material handling for quick and safe transportation.</li>
          <li><strong>Trolley Systems</strong> – Optimizing internal logistics for streamlined operations.</li>
          <li><strong>Gantry Systems</strong> – Providing precision movement for large-scale confectionery loads.</li>
          <li><strong>AGV (Automated Guided Vehicle) Systems)</strong> – Ensuring seamless navigation and delivery of candy packages.</li>
        </ul>

        <Typography variant="body1" paragraph>
          With <strong>MiraCT</strong>, Miract is not just making candy—it's revolutionizing 
          <strong> automation, logistics, and operational excellence</strong> in the confectionery industry. 🚀🍬
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
