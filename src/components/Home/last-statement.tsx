

import React from "react";

// Using random online hosted images for demo purposes
const fSign = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Signature_of_Barack_Obama.png";
const trustpilot = "https://upload.wikimedia.org/wikipedia/commons/6/6e/Trustpilot_logo.png";
const sortlist = "https://seeklogo.com/images/S/sortlist-logo-6B1B6B2B2B-seeklogo.com.png";
const clutch = "https://assets-global.website-files.com/5e9aa66fd3886c1ecf5b4b8d/5e9aa66fd3886c2e0d5b4b9a_Clutch%20Logo%20-%20Dark%20Blue.png";
const theorg = "https://theorg.com/_next/static/media/theorg-logo.1b2e2e2e.svg";
const proven = "https://www.provenexpert.com/img/logo/provenexpert_logo.svg";

const LastStatement = () => {
	return (
		<section
			style={{
				width: "100%",
				background: "#fff",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				padding: "48px 16px 32px 16px",
				boxSizing: "border-box",
				minHeight: "350px"
			}}
		>
			<div
				style={{
					maxWidth: 700,
					textAlign: "center",
					margin: "0 auto",
					color: "#222",
				}}
			>
				<span
					style={{
						fontSize: "1.5rem",
						fontWeight: 400,
						fontStyle: "italic",
						lineHeight: 1.5,
						color: "#222",
						display: "block",
						marginBottom: 24,
					}}
				>
					“SEO is a marathon, not a sprint. Be patient, be consistent, and watch your brand blossom with the power of organic growth.”
				</span>
				<div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
											<img
												src={fSign}
												alt="Faruk Khan signature"
												style={{ height: 48, margin: "0 auto" }}
											/>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					alignItems: "center",
					gap: 40,
					marginTop: 48,
					width: "100%",
					maxWidth: 700,
				}}
			>
			<img src={trustpilot} alt="Trustpilot" style={{ height: 24 }} />
			<img src={sortlist} alt="sortlist" style={{ height: 24 }} />
			<img src={clutch} alt="Clutch" style={{ height: 24 }} />
			<img src={theorg} alt="The Org" style={{ height: 24 }} />
			<img src={proven} alt="Proven Expert" style={{ height: 24 }} />
			</div>
			<style>{`
				@media (max-width: 600px) {
					section {
						padding: 32px 4vw 24px 4vw !important;
					}
					section > div {
						max-width: 98vw !important;
					}
					section img {
						height: 18px !important;
					}
				}
			`}</style>
		</section>
	);
};

export default LastStatement;
