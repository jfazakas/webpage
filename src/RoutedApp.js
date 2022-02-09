import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainContent from "./components/MainContent";
import TopMenu from "./components/TopMenu";

const RoutedApp = () => {
  return (
    <>
      <Router>
        <TopMenu />
        <Routes>
          <Route exact path="/" element={<MainContent page="radio" />} />
          <Route exact path="/radio" element={<MainContent page="radio" />} />
          <Route exact path="/code" element={<MainContent page="code" />} />
          <Route exact path="/crypto" element={<MainContent page="crypto" />} />
        </Routes>
      </Router>
    </>
  );
};

export default RoutedApp;
