import React from 'react'

const Contactform = () => {
  const [formData, setFormData] = React.useState({
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

  return (
      <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full max-w-full sm:max-w-[470px] h-[50px] sm:h-[66px] px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent text-gray-700 placeholder-gray-500"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      placeholder="Website"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      className="w-full max-w-full sm:max-w-[470px] h-[50px] sm:h-[66px] px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent text-gray-700 placeholder-gray-500"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full max-w-full sm:max-w-[470px] h-[50px] sm:h-[66px] px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent text-gray-700 placeholder-gray-500"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      placeholder="Mobile"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange('mobile', e.target.value)}
                      className="w-full max-w-full sm:max-w-[470px] h-[50px] sm:h-[66px] px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent text-gray-700 placeholder-gray-500"
                    />
                  </div>
                  
                  <div className="flex gap-4 pt-4 flex-col sm:flex-row">
                    <button className="w-full sm:w-[225px] h-[50px] sm:h-[65px] bg-black text-white px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                      Get Free Analysis
                    </button>
                    <button className="w-full sm:w-[225px] h-[50px] sm:h-[65px] bg-white text-black px-6 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors">
                      Book a Session
                    </button>
                  </div>
                </form>
  )
}

export default Contactform