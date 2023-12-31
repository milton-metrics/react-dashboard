import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Sidebar from "./pages/global/Sidebar";
import Navbar from "./pages/global/Navbar";
import Dashboard from "./pages/dashboard";
// import Sidebar from "./pages/global/Sidebar";
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
  const [isSidebar, setIsSidebar] = useState(true);
  
  return ( 
      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Navbar setIsSidebar={setIsSidebar} />
            <Router> {/* Wrap the Routes component with Router */}
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
            </Router> {/* Close the Router component */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
