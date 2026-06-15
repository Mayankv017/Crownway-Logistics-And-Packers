const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-linear-to-b from-[#0b1535]/35 via-[#10204a]/50 to-transparent backdrop-blur-md border-b border-black/1">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <div className="flex items-center justify-center">
              <img
                src="/image.png"
                alt="Crownway Logistics Logo"
                // className="h-14 w-auto object-contain"
                className="h-30 w-auto object-contain mix-blend-screen"
              />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg leading-none">
                Crownway Logistics
                <br />
                And Packers
              </h1>
              <p className="text-gray-300 text-xs">Smart Global Shipping</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-white uppercase tracking-wide">
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Services
            </a>
            {/* <a
              href="#"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              About Us
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Tracking
            </a> */}
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Trip Estimation
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-white/10 text-white px-5 py-2 rounded-md border border-white/20 hover:bg-white/20 transition-all duration-300">
              Track Shipment
            </button>

            <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-semibold transition-all duration-300">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
