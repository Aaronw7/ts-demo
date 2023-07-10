import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/pages/navbar";
import Dashboard from "@/pages/dashboard";
import { Provider } from "react-redux";
import store from "./state/store";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])

  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
              <Navbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/apply" element={<div>Apply</div>} />
              </Routes>
            </Box>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
