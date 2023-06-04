import { Outlet } from "react-router-dom";
import Sidebar from "./components/Showroom/Sidebar/Sidebar";
import { useMediaQuery } from "usehooks-ts";
import { breakpoints } from "./constants/breakpoints";
import WorkInProgress from "./components/Showroom/WorkInProgress/WorkInProgress";

const Layout = () => {
  const isTablet = useMediaQuery(breakpoints.tablet);
  return isTablet ? (
    <WorkInProgress />
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
