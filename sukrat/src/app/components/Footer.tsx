const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">Sukrat</h3>
              <p className="mt-2 text-gray-400">Your journey starts here.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                  <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
                  <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-gray-400">Email: info@sukrat.com</li>
                  <li className="text-gray-400">Phone: (123) 456-7890</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Sukrat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;