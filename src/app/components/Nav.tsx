import React from "react";

const Nav = () => {
  const isLogedIn = false;
  return (
    <nav className="flex justify-between items-center py-2 px-4">
      <div>
        <h1 className="text-xl font-bold font-serif"> Promptopia</h1>
      </div>

      <div className="hidden md:flex gap-2">
        {isLogedIn ? (
          <>
            <button className="px-4 py-2 rounded-lg hover:bg-orange-500 text-slate-200 bg-gray-700 shadow-md text-sm font-semibold">
              Create New
            </button>
            <button className="px-4 py-2 rounded-lg hover:bg-gray-800 border border-gray-300 shadow-md text-sm hover:text-gray-100  font-semibold">
              Log Out
            </button>
          </>
        ) : (
          <>
            <button className="px-4 py-2 rounded-lg hover:bg-orange-500 text-slate-200 bg-gray-700 shadow-md text-sm font-semibold">
              Login
            </button>
            <button className="px-4 py-2 rounded-lg hover:bg-gray-800 border border-gray-300 shadow-md text-sm hover:text-gray-100  font-semibold">
              Sign In
            </button>
          </>
        )}
      </div>
      <div className="block md:hidden">
        <button>toggle</button>
      </div>
      {/* mobile menu */}
    </nav>
  );
};

export default Nav;
