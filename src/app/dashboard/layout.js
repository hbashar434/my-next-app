export const metadata = {
  title: "Dashboard | Next App",
  description: "next app",
};

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div>Sidebar</div>
      {children}
    </div>
  );
};

export default DashboardLayout;
