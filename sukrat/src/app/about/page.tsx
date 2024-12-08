const AboutPage = () => {
    return (
      <div className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Sukrat</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Sukrat was founded with a vision to revolutionize the way people interact with technology. 
                Our journey began with a simple idea: to create solutions that make a difference in people's lives.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                We strive to deliver innovative solutions that empower businesses and individuals to achieve their goals. 
                Through cutting-edge technology and exceptional service, we're committed to making a positive impact in the world.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-bold mb-2">Innovation</h3>
                  <p className="text-gray-600">Constantly pushing boundaries and exploring new possibilities.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-bold mb-2">Integrity</h3>
                  <p className="text-gray-600">Building trust through honest and ethical practices.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-bold mb-2">Excellence</h3>
                  <p className="text-gray-600">Delivering the highest quality in everything we do.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutPage;