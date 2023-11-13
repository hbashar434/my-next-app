import Sidebar from "./Sidebar";

export const metadata = {
  title: "Dashboard | Next App",
  description: "next app",
};

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex gap-3">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
