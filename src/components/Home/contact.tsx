
// import React from "react";

// const Contact = () => {
// 	return (
// 		<section className="contact-section" style={{ background: '#f8fafc', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 0' }}>
// 			<div style={{ width: '100%', maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 48 }}>
// 				{/* Left: Form */}
// 				<div style={{ flex: '1 1 340px', maxWidth: 400, background: 'transparent', display: 'flex', flexDirection: 'column', gap: 16 }}>
// 					<input type="text" placeholder="Your Name" style={inputStyle} />
// 					<input type="text" placeholder="Website" style={inputStyle} />
// 					<input type="email" placeholder="Email" style={inputStyle} />
// 					<input type="text" placeholder="Mobile" style={inputStyle} />
// 					<div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
// 						<button style={{ ...buttonStyle, background: '#111', color: '#fff', border: 'none' }}>Get Free Analysis</button>
// 						<button style={{ ...buttonStyle, background: '#fff', color: '#111', border: '1px solid #d1d5db' }}>Book a Session</button>
// 					</div>
// 				</div>

// 				{/* Right: Headings and Cards */}
// 				<div style={{ flex: '2 1 500px', minWidth: 350, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
// 					<div style={{ textAlign: 'center', marginBottom: 16 }}>
// 						<div style={{ color: '#6b7280', fontSize: 14, letterSpacing: 1, fontWeight: 500, marginBottom: 8 }}>GET ADVISE</div>
// 						<h2 style={{ fontWeight: 700, fontSize: 32, lineHeight: 1.2, color: '#111', margin: 0 }}>
// 							Grow organic traffic with our complete<br />and SEO tools & workflow
// 						</h2>
// 					</div>
// 					<div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
// 						{/* Card 1: On Page SEO Checker */}
// 						<div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px #0001', padding: 32, minWidth: 320, maxWidth: 350, flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: 16 }}>
// 							<div style={{ fontWeight: 600, fontSize: 16, color: '#111', marginBottom: 8 }}>On Page SEO Checker</div>
// 							<div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
// 								<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 100 }}>
// 									<Gauge value={640} max={700} label="For 28 Pages" />
// 									<div style={{ marginTop: 16 }}>
// 										<Gauge value={52} max={100} label="Organic Growth" isPercent />
// 									</div>
// 								</div>
// 								<div style={{ flex: 1 }}>
// 									<ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 14, color: '#222', fontWeight: 500 }}>
// 										<li style={liStyle}>✔ Strategy Ideas <span style={liNumStyle}>220</span></li>
// 										<li style={liStyle}>✔ Technical SEO Ideas <span style={liNumStyle}>230</span></li>
// 										<li style={liStyle}>✔ SERP Feature Ideas <span style={liNumStyle}>230</span></li>
// 										<li style={liStyle}>✔ Semantic Ideas <span style={liNumStyle}>210</span></li>
// 										<li style={liStyle}>✔ Backlinks Ideas <span style={liNumStyle}>210</span></li>
// 										<li style={liStyle}>✔ User Experience Ideas <span style={liNumStyle}>220</span></li>
// 										<li style={liStyle}>✔ Content Ideas <span style={liNumStyle}>210</span></li>
// 									</ul>
// 								</div>
// 							</div>
// 						</div>
// 						{/* Card 2: Performance Test */}
// 						<div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px #0001', padding: 24, minWidth: 220, maxWidth: 260, flex: '1 1 220px', display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', justifyContent: 'center' }}>
// 							<div style={{ fontWeight: 600, fontSize: 15, color: '#111', marginBottom: 8 }}>Performance Test</div>
// 							<Gauge value={55} max={100} label="" isPercent />
// 							<div style={{ display: 'flex', gap: 12, margin: '12px 0' }}>
// 								<StatusDot color="#111" label="Working" />
// 								<StatusDot color="#fbbf24" label="Warning" />
// 								<StatusDot color="#ef4444" label="Error" />
// 							</div>
// 							<ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 13, color: '#222', fontWeight: 500, textAlign: 'left' }}>
// 								<li>✔ HTML Tags</li>
// 								<li>✔ Keywords</li>
// 								<li>✔ Performance</li>
// 								<li>✔ Desktop</li>
// 								<li>✔ Mobile</li>
// 								<li>✔ UI/AX</li>
// 							</ul>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// // --- Styles ---
// const inputStyle: React.CSSProperties = {
// 	width: '100%',
// 	padding: '12px 16px',
// 	borderRadius: 8,
// 	border: '1px solid #d1d5db',
// 	fontSize: 15,
// 	background: '#fff',
// 	marginBottom: 0,
// 	outline: 'none',
// };

// const buttonStyle: React.CSSProperties = {
// 	padding: '12px 24px',
// 	borderRadius: 8,
// 	fontWeight: 600,
// 	fontSize: 15,
// 	cursor: 'pointer',
// 	transition: 'all 0.2s',
// };

// const liStyle: React.CSSProperties = {
// 	display: 'flex',
// 	justifyContent: 'space-between',
// 	alignItems: 'center',
// 	marginBottom: 4,
// };
// const liNumStyle: React.CSSProperties = {
// 	color: '#6b7280',
// 	fontWeight: 400,
// 	marginLeft: 8,
// };

// // --- Gauge Chart Component ---
// interface GaugeProps {
// 	value: number;
// 	max: number;
// 	label: string;
// 	isPercent?: boolean;
// }
// const Gauge: React.FC<GaugeProps> = ({ value, max, label, isPercent }) => {
// 	const percent = Math.min(100, Math.round((value / max) * 100));
// 	const radius = 32;
// 	const stroke = 6;
// 	const circ = 2 * Math.PI * radius;
// 	const offset = circ - (percent / 100) * circ;
// 	return (
// 		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// 			<svg width={72} height={72}>
// 				<circle
// 					cx={36}
// 					cy={36}
// 					r={radius}
// 					stroke="#e5e7eb"
// 					strokeWidth={stroke}
// 					fill="none"
// 				/>
// 				<circle
// 					cx={36}
// 					cy={36}
// 					r={radius}
// 					stroke="#111"
// 					strokeWidth={stroke}
// 					fill="none"
// 					strokeDasharray={circ}
// 					strokeDashoffset={offset}
// 					strokeLinecap="round"
// 					style={{ transition: 'stroke-dashoffset 0.5s' }}
// 				/>
// 				<text
// 					x="50%"
// 					y="50%"
// 					textAnchor="middle"
// 					dy=".3em"
// 					fontSize="20"
// 					fontWeight="bold"
// 					fill="#111"
// 				>
// 					{isPercent ? `${value}%` : value}
// 				</text>
// 			</svg>
// 			<div style={{ fontSize: 13, color: '#6b7280', marginTop: 2 }}>{label}</div>
// 		</div>
// 	);
// };

// // --- Status Dot Component ---
// const StatusDot: React.FC<{ color: string; label: string }> = ({ color, label }) => (
// 	<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: 12, color: '#222' }}>
// 		<span style={{ display: 'block', width: 16, height: 16, borderRadius: '50%', background: color, marginBottom: 2, border: '2px solid #e5e7eb' }}></span>
// 		<span>{label}</span>
// 	</div>
// );

// export default Contact;

import React, { useState } from 'react';
// import { CircularProgress } from './components/CircularProgress';
// import { SEOBadge } from './components/SEOBadge';
// import { SmallCircularChart } from './components/SmallCircularChart';
import { Check } from 'lucide-react';
import { CircularProgress } from '../contact/CircularProgress';
import { SEOBadge } from '../contact/SEOBadge';
import { SmallCircularChart } from '../contact/SmallCircularChart';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    email: '',
    mobile: ''
  });

  const handleInputChange = (field: string, value: string) => {
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
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="space-y-6">
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
          <div className="space-y-8">
            {/* On Page SEO Checker */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">On Page SEO Checker</h2>
              
              <div className="flex items-start gap-8">
                {/* Main Circular Chart */}
                <div className="flex-shrink-0">
                  <CircularProgress
                    percentage={75}
                    size={160}
                    strokeWidth={12}
                    color="#374151"
                    backgroundColor="#E5E7EB"
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">640</div>
                      <div className="text-sm text-gray-500">for 28 Pages</div>
                    </div>
                  </CircularProgress>
                </div>
                
                {/* SEO Categories */}
                <div className="flex-1 grid grid-cols-1 gap-4">
                  {seoCategories.map((category, index) => (
                    <SEOBadge
                      key={index}
                      label={category.label}
                      abbreviation={category.abbreviation}
                      score={category.score}
                      bgColor={category.bgColor}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Test */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Performance Test</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left side - Charts */}
                <div className="space-y-6">
                  {/* Organic Growth Chart */}
                  <div className="flex flex-col items-center">
                    <CircularProgress
                      percentage={52}
                      size={140}
                      strokeWidth={10}
                      color="#374151"
                      backgroundColor="#E5E7EB"
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Organic Growth</div>
                      </div>
                    </CircularProgress>
                  </div>
                  
                  {/* Performance Score */}
                  <div className="flex items-center justify-between">
                    <CircularProgress
                      percentage={55}
                      size={100}
                      strokeWidth={8}
                      color="#374151"
                      backgroundColor="#E5E7EB"
                    >
                      <div className="text-center">
                        <div className="text-xl font-bold text-gray-900">55%</div>
                      </div>
                    </CircularProgress>
                    
                    {/* Small Charts */}
                    <div className="flex gap-4">
                      <SmallCircularChart value={43} label="Working" />
                      <SmallCircularChart value={43} label="Warning" />
                      <SmallCircularChart value={43} label="Error" />
                    </div>
                  </div>
                </div>
                
                {/* Right side - Checklist */}
                <div className="space-y-4">
                  {checklistItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;