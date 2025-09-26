import React, { useState } from 'react';
import { Heart, ArrowLeft, X } from 'lucide-react';

const CampusCartWishlist = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = [
    'All', 'Electronics', 'Books', 'Furniture', 'Clothing', 'Sports', 'Photography', 'Musical Instruments', 'Professional', 'Health & Beauty'
  ];

  const wishlistItems = [
    {
      id: 1,
      name: "MacBook Pro 13-inch",
      description: "Excellent condition, barely used. Perfect for computer science students.",
      price: 85000,
      category: "Electronics",
      dateAdded: "2024-03-15",
      mainImage: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Winter Jacket",
      description: "Warm North Face jacket, size M. Perfect for campus winters.",
      price: 9500,
      category: "Clothing",
      dateAdded: "2024-03-14",
      mainImage: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Gaming Headset",
      description: "SteelSeries Arctis 7 wireless gaming headset. Great sound quality.",
      price: 7500,
      category: "Electronics",
      dateAdded: "2024-03-13",
      mainImage: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop"
    }
  ];

  const [wishlist, setWishlist] = useState(wishlistItems);
  const filteredWishlist = wishlist.filter(item => selectedCategory === 'All' || item.category === selectedCategory);
  const removeFromWishlist = id => setWishlist(prev => prev.filter(item => item.id !== id));
  const clearWishlist = () => setWishlist([]);
  const totalValue = wishlist.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 mb-10 ">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Browse
          </button>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Heart className="w-8 h-8 text-red-500 mr-3" />
            My Wishlist
          </h1>
          {wishlist.length > 0 && (
            <button
              onClick={clearWishlist}
              className="text-red-600 hover:text-red-700 px-4 py-2 border border-red-200 rounded-xl hover:bg-red-50 transition-colors"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap gap-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow-sm'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Wishlist Grid */}
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWishlist.length > 0 ? filteredWishlist.map(item => (
          <div key={item.id} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all overflow-hidden flex flex-col">
            <img src={item.mainImage} alt={item.name} className="w-full h-64 object-cover" />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{item.name}</h3>
              <p className="text-gray-600 mb-4 flex-1 line-clamp-3">{item.description}</p>
              <span className="inline-block px-3 py-1 rounded-full text-orange-800 bg-orange-100 text-sm font-medium mb-4">{item.category}</span>
              <div className="flex gap-4 mt-auto">
                <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-3 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center justify-center">
                  View Details
                </button>
                <button className="flex-1 bg-white text-orange-600 border-2 border-orange-200 px-4 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors">
                  Contact Seller
                </button>
              </div>
              <div className="mt-4 text-right text-2xl font-bold text-orange-500">₹{item.price}</div>
            </div>
          </div>
        )) : (
          <div className="col-span-full text-center py-16 text-gray-700">
            Your wishlist is empty. Start browsing to add items!
          </div>
        )}
      </div>

      {/* Subtotal */}
      {wishlist.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 py-6 bg-white rounded-3xl shadow-xl flex justify-between items-center mt-6">
          <div className="text-lg font-medium text-gray-900">Subtotal ({wishlist.length} items)</div>
          <div className="text-2xl font-bold text-orange-500">₹{totalValue}</div>
        </div>
      )}
    </div>
  );
};

export default CampusCartWishlist;
