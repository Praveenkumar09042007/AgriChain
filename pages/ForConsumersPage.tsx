import React from 'react';

const ForConsumersPage: React.FC = () => {
  return (
    <>
      <section className="bg-agri-blue-dark text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Food You Can Finally Trust.</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">Know the story behind your food. With a simple scan, trace your produce back to the farm it came from.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Your Window into the Farm</h2>
              <p className="text-lg text-slate-600 mb-4">
                When you see the AgriChain QR code on a product, you have the power to see its entire journey. Simply scan it with your smartphone camera to instantly access:
              </p>
              <ul className="space-y-3 text-lg text-slate-600 list-disc list-inside">
                <li><strong>Farmer's Profile:</strong> Learn about the farmer who grew your food.</li>
                <li><strong>Harvest Details:</strong> See the exact date and location of harvest.</li>
                <li><strong>Price Journey:</strong> Understand the fair price paid to the farmer.</li>
                <li><strong>Quality Certifications:</strong> Verify organic and other quality standards.</li>
              </ul>
               <p className="mt-6 text-lg text-slate-700 font-semibold">
                By choosing AgriChain products, you're not just eating healthier; you're supporting fair trade and sustainable farming practices.
              </p>
            </div>
            <div>
              <img src="https://picsum.photos/seed/scan-qr/800/600" alt="Person scanning a QR code on a tomato crate" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Look for the AgriChain QR Code</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We're partnering with stores across India. Ask for AgriChain verified products and be a part of the food transparency movement.
          </p>
        </div>
      </section>
    </>
  );
};

export default ForConsumersPage;
