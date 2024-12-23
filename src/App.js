import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import AddProduct from "./pages/AddProduct/AddProduct";
import MyProfile from "./pages/myProfile/MyProfile";
import Admin from "./pages/Admin/Admin";
import AllUser from "./pages/Admin/AllUser";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const isAdmin = user?.email === "admin@admin.ru";

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
        <Route
          path="/myprofile"
          element={<MyProfile user={user} setUser={setUser} />}
        />
        <Route
          path="/admin"
          element={
            isAdmin ? <Admin user={user} setUser={setUser} /> : <NotFound />
          }
        />
        <Route
          path="/admin/users"
          element={
            isAdmin ? <AllUser user={user} setUser={setUser} /> : <NotFound />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
