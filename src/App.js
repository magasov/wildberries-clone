import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Auth from "./pages/Auth/Auth";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddProduct from "./pages/AddProduct/AddProduct";

function App() {
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem("user")) !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);
  return (
    <>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/addproduct"
          element={<AddProduct user={user} setUser={setUser} />}
        />
        <Route path="/auth" element={<Auth user={user} setUser={setUser} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
