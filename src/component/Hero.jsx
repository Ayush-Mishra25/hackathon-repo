import React from 'react';
import { Sparkles, ArrowRight, Star } from 'lucide-react';
import book from '../assets/1.png'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 min-h-screen flex items-center relative overflow-hidden">
      
      {/* Decorative background circles */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-8 w-24 h-24 bg-orange-200/30 rounded-full blur-2xl"></div>
        <div className="absolute top-32 right-12 w-36 h-36 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-16 w-28 h-28 bg-orange-300/20 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left side - Text content */}
          <div className="space-y-8 lg:pr-8">
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-medium rounded-full shadow-lg">
              <Sparkles className="h-4 w-4 mr-2" />
              #1 Student Marketplace
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Buy & Sell 
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  {" "}Student Items
                </span>
                <br />
                Effortlessly
              </h1>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Join thousands of students buying and selling textbooks, electronics, furniture, and more. 
                Save money, earn cash, and give items a second life.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">50K+</div>
                <div className="text-sm text-gray-600">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">100K+</div>
                <div className="text-sm text-gray-600">Items Sold</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">500+</div>
                <div className="text-sm text-gray-600">Universities</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-orange-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300">
                Sell Your Items
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center space-x-6 pt-4">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium ml-2">4.9/5 Rating</span>
              </div>
              <div className="text-gray-400 hidden sm:block">|</div>
              <div className="text-gray-600 font-medium">Trusted by students nationwide</div>
            </div>
          </div>

          {/* Right side - Hero Image */}
          <div className="relative flex justify-center items-center">
            
             <img 
              src={book} 
              alt="Campus Marketplace" 
              className="w-full max-w-md rounded-3xl  object-cover"
            />
           
          </div>

        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-12">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
