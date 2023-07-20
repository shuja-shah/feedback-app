import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import MainPage from "./MainPage";

const App = () => {
  <Router>
    <Routes>
      <Route exact path="/" element={<MainPage />} />
    </Routes>
  </Router>;
};
export default App;
