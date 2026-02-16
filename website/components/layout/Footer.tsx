export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-900 text-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Resuno
              </span>
            </h3>
            <p className="text-gray-50/70 mb-4 max-w-md">
              AI Architectuur voor MKB en Startups. Van chaos naar schaalbaar momentum.
            </p>
            <p className="text-sm text-gray-50/50">
              KvK: [Nog in te vullen]<br />
              BTW: [Nog in te vullen]
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-50">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#diensten" className="text-gray-50/70 hover:text-accent transition-colors">
                  Diensten
                </a>
              </li>
              <li>
                <a href="#over" className="text-gray-50/70 hover:text-accent transition-colors">
                  Over Resuno
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-50/70 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-50">Contact</h4>
            <ul className="space-y-2 text-gray-50/70">
              <li>
                <a href="mailto:tom@resuno.nl" className="hover:text-accent transition-colors">
                  tom@resuno.nl
                </a>
              </li>
              <li>Nederland</li>
              <li className="pt-4">
                <a
                  href="https://linkedin.com/in/tomresuno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-50/20 mt-8 pt-8 text-center text-gray-50/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Resuno. Alle rechten voorbehouden.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            {" · "}
            <a href="#" className="hover:text-accent transition-colors">Algemene Voorwaarden</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
