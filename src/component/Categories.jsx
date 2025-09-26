import React, { useState } from 'react';
import { 
  BookOpen, 
  Laptop, 
  Armchair, 
  Shirt, 
  Gamepad2, 
  Car, 
  Dumbbell,
  Camera,
  Music,
  Briefcase,
  Heart,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

const Categories = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: 'Textbooks & Study Materials',
      icon: BookOpen,
      itemCount: '15,420',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Course books, notes, and study guides',
      trending: true
    },
    {
      id: 2,
      name: 'Electronics & Tech',
      icon: Laptop,
      itemCount: '8,340',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      description: 'Laptops, phones, tablets, and accessories'
    },
    {
      id: 3,
      name: 'Furniture & Decor',
      icon: Armchair,
      itemCount: '6,890',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      description: 'Dorm furniture, decorations, and essentials'
    },
    {
      id: 5,
      name: 'Gaming & Entertainment',
      icon: Gamepad2,
      itemCount: '4,230',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      description: 'Games, consoles, and entertainment gear'
    },
    {
      id: 6,
      name: 'Transportation',
      icon: Car,
      itemCount: '2,180',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      description: 'Bikes, cars, scooters, and parts'
    },
    {
      id: 8,
      name: 'Sports & Fitness',
      icon: Dumbbell,
      itemCount: '3,450',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      description: 'Gym equipment, sports gear, and more'
    },
    {
      id: 9,
      name: 'Photography & Art',
      icon: Camera,
      itemCount: '1,890',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      description: 'Cameras, art supplies, and creative tools'
    },
    {
      id: 10,
      name: 'Musical Instruments',
      icon: Music,
      itemCount: '1,230',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      description: 'Guitars, keyboards, and audio equipment'
    },
    {
      id: 11,
      name: 'Professional & Career',
      icon: Briefcase,
      itemCount: '2,340',
      color: 'from-gray-600 to-gray-700',
      bgColor: 'bg-gray-50',
      description: 'Interview attire, portfolios, and tools'
    },
    {
      id: 12,
      name: 'Health & Beauty',
      icon: Heart,
      itemCount: '4,120',
      color: 'from-rose-500 to-rose-600',
      bgColor: 'bg-rose-50',
      description: 'Skincare, wellness, and beauty products'
    }
  ];

  const popularCategories = categories.slice(0, 6);
  const allCategories = categories;

  return (
    <section id="categories" className="pt-32 py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Shop by 
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {" "}Categories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find exactly what you need from thousands of items posted by students nationwide
          </p>
        </div>

        {/* Popular Categories - Large Cards */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <TrendingUp className="h-6 w-6 text-orange-500 mr-2" />
              Most Popular
            </h3>
            <button className="text-orange-600 hover:text-orange-700 font-medium flex items-center group">
              View All
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  {/* Trending Badge */}
                  {category.trending && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        Trending
                      </div>
                    </div>
                  )}
                  
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="p-8">
                    <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                      {category.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">
                        {category.itemCount}
                      </span>
                      <span className="text-sm text-gray-500">items available</span>
                    </div>
                    
                    {/* Hover Arrow */}
                    <div className={`mt-4 flex items-center text-orange-600 font-medium transition-all duration-300 ${
                      hoveredCategory === category.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                    }`}>
                      Browse now
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* All Categories - Compact Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">All Categories</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {allCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 cursor-pointer border border-gray-100 hover:border-orange-200"
                >
                  <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                    <IconComponent className={`h-6 w-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                  </div>
                  
                  <h4 className="text-sm font-semibold text-gray-900 text-center mb-2 group-hover:text-gray-800">
                    {category.name}
                  </h4>
                  
                  <p className="text-xs text-gray-500 text-center">
                    {category.itemCount} items
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Post a "looking for" request and let other students know what you need. 
              You'll get notified when someone has what you're searching for!
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors duration-300">
              Post a Request
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
