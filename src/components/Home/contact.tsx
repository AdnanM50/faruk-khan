import React, { useState } from 'react';

import { Check } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    email: '',
    mobile: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const seoCategories = [
    { label: 'Strategy Ideas', abbreviation: 'SI', score: 220, bgColor: 'bg-gray-800' },
    { label: 'Backlinks Ideas', abbreviation: 'BI', score: 220, bgColor: 'bg-gray-800' },
    { label: 'Technical SEO Ideas', abbreviation: 'Te', score: 220, bgColor: 'bg-gray-800' },
    { label: 'User Experience Ideas', abbreviation: 'Ux', score: 220, bgColor: 'bg-gray-600' },
    { label: 'SERP Features Ideas', abbreviation: 'Fi', score: 220, bgColor: 'bg-gray-800' },
    { label: 'Content Ideas', abbreviation: 'Co', score: 220, bgColor: 'bg-gray-600' },
    { label: 'Semantic Ideas', abbreviation: 'Si', score: 220 }
  ];

  const checklistItems = [
    'HTML Tags',
    'Keywords',
    'Performance',
    'Desktop',
    'Mobile',
    'UI/UX'
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Form */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h1 className="text-center text-2xl font-bold text-gray-800 mb-8">
              Grow organic traffic with our complete and SEO tools & workflow
            </h1>
            
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent text-gray-700 placeholder-gray-500"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Website"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent text-gray-700 placeholder-gray-500"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent text-gray-700 placeholder-gray-500"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Mobile"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent text-gray-700 placeholder-gray-500"
                />
              </div>
              
              <div className="flex gap-4 pt-4">
                <button className="flex-1 bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Get Free Analysis
                </button>
                <button className="flex-1 bg-white text-black py-3 px-6 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors">
                  Book a Session
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - SEO Checker */}
          <div className="w-full lg:w-1/2 relative">
            {/* First Div - Larger one with SEO Checker */}
            <div 
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 absolute"
              style={{ width: '600px', height: '450px', top: '0', left: '0' }}
            >
              {/* SEO Checker content */}
              <h2 className="text-xl font-semibold text-gray-800 mb-6">OnPage SEO Checker</h2>
              
              {/* Main circular progress */}
              <div className="mb-6 flex justify-center">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="10"
                      className="opacity-50"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#1f2937"
                      strokeWidth="10"
                      strokeDasharray="283"
                      strokeDashoffset="141.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-800">640</div>
                      <div className="text-sm text-gray-500">for 28 Pages</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SEO categories grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {seoCategories.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className={`w-6 h-6 ${item.bgColor || 'bg-gray-800'} text-white text-xs font-medium rounded flex items-center justify-center`}>
                        {item.abbreviation}
                      </span>
                      <span className="text-sm text-gray-700">{item.label}</span>
                    </div>
                    <span className="text-sm text-gray-500">{item.score}</span>
                  </div>
                ))}
              </div>

              {/* Organic Growth circle */}
              <div className="flex justify-center">
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="10"
                      className="opacity-50"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#1f2937"
                      strokeWidth="10"
                      strokeDasharray="283"
                      strokeDashoffset="141.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">52%</div>
                      <div className="text-xs text-gray-500">Organic Growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Second Div - Smaller one on top with Performance Test */}
            <div 
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 absolute"
              style={{ 
                width: '400px', 
                height: '300px',
                top: '225px', // 50% of the first div's height (450px * 0.5 = 225px)
                left: '100px'
              }}
            >
              {/* Performance Test content */}
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Performance Test</h2>
              
              {/* Performance circle */}
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="10"
                      className="opacity-50"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#1f2937"
                      strokeWidth="10"
                      strokeDasharray="283"
                      strokeDashoffset="127"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-800">55%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-2 mb-6">
                {checklistItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* Status indicators */}
              <div className="flex justify-center space-x-6">
                {[
                  { status: 'Working', count: 43, color: 'bg-green-100' },
                  { status: 'Warning', count: 43, color: 'bg-yellow-100' },
                  { status: 'Error', count: 43, color: 'bg-red-100' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center`}>
                      <span className="text-xs font-bold text-gray-700">{item.count}</span>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">{item.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;