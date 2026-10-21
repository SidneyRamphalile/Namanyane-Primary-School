const Footer = () => {
  const year = new Date().getFullYear();

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
                051 873 9154
              </a>
            </li>
            <li>
              🔥 Thaba Nchu Fire Dept:{" "}
              <a
                href="tel:+27519109000"
                className="hover:text-yellow-400 underline"
              >
                051 873 2079
              </a>
            </li>
            <li>
              🏥 JS Moroka Hospital:{" "}
              <a
                href="tel:+27519295000"
                className="hover:text-yellow-400 underline"
              >
                051 873 9800
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
                href="mailto:namanyaneps1@gmail.com"
                className="hover:text-yellow-400 underline"
              >
                namanyaneps1@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="max-w-7xl mx-auto border-t border-white/20 mt-8 pt-8 flex flex-col items-center gap-3 text-center">
        <div className="flex flex-col items-center gap-2 text-sm text-white/70 sm:flex-row sm:gap-4">
          <p>&copy; {year} Namanyane Primary School.</p>
          <span
            className="hidden h-4 w-px bg-white/30 sm:block"
            aria-hidden="true"
          ></span>
          <p>
            Developed by{" "}
            <a
              href="https://sidneyramphalile.online"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-yellow-400 transition hover:text-yellow-300"
            >
              Sidney
            </a>
          </p>
        </div>
        <p className="text-xs text-white/50">
          Website &copy; {year} Sidney Ramphalile
        </p>
      </div>
    </footer>
  );
};

export default Footer;
