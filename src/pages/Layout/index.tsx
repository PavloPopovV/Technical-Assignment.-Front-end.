import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const Layout = () => {
  return (
    <div className="max-w-[1200px] m-auto">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
