import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import SubHeader from "./components/shared/SubHeader";

const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname == "/" && <SubHeader />}
      {pathname == "/" ? <Header/> : <Header className="bg-white border-b" />}
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
