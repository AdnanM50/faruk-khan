
import React from "react";

const Contact = () => {
	return (
		<section className="contact-section" style={{ background: '#f8fafc', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 0' }}>
			<div style={{ width: '100%', maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 48 }}>
				{/* Left: Form */}
				<div style={{ flex: '1 1 340px', maxWidth: 400, background: 'transparent', display: 'flex', flexDirection: 'column', gap: 16 }}>
					<input type="text" placeholder="Your Name" style={inputStyle} />
					<input type="text" placeholder="Website" style={inputStyle} />
					<input type="email" placeholder="Email" style={inputStyle} />
					<input type="text" placeholder="Mobile" style={inputStyle} />
					<div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
						<button style={{ ...buttonStyle, background: '#111', color: '#fff', border: 'none' }}>Get Free Analysis</button>
						<button style={{ ...buttonStyle, background: '#fff', color: '#111', border: '1px solid #d1d5db' }}>Book a Session</button>
					</div>
				</div>

				{/* Right: Headings and Cards */}
				<div style={{ flex: '2 1 500px', minWidth: 350, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
					<div style={{ textAlign: 'center', marginBottom: 16 }}>
						<div style={{ color: '#6b7280', fontSize: 14, letterSpacing: 1, fontWeight: 500, marginBottom: 8 }}>GET ADVISE</div>
						<h2 style={{ fontWeight: 700, fontSize: 32, lineHeight: 1.2, color: '#111', margin: 0 }}>
							Grow organic traffic with our complete<br />and SEO tools & workflow
						</h2>
					</div>
					<div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
						{/* Card 1: On Page SEO Checker */}
						<div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px #0001', padding: 32, minWidth: 320, maxWidth: 350, flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: 16 }}>
							<div style={{ fontWeight: 600, fontSize: 16, color: '#111', marginBottom: 8 }}>On Page SEO Checker</div>
							<div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
								<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 100 }}>
									<Gauge value={640} max={700} label="For 28 Pages" />
									<div style={{ marginTop: 16 }}>
										<Gauge value={52} max={100} label="Organic Growth" isPercent />
									</div>
								</div>
								<div style={{ flex: 1 }}>
									<ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 14, color: '#222', fontWeight: 500 }}>
										<li style={liStyle}>✔ Strategy Ideas <span style={liNumStyle}>220</span></li>
										<li style={liStyle}>✔ Technical SEO Ideas <span style={liNumStyle}>230</span></li>
										<li style={liStyle}>✔ SERP Feature Ideas <span style={liNumStyle}>230</span></li>
										<li style={liStyle}>✔ Semantic Ideas <span style={liNumStyle}>210</span></li>
										<li style={liStyle}>✔ Backlinks Ideas <span style={liNumStyle}>210</span></li>
										<li style={liStyle}>✔ User Experience Ideas <span style={liNumStyle}>220</span></li>
										<li style={liStyle}>✔ Content Ideas <span style={liNumStyle}>210</span></li>
									</ul>
								</div>
							</div>
						</div>
						{/* Card 2: Performance Test */}
						<div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px #0001', padding: 24, minWidth: 220, maxWidth: 260, flex: '1 1 220px', display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', justifyContent: 'center' }}>
							<div style={{ fontWeight: 600, fontSize: 15, color: '#111', marginBottom: 8 }}>Performance Test</div>
							<Gauge value={55} max={100} label="" isPercent />
							<div style={{ display: 'flex', gap: 12, margin: '12px 0' }}>
								<StatusDot color="#111" label="Working" />
								<StatusDot color="#fbbf24" label="Warning" />
								<StatusDot color="#ef4444" label="Error" />
							</div>
							<ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 13, color: '#222', fontWeight: 500, textAlign: 'left' }}>
								<li>✔ HTML Tags</li>
								<li>✔ Keywords</li>
								<li>✔ Performance</li>
								<li>✔ Desktop</li>
								<li>✔ Mobile</li>
								<li>✔ UI/AX</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

// --- Styles ---
const inputStyle: React.CSSProperties = {
	width: '100%',
	padding: '12px 16px',
	borderRadius: 8,
	border: '1px solid #d1d5db',
	fontSize: 15,
	background: '#fff',
	marginBottom: 0,
	outline: 'none',
};

const buttonStyle: React.CSSProperties = {
	padding: '12px 24px',
	borderRadius: 8,
	fontWeight: 600,
	fontSize: 15,
	cursor: 'pointer',
	transition: 'all 0.2s',
};

const liStyle: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginBottom: 4,
};
const liNumStyle: React.CSSProperties = {
	color: '#6b7280',
	fontWeight: 400,
	marginLeft: 8,
};

// --- Gauge Chart Component ---
interface GaugeProps {
	value: number;
	max: number;
	label: string;
	isPercent?: boolean;
}
const Gauge: React.FC<GaugeProps> = ({ value, max, label, isPercent }) => {
	const percent = Math.min(100, Math.round((value / max) * 100));
	const radius = 32;
	const stroke = 6;
	const circ = 2 * Math.PI * radius;
	const offset = circ - (percent / 100) * circ;
	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<svg width={72} height={72}>
				<circle
					cx={36}
					cy={36}
					r={radius}
					stroke="#e5e7eb"
					strokeWidth={stroke}
					fill="none"
				/>
				<circle
					cx={36}
					cy={36}
					r={radius}
					stroke="#111"
					strokeWidth={stroke}
					fill="none"
					strokeDasharray={circ}
					strokeDashoffset={offset}
					strokeLinecap="round"
					style={{ transition: 'stroke-dashoffset 0.5s' }}
				/>
				<text
					x="50%"
					y="50%"
					textAnchor="middle"
					dy=".3em"
					fontSize="20"
					fontWeight="bold"
					fill="#111"
				>
					{isPercent ? `${value}%` : value}
				</text>
			</svg>
			<div style={{ fontSize: 13, color: '#6b7280', marginTop: 2 }}>{label}</div>
		</div>
	);
};

// --- Status Dot Component ---
const StatusDot: React.FC<{ color: string; label: string }> = ({ color, label }) => (
	<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: 12, color: '#222' }}>
		<span style={{ display: 'block', width: 16, height: 16, borderRadius: '50%', background: color, marginBottom: 2, border: '2px solid #e5e7eb' }}></span>
		<span>{label}</span>
	</div>
);

export default Contact;
