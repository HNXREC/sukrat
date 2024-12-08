'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddRestaurantPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    cuisine: '',
    openingHours: '',
    contactNumber: '',
    description: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Generate a unique ID for the restaurant
      const newRestaurant = {
        ...formData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      };

      // Get existing restaurants
      const existingRestaurants = JSON.parse(localStorage.getItem('restaurants') || '[]');
      
      // Add new restaurant
      const updatedRestaurants = [...existingRestaurants, newRestaurant];
      
      // Save to localStorage
      localStorage.setItem('restaurants', JSON.stringify(updatedRestaurants));
      
      console.log('Restaurant saved:', newRestaurant); // Debug log
      
      alert('Restaurant added successfully!');
      router.push('/dashboard');
      router.refresh(); // Force refresh the dashboard
      
    } catch (error) {
      console.error('Error saving restaurant:', error);
      alert('Error saving restaurant. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold mb-6">Add New Restaurant</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* ... rest of your form fields ... */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Cuisine Type
                </label>
                <input
                  type="text"
                  name="cuisine"
                  value={formData.cuisine}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Opening Hours
                </label>
                <input
                  type="text"
                  name="openingHours"
                  value={formData.openingHours}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  placeholder="e.g., Mon-Sun: 9AM-10PM"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Add Restaurant
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRestaurantPage;