import { Outlet } from "react-router-dom";
import Sidebar from "./components/Showroom/Sidebar/Sidebar";
import { useMediaQuery } from "usehooks-ts";
import { breakpoints } from "./constants/breakpoints";

const Layout = () => {
  const isTablet = useMediaQuery(breakpoints.tablet);
  return isTablet ? (
    <div> Not Responsive yet, switch to larger screen</div>
  ) : (
    <>
      <main>
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
