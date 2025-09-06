import React from 'react';

const clients = Array(10).fill({ name: 'Client Logo', logo: '/clientlogo.png' });

const ClientSection = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-[22px] md:text-2xl font-bold text-black mb-8">
          Trusted by Businesses Worldwide – <span className="font-bold">My SEO Clients</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-24 rounded-xl bg-[#F7F4F4]"
            >
              <img
                src={client.logo}
                alt={client.name}
                className=" object-fill"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
