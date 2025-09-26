import React, { useState } from 'react';
import { Search, ShoppingBag, Star } from 'lucide-react';

const CampusCartBrowse = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Textbooks & Study Materials',
    'Electronics & Tech',
    'Furniture & Decor',
    'Gaming & Entertainment',
    'Transportation',
    'Sports & Fitness',
    'Photography & Art',
    'Musical Instruments',
    'Professional & Career',
    'Health & Beauty'
  ];

  // Sample products (prices in ₹)
  const products = [
    {
      id: 1,
      name: "MacBook Pro 13-inch",
      description: "Excellent condition, barely used.",
      price: 85000,
      category: "Electronics & Tech",
      mainImage: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=120&h=90&fit=crop",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=120&h=90&fit=crop",
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=120&h=90&fit=crop"
      ]
    },
    {
      id: 2,
      name: "Calculus Textbook",
      description: "Stewart's Calculus 8th Edition.",
      price: 1200,
      category: "Textbooks & Study Materials",
      mainImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=120&h=90&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=90&fit=crop",
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=120&h=90&fit=crop"
      ]
    },
    {
      id: 3,
      name: "Dorm Mini Fridge",
      description: "Compact refrigerator for dorm rooms.",
      price: 18000,
      category: "Furniture & Decor",
      mainImage: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=120&h=90&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=120&h=90&fit=crop",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=120&h=90&fit=crop"
      ]
    },
    {
      id: 4,
      name: "Winter Jacket",
      description: "Warm North Face jacket, size M.",
      price: 9500,
      category: "Clothing",
      mainImage: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=300&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=120&h=90&fit=crop",
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=120&h=90&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=120&h=90&fit=crop"
      ]
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Categories Section */}
          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                {/* Main Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.mainImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <Star className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Three Additional Images */}
                <div className="flex gap-2 p-4 pb-2">
                  {product.additionalImages.slice(0, 3).map((image, index) => (
                    <div key={index} className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                      />
                    </div>
                  ))}
                </div>

                {/* Product Info */}
                <div className="p-4 pt-2">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
                      {product.name}
                    </h3>
                    <span className="text-2xl font-bold text-orange-500">
                      ₹{product.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      {product.category}
                    </span>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products available</h3>
            <p className="text-gray-600">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampusCartBrowse;
