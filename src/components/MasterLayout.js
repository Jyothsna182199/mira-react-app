import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  CssBaseline,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Switch,
  FormControlLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

function MasterLayout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);
  const [isDashboardOpen, setIsDashboardOpen] = useState(true);
  const [isAlertsOpen, setIsAlertsOpen] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Novi", path: "/novi" },
    { name: "City", path: "/city" },
    { name: "Valley", path: "/valley" },
    { name: "Heights", path: "/heights" },
    { name: "Atlanta", path: "/atlanta" },
  ];

  const alertItems = [
    { name: "Home Page Facilities", path: "/homepage" },
    { name: "Vizag Facilities", path: "/vizagfacilities" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleMenuClick = (path) => {
    navigate(path);
    if (isMobile) setIsSidebarOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: darkMode ? "#121212" : "#fff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#0A1929",
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton color="inherit" edge="start" onClick={toggleSidebar} sx={{ mr: 2 }}>
              {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Miracle Control Tower
          </Typography>
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="Logo"
            style={{ height: "40px", marginRight: "10px", marginLeft: "auto" }}
          />
        </Toolbar>
      </AppBar>

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isSidebarOpen}
        onClose={toggleSidebar}
        sx={{
          width: isSidebarOpen ? 250 : 0,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
            backgroundColor: darkMode ? "#333" : "#fff",
            color: darkMode ? "#fff" : "#000",
             overflow: "hidden"
          },
        }}
      >
        <List sx={{ mt: 8 }}>
          <Accordion
            expanded={isAlertsOpen}
            onChange={() => setIsAlertsOpen(!isAlertsOpen)}
            sx={{ backgroundColor: darkMode ? "#444" : "#f5f5f5", color: darkMode ? "#fff" : "#000" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: darkMode ? "#fff" : "#000" }} />}>
              <Typography sx={{ color: darkMode ? "#90caf9" : "#4682B4", fontWeight: "bold" }}>HomePage Facilities</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {alertItems.map((item) => (
                  <ListItem key={item.name} disablePadding>
                    <ListItemButton
                      onClick={() => handleMenuClick(item.path)}
                      sx={{
                        "&:hover": { backgroundColor: "#0A1929", color: "#ffffff" },
                        color: darkMode ? "#ffffff" : "#000",
                      }}
                    >
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={isDashboardOpen}
            onChange={() => setIsDashboardOpen(!isDashboardOpen)}
            sx={{ backgroundColor: darkMode ? "#444" : "#f5f5f5", color: darkMode ? "#fff" : "#000" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: darkMode ? "#fff" : "#000" }} />}>
              <Typography sx={{ color: darkMode ? "#90caf9" : "#4682B4", fontWeight: "bold" }}>DeviceStatus Dashboards</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {menuItems.map((item) => (
                  <ListItem key={item.name} disablePadding>
                    <ListItemButton
                      onClick={() => handleMenuClick(item.path)}
                      sx={{
                        "&:hover": { backgroundColor: "#0A1929", color: "#ffffff" },
                        color: darkMode ? "#ffffff" : "#000",
                      }}
                    >
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={isSettingsOpen}
            onChange={() => setIsSettingsOpen(!isSettingsOpen)}
            sx={{ backgroundColor: darkMode ? "#444" : "#f5f5f5", color: darkMode ? "#fff" : "#000" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: darkMode ? "#fff" : "#000" }} />}>
              <Typography sx={{ color: darkMode ? "#90caf9" : "#4682B4", fontWeight: "bold" }}>Settings</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControlLabel
                control={<Switch checked={darkMode} onChange={() => setDarkMode((prev) => !prev)} />}
                label="Dark Mode"
              />
            </AccordionDetails>
          </Accordion>

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleMenuClick("/about")}
              sx={{
                "&:hover": { backgroundColor: "#0A1929", color: "#ffffff" },
                color: darkMode ? "#ffffff" : "#000",
              }}
            >
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          mb: 8, // Added margin-bottom to prevent overlap with the footer
          ml: isSidebarOpen && !isMobile ? 30 : 0,
          overflow: "hidden"
        }}
      >
        {children}
      </Box>

      <Box
        component="footer"
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100vw",
          left: 0, 
          backgroundColor: "#0A1929",
          color: "white",
          py: 2,
          textAlign: "center",
          zIndex: 1201, 
          overflow: "hidden"
        }}
      >
        <Typography variant="body2">© 2025 Miracle Control Tower</Typography>
      </Box>
    </Box>
  );
}

export default MasterLayout;
