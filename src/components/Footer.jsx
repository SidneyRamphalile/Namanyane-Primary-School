const Footer = () => {
  return (
    <footer
      className="bg-purple-800 text-white px-4 py-10 mt-auto"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {/* Emergency Contacts */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Emergency Contacts</h3>
          <ul className="space-y-1">
            <li>
              📞 Selosesha Police Station:{" "}
              <a
                href="tel:+27519108000"
                className="hover:text-yellow-400 underline"
              >
                051 910 8000
              </a>
            </li>
            <li>
              🔥 Thaba Nchu Fire Dept:{" "}
              <a
                href="tel:+27519109000"
                className="hover:text-yellow-400 underline"
              >
                051 910 9000
              </a>
            </li>
            <li>
              🏥 JS Moroka Hospital:{" "}
              <a
                href="tel:+27519295000"
                className="hover:text-yellow-400 underline"
              >
                051 929 5000
              </a>
            </li>
          </ul>
        </div>

        {/* Helpful Websites */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Helpful Websites</h3>
          <ul className="space-y-1">
            <li>
              🏫{" "}
              <a
                href="https://www.education.fs.gov.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 underline"
              >
                Free State Department of Education
              </a>
            </li>
            <li>
              💬{" "}
              <a
                href="https://www.sadag.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 underline"
              >
                SA Depression & Anxiety Group (SADAG)
              </a>
            </li>
            <li>
              📚{" "}
              <a
                href="https://www.nlsa.ac.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 underline"
              >
                National Library of South Africa
              </a>
            </li>
          </ul>
        </div>

        {/* School Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">School Info</h3>
          <ul className="space-y-1">
            <li>📍 Namanyane Primary School</li>
            <li>🕘 Office Hours: Mon-Fri, 7:30am - 2:30pm</li>
            <li>
              📧 Email:{" "}
              <a
                href="mailto:info@namanyane.co.za"
                className="hover:text-yellow-400 underline"
              >
                namanyane@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center mt-8 text-md border-t border-white/20 pt-4">
        &copy; {new Date().getFullYear()} Namanyane Primary School. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
