import { useState } from 'react';
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import { Box, Typography, useTheme } from '@mui/material';

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb="0.25rem"
      p="0.5rem 0rem"
      color={palette.grey[300]}
    >
      {/* Left Side */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="0.75rem"
      >
        <SchoolIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          TS Demo
        </Typography>
      </Box>
      {/* Right Side */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box sx={{ "&:hover": {
          color: palette.primary[100]
        }}}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
              margin: "0rem 1rem"
            }}
          >
            Dashboard
          </Link>
          <Link
            to="/apply"
            onClick={() => setSelected("apply")}
            style={{
              color: selected === "apply" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Apply
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar;