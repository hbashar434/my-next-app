import Link from "next/link";

const navLinks = [
  {
    path: "/dashboard",
    label: "Dashboard",
  },
  {
    path: "/dashboard/add-product",
    label: "Add Product",
  },
  {
    path: "/dashboard/manage-product",
    label: "Manage Product",
  },
  {
    path: "/",
    label: "Home",
  },
];

const Sidebar = () => {
  return (
    <aside className="flex flex-col w-64 h-screen px-5 py-8 mr-4 overflow-y-auto bg-gray-200 border-r rtl:border-r-0 rtl:border-l border-gray-400">
      <h1 className="text-3xl font-bold text-indigo-600">Dashboard</h1>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="flex-1 -mx-3 space-y-3 ">
          <div className="relative mx-3">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>

            <input
              type="text"
              className="w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              placeholder="Search"
            />
          </div>

          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="mx-2 text-sm font-medium">{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
