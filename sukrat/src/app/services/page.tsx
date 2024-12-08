const ServicesPage = () => {
    const services = [
      {
        title: "Web Development",
        description: "Custom websites and web applications built with the latest technologies.",
        icon: "Web"
      },
      {
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        icon: "Mobile"
      },
      {
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and deployment services.",
        icon: "Cloud"
      },
      {
        title: "UI/UX Design",
        description: "Beautiful and intuitive user interfaces that enhance user experience.",
        icon: "Design"
      },
      {
        title: "Consulting",
        description: "Expert advice on technology strategy and implementation.",
        icon: "Expert"
      },
      {
        title: "Support",
        description: "24/7 technical support and maintenance services.",
        icon: "Support"
      }
    ];
  
    return (
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-600">Comprehensive solutions for your business needs</p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl font-bold text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
  
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-600 mb-8">Contact us to discuss your specific requirements</p>
            <a 
              href="/contact" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ServicesPage;