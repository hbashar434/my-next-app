import Navbar from "@/components/Navbar";

const WithLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="py-6">{children}</div>
      <footer>Footer</footer>
    </div>
  );
};

export default WithLayout;
