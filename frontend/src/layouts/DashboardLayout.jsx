import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="max-w-7xl mx-auto pt-28 px-6">
      <div className="flex gap-10">

        {/* Sidebar */}
        <DashboardSidebar />

        {/* Content */}
        <div className="flex-1">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default DashboardLayout;