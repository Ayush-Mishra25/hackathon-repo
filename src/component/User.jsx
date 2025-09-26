import React from "react";
import { Camera, Mail, Phone, MapPin, Settings, Edit3, LogOut } from "lucide-react";

const UserProfilePage = () => {
  const user = {
    name: "Pankaj Yadav",
    email: "pankaj@example.com",
    phone: "+91 9876543210",
    location: "Mumbai, India",
    bio: "Computer Science student, music enthusiast, and seller on CampusCart.",
    avatar: "", // Replace with user uploaded avatar
    joined: "Jan 2024",
    itemsListed: 12,
    wishlist: 5,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 relative">
          {/* Top right buttons */}
          <div className="absolute top-6 right-6 flex gap-3">
            <button className="p-2 bg-orange-100 rounded-full hover:bg-orange-200 transition">
              <Edit3 className="w-5 h-5 text-orange-600" />
            </button>
            <button className="p-2 bg-red-100 rounded-full hover:bg-red-200 transition">
              <LogOut className="w-5 h-5 text-red-600" />
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar */}
            <div className="relative">
              <img
                src={user.avatar}
                alt="Profile"
                className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <button className="absolute bottom-0 right-0 p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white shadow-md hover:scale-105 transition">
                <Camera className="w-4 h-4" />
              </button>
            </div>

            {/* Info */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900">{user.name}</h2>
              <p className="text-gray-600">{user.bio}</p>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 mt-6">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-orange-500" />
                  {user.email}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-orange-500" />
                  {user.phone}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  {user.location}
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-orange-500" />
                  Joined {user.joined}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600">{user.itemsListed}</div>
            <p className="text-gray-600">My Items</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600">{user.wishlist}</div>
            <p className="text-gray-600">Wishlist</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600">⭐ 4.9</div>
            <p className="text-gray-600">User Rating</p>
          </div>
        </div>

        {/* Section Divider */}
        <div className="mt-12 border-t border-orange-200 pt-8 text-center text-gray-500">
          © {new Date().getFullYear()} CampusCart · All rights reserved
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
