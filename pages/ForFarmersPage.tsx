import React, { useState } from 'react';

const ForFarmersPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    farmName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    alert('Thank you for registering! We will be in touch shortly.');
    setFormData({ name: '', farmName: '', email: '', phone: '' });
  };

  return (
    <>
      <section className="bg-agri-green-dark text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join AgriChain and Get the Price You Deserve.</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">Take control of your produce, connect directly with buyers, and build a trusted brand for your hard work.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Why Farmers Choose AgriChain</h2>
              <ul className="space-y-4 text-lg text-slate-600">
                <li className="flex items-start"><span className="text-agri-green mr-3 mt-1">✓</span><span><strong>Fair Pricing:</strong> Eliminate middlemen and get the best possible price for your crops.</span></li>
                <li className="flex items-start"><span className="text-agri-green mr-3 mt-1">✓</span><span><strong>Direct Market Access:</strong> Connect with a wider network of retailers and distributors.</span></li>
                <li className="flex items-start"><span className="text-agri-green mr-3 mt-1">✓</span><span><strong>Real Market Data:</strong> Access insights on demand and pricing to plan your harvests better.</span></li>
                <li className="flex items-start"><span className="text-agri-green mr-3 mt-1">✓</span><span><strong>Build a Trusted Brand:</strong> Showcase the quality of your produce and build a reputation that buyers trust.</span></li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/dashboard1/400/600" alt="Farmer Dashboard" className="rounded-lg shadow-xl" />
              <img src="https://picsum.photos/seed/dashboard2/400/600" alt="Mobile App" className="rounded-lg shadow-xl mt-8" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Register Your Farm Today</h2>
            <p className="text-lg text-slate-600 mb-8">Fill out the form below to start your journey with AgriChain.</p>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md text-left">
              <div className="mb-4">
                <label htmlFor="name" className="block text-slate-700 font-semibold mb-2">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-green" required />
              </div>
              <div className="mb-4">
                <label htmlFor="farmName" className="block text-slate-700 font-semibold mb-2">Farm Name</label>
                <input type="text" id="farmName" name="farmName" value={formData.farmName} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-green" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-slate-700 font-semibold mb-2">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-green" required />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-slate-700 font-semibold mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-green" />
              </div>
              <button type="submit" className="w-full bg-agri-green text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-agri-green-dark transition-colors duration-300">
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForFarmersPage;
