import { Route, Routes } from "react-router-dom";
import { ThemeProvider, useTheme } from "../components/ui/theme-provider";
import NavBar from "../components/navbar";
import Home from "./Home";
import About from "./About";
import LogIn from "./auth/LogIn";
import SignUp from "./auth/SignUp";
import SearchDay from "./SearchDay";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <div className="pb-40">
          {/* NAV */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-siamo" element={<About />} />
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/storico" element={<SearchDay />} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
