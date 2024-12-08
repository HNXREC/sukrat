'use client';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">Sukrat</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="/services" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <div className="flex items-center space-x-4">
              <a href="/signin" className="text-gray-600 hover:text-gray-900">Sign In</a>
              <a href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;