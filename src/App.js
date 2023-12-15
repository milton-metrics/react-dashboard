import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Navbar from "./pages/global/Navbar";
// import Sidebar from "./pages/global/Sidebar";
// import Dashboard from "./pages/dashboard";
// import Pipeline from "./pages/pipeline"
// import Team from "./pages/team";
// import Quotes from "./pages/qoutes"
// import Invoices from "./pages/invoices";
// import Contacts from "./pages/contacts";
// import FAQ from "./pages/faq";

// import Bar from "./pages/bar";
// import Form from "./pages/form";
// import Line from "./pages/line";
// import Pie from "./pages/pie";
// import Geography from "./pages/geography";
// import Calendar from "./pages/calendar";

function App() {
  const [theme, colorMode] = useMode();
  
  return ( 
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/pipeline" element={<Pipeline />} />
              <Route path="/team" element={<Team />} />
              <Route path="/quotes" element={<Quotes />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Pie />} />
              <Route path="/geography" element={<Pie />} />
              <Route path="/calendar" element={<Pie />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
