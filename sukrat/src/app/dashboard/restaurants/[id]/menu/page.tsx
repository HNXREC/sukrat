'use client';
import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const MenuPage = ({ params }) => {
  const router = useRouter();
  const parameters = use(params);
  const id = parameters.id;
  
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    price: '',
    category: 'main',
  });

  useEffect(() => {
    try {
      // Load restaurant data
      const savedRestaurants = localStorage.getItem('restaurants');
      if (savedRestaurants) {
        const restaurants = JSON.parse(savedRestaurants);
        const currentRestaurant = restaurants.find(r => r.id === id);
        if (currentRestaurant) {
          setRestaurant(currentRestaurant);
        }
      }

      // Load menu items
      const savedMenuItems = localStorage.getItem(`menu-${id}`);
      if (savedMenuItems) {
        setMenuItems(JSON.parse(savedMenuItems));
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    try {
      const menuItem = {
        ...newItem,
        id: Date.now().toString(),
        price: parseFloat(newItem.price)
      };

      const updatedMenu = [...menuItems, menuItem];
      setMenuItems(updatedMenu);
      localStorage.setItem(`menu-${id}`, JSON.stringify(updatedMenu));

      // Reset form
      setNewItem({
        name: '',
        description: '',
        price: '',
        category: 'main',
      });

      alert('Menu item added successfully!');
    } catch (error) {
      console.error('Error adding menu item:', error);
      alert('Error adding menu item. Please try again.');
    }
  };

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/dashboard"
            className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
          >
            ← Back to Dashboard
          </Link>
          <div className="text-center py-12">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Rest of your component remains the same */}
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link 
            href="/dashboard"
            className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
          >
            ← Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold">{restaurant.name} - Menu</h1>
          <p className="text-gray-600">{restaurant.location}</p>
        </div>

        {/* Add Menu Item Form */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Add Menu Item</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Your existing form fields remain the same */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Item Name
              </label>
              <input
                type="text"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price (₹)
              </label>
              <input
                type="number"
                value={newItem.price}
                onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                min="0"
                step="0.01"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                value={newItem.category}
                onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              >
                <option value="starters">Starters</option>
                <option value="main">Main Course</option>
                <option value="desserts">Desserts</option>
                <option value="beverages">Beverages</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Add Menu Item
            </button>
          </form>
        </div>

        {/* Menu Items List */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Current Menu Items</h2>
          {menuItems.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No menu items added yet</p>
          ) : (
            <div className="space-y-4">
              {menuItems.map((item) => (
                <div key={item.id} className="border-b pb-4">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <p className="text-sm font-medium">₹{item.price}</p>
                      <span className="text-xs text-gray-500">{item.category}</span>
                    </div>
                    <button
                      onClick={() => {
                        const updatedMenu = menuItems.filter(i => i.id !== item.id);
                        setMenuItems(updatedMenu);
                        localStorage.setItem(`menu-${id}`, JSON.stringify(updatedMenu));
                      }}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;