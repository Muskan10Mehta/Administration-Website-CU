//import Layout from "./pages/home/Layout";
import Header from "./common/components/header/header";
import Home from "./common/components/home/home";
import Dashboard from "./pages/admin/Dashboard";
import ProtectedRoute from "./pages/admin/ProtectedRoute";
import Login from "./pages/admin/Login";
import Introduction from "./pages/home/Introduction";
import Gallery from "./pages/home/Gallery";
import Newsletter from "./pages/home/Newsletter";
import Policies from "./pages/home/Policies";
import Support from "./pages/home/Support";
import Sustainability from "./pages/home/Sustainability";
import Team from "./pages/home/Team";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Home";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/dashboard" element={<ProtectedRoute />}>
              <Route exact path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/homePage" element={<HomePage />} />
            <Route exact path="/about" element={<Introduction />} />
            <Route exact path="/support" element={<Support />} />
            <Route exact path="/sustainability" element={<Sustainability />} />
            <Route exact path="/newsletters" element={<Newsletter />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/policies" element={<Policies />} />
            <Route exact path="/team" element={<Team />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
