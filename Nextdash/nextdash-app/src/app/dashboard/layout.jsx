import Navbar from "../component/dashboard/navbar/navbar";
import Sidebar from "../component/dashboard/sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex">
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
