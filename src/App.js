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
  const [target, setTarget] = useState();
  const url = new URL(window.location.href);
  const bu_id = url.searchParams.get("bu_id");
  const order_id = url.searchParams.get("order_id");
  const [orderFound, setOrderFound] = useState(true);
  const fetchData = async () => {
    const response = await fetch(
      `${ENDPOINT}/api/businesses/${bu_id}/order/${order_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const comp = await response.json();

    if (!response.ok) {
      setOrderFound(false);
      console.log(comp, "rejected");
    } else {
      setTarget({
        ...comp.fbdk_config,
        orders: {
          ...comp.order,
        },
      });
      setData({
        ...comp.fbdk_config,
        orders: {
          ...comp.order,
        },
      });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MainPage
              data={data}
              orderFound={orderFound}
              setOrderFound={setOrderFound}
              target={target}
              setTarget={setTarget}
            />
          }
        />
      </Routes>
    </Router>
  );
};
export default App;
