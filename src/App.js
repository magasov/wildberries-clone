import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Auth from "./pages/Auth/Auth";

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
      <Auth user={user} setUser={setUser} />
      <Footer />
    </>
  );
}

export default App;
