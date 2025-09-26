import React, { useState } from 'react';
import { Camera } from 'lucide-react';

const SellItemSection = () => {
  const [images, setImages] = useState([null, null, null, null]);

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(file);
      setImages(newImages);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Want to <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Sell Something?</span>
          </h2>
          <p className="text-xl text-gray-600">
            List your items quickly and reach thousands of students looking for affordable second-hand goods.
          </p>
        </div>

        {/* Sell Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Post Your Item</h3>
          <form className="space-y-4">
            
            {/* Image Uploads Inside Form */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Upload Images (up to 4)</label>
              <div className="flex gap-4">
                {images.map((img, idx) => (
                  <label
                    key={idx}
                    className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden bg-white"
                  >
                    {img ? (
                      <img src={img} alt={`upload-${idx}`} className="w-full h-full object-cover" />
                    ) : (
                      <Camera className="w-6 h-6 text-gray-400" />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageChange(e, idx)}
                    />
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Item Name</label>
              <input
                type="text"
                placeholder="Enter item name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Category</label>
              <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option>Textbooks & Study Materials</option>
                <option>Electronics & Tech</option>
                <option>Furniture & Decor</option>
                <option>Gaming & Entertainment</option>
                <option>Sports & Fitness</option>
                <option>Photography & Art</option>
                <option>Musical Instruments</option>
                <option>Professional & Career</option>
                <option>Health & Beauty</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Price (₹)</label>
              <input
                type="number"
                placeholder="Enter price"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Description</label>
              <textarea
                placeholder="Write a short description..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none h-24"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 rounded-xl hover:from-red-500 hover:to-orange-500 transition-all"
            >
              Post Item
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SellItemSection;
