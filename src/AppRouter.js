import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainContent from "./components/MainContent";
import TopMenu from "./components/TopMenu";

const AppRouter = (props) => {
  return (
    <>
      <Router>
        <TopMenu id="back-to-top-anchor" />
        <Routes>
          <Route exact path="/" element={<MainContent page="home" />} />
          <Route exact path="/home" element={<MainContent page="home" />} />
          <Route exact path="/radio" element={<MainContent page="radio" />} />
          <Route exact path="/code" element={<MainContent page="code" />} />
          <Route exact path="/crypto" element={<MainContent page="crypto" />} />
          <Route exact path="/login" element={<MainContent page="login" />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
