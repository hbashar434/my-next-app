import Link from "next/link";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Profile",
    path: "/profile",
  },
  {
    title: "Blogs",
    path: "/blogs",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-200 text-gray-700">
      <div className="container flex justify-between h-16 mx-auto">
        <Link
          href="/"
          aria-label="Back to homepage"
          className="flex items-center p-2 text-3xl text-indigo-700 font-bold"
        >
          NEXT-APP
        </Link>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          {navLinks.map((link, index) => (
            <li key={index} className="flex">
              <Link
                href={link.path}
                className="flex items-center px-4 -mb-1 border-b-2"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded bg-blue-500 text-white">
            Sign up
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
