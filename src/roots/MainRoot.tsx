import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";

const MainRoot = () => {
  return (
    <>
      <Navigation />
      <div className="inner__container">
        <Outlet />
      </div>
    </>
  );
};

export default MainRoot;
