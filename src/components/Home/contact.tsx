import React, { useEffect, useState } from 'react';

import { Check } from 'lucide-react';
import { CircularProgress } from '../contact/CircularProgress';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    email: '',
    mobile: ''
  });

  const handleInputChange = (field: keyof typeof formData, value: string) => {
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

  const [mainScorePercent, setMainScorePercent] = useState(75);
  const [growthPercent, setGrowthPercent] = useState(0);
  const [performancePercent, setPerformancePercent] = useState(0);

  useEffect(() => {
    // Start animations after mount
    const id = setTimeout(() => {
      setGrowthPercent(52);
      setPerformancePercent(55);
    }, 100);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <span className="text-xs tracking-widest font-semibold text-gray-500 uppercase">Get Advise</span>
          <h1 className="mt-3 text-center text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight max-w-3xl">
            Grow organic traffic with our complete
            <br className="hidden sm:block" /> and SEO tools & workflow
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Form */}
          <div className="w-full lg:w-2/5 space-y-4">
            
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
          <div className="w-full lg:w-3/5 relative min-h-[520px]">
            {/* First Div - Larger one with SEO Checker */}
            <div 
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 absolute"
              style={{ width: '100%', height: '470px', top: '0', left: '0' }}
            >
              {/* SEO Checker content */}
              <h2 className="text-xl font-semibold text-gray-800 mb-4">OnPage SEO Checker</h2>

              {/* Two-column layout exactly like the mock: charts left, list right */}
              <div className="grid grid-cols-[180px_1fr] gap-6">
                {/* Left column: big chart, then small chart stacked */}
                <div className="flex flex-col items-start gap-6">
                  <div>
                    <CircularProgress percentage={mainScorePercent} size={150} strokeWidth={12}>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-800">640</div>
                        <div className="text-sm text-gray-500">for 28 Pages</div>
                      </div>
                    </CircularProgress>
                  </div>
                  <div>
                    <CircularProgress percentage={growthPercent} size={120} strokeWidth={12}>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">52%</div>
                        <div className="text-xs text-gray-500">Organic Growth</div>
                      </div>
                    </CircularProgress>
                  </div>
                </div>

                {/* Right column: SEO categories grid */}
                <div className="grid grid-cols-2 gap-4 self-start">
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
              </div>
            </div>
            
            {/* Second Div - Smaller one on top with Performance Test */}
            <div 
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 absolute"
              style={{ 
                width: '480px', 
                height: '320px',
                top: '280px', 
                left: '240px'
              }}
            >
              {/* Performance Test content */}
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Performance Test</h2>

              {/* Two-column layout: big chart left, checklist right */}
              <div className="grid grid-cols-[170px_1fr] gap-8 items-start">
                <div className="flex justify-center">
                  <CircularProgress percentage={performancePercent} size={140} strokeWidth={12}>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-800">55%</div>
                    </div>
                  </CircularProgress>
                </div>
                {/* Checklist */}
                <div className="space-y-3">
                  {checklistItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-gray-900" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status indicators */}
              <div className="mt-8 flex justify-center space-x-10">
                {[
                  { status: 'Working', count: 43, color: 'bg-gray-900 text-white' },
                  { status: 'Warning', count: 43, color: 'bg-gray-900 text-white' },
                  { status: 'Error', count: 43, color: 'bg-gray-900 text-white' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.color}`}>
                      <span className="text-xs font-bold">{item.count}</span>
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