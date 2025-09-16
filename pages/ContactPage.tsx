import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <section className="bg-slate-100 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Get In Touch</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-600">We'd love to hear from you. Whether you're a farmer, a consumer, or a potential partner, let's connect.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-slate-700 font-semibold mb-2">Your Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-green" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-slate-700 font-semibold mb-2">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-green" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-slate-700 font-semibold mb-2">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-green" required></textarea>
                </div>
                <button type="submit" className="w-full bg-agri-green text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-agri-green-dark transition-colors duration-300">
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Contact Information</h3>
                    <div className="space-y-3 text-lg text-slate-600">
                        <p><strong>Email:</strong> <a href="mailto:support@agrichain.com" className="text-agri-blue hover:underline">support@agrichain.com</a></p>
                        <p><strong>Phone:</strong> <a href="tel:+911234567890" className="text-agri-blue hover:underline">+91 123 456 7890</a></p>
                    </div>
                </div>
                 <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Office</h3>
                    <p className="text-lg text-slate-600">
                        AgriChain Technologies Pvt. Ltd.<br/>
                        123 Tech Park, Bangalore,<br/>
                        Karnataka, India - 560001
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
