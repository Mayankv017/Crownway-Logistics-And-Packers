const FooterSec = () => {
  return (
    <footer className="bg-[#050b18] border-t border-white/10 mt-6">
      <div className="max-w-7xl mx-auto px-5 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div className="flex flex-col  justify-start -mt-10">
          <img
            src="/image.png"
            alt="Crownway Logistics"
            className="h-52 w-auto object-contain -mb-6"
          />
          <p className="text-gray-400 leading-relaxed text-sm">
            Crownway Logistics delivers reliable freight, transport, and supply
            chain solutions with speed, safety, and nationwide coverage.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-yellow-400">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Tracking
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-yellow-400">
            Services
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>Road Freight</li>
            <li>Express Delivery</li>
            <li>Warehouse Solutions</li>
            <li>Supply Chain Management</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-yellow-400">
            Contact Info
          </h3>
          <div className="space-y-4 text-gray-300 text-sm">
            <p>
              📍 Plot No. 605, Near Tata Telco, Rangpuri Mahipalpur, New
              Delhi-110037 <br /> 📍 9-B/12, Goyal Market, Sec 34, Sarai Tilpat Road
              <br />
              Faridabad - 121003
            </p>
            <p>📞 +91 99711 30955</p>
            <p>📞 +91 90131 47354</p>

            <p>✉️ support@crownwaylogistics@gmail.com</p>
            <p>⏰ Mon - Sat : 9:00 AM - 7:00 PM</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-gray-500 text-sm px-4">
        © 2026 Crownway Logistics. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSec;
