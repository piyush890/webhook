import { useState } from "react";

export default function Guide() {

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans overflow-x-hidden">
        <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href='/' className="flex items-center space-x-2">
             <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-white/20">
          
              <img src="/logos.png" alt="" srcset="" />
              
            </div>
            <span className="text-xl font-semibold">Payeox</span>
          </a>
         
          <div className="flex items-center space-x-4">
            <a href="/auth" className="text-sm text-gray-400 hover:text-white transition-colors">Sign In</a>
            <a href="/auth" className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </header>
    <p> Go to merchants/pg/summary/overview</p>

     </div>
  );
}
