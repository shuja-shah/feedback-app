import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import MainPage from "./MainPage";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getBussniess } from "./redux/orders";
import { ENDPOINT } from "./redux/orders";
const App = () => {
  // const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${ENDPOINT}/api/businesses/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const comp = await response.json();

    if (!response.ok) {
      console.log(comp, "rejected");
    } else {
      setData(comp);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage data={data} />} />
      </Routes>
    </Router>
  );
};
export default App;
