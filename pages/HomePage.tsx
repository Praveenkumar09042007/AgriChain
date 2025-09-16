import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => (
  <div className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <img src="https://picsum.photos/seed/farm/1600/900" alt="Vibrant farm" className="absolute inset-0 w-full h-full object-cover" />
    <div className="relative z-10 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Bringing Transparency from Farm to Table.</h1>
      <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-md">Empowering farmers and ensuring quality for consumers with the power of blockchain.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/farmers" className="bg-agri-green text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-agri-green-dark transition-transform transform hover:scale-105 shadow-lg">
          For Farmers
        </Link>
        <Link to="/consumers" className="bg-agri-blue text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-agri-blue-dark transition-transform transform hover:scale-105 shadow-lg">
          For Consumers
        </Link>
      </div>
    </div>
  </div>
);

const ProblemSection: React.FC = () => {
    const problems = [
        { icon: '💸', title: 'Unfair Prices', description: 'Farmers often receive a fraction of the final price due to multiple middlemen.' },
        { icon: '🤔', title: 'Lack of Trust', description: 'Consumers are unsure about the origin, quality, and authenticity of their food.' },
        { icon: '🔗', title: 'Inefficient Supply Chain', description: 'Complex logistics lead to wastage, delays, and lack of accountability.' },
    ];
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">The Broken Link in Our Food Chain</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">Current agricultural supply chains are opaque, inefficient, and unfair. We're here to fix that.</p>
                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map(p => (
                        <div key={p.title} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <div className="text-5xl mb-4">{p.icon}</div>
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">{p.title}</h3>
                            <p className="text-slate-600">{p.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const HowItWorksSection: React.FC = () => (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Simple 3-Step Process</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">We make blockchain simple, so everyone in the supply chain benefits.</p>
        <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2"></div>
            <div className="relative grid md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center">
                    <div className="bg-agri-green text-white w-24 h-24 rounded-full flex items-center justify-center text-4xl mb-4 shadow-lg border-4 border-white">1</div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Farmer Registers Produce</h3>
                    <p className="text-slate-600">A farmer adds crop details and gets a unique, unchangeable QR code on the blockchain.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-agri-green text-white w-24 h-24 rounded-full flex items-center justify-center text-4xl mb-4 shadow-lg border-4 border-white">2</div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Track the Journey</h3>
                    <p className="text-slate-600">The product is scanned and its journey is tracked at every step from distributor to retailer.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-agri-green text-white w-24 h-24 rounded-full flex items-center justify-center text-4xl mb-4 shadow-lg border-4 border-white">3</div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Consumer Verifies</h3>
                    <p className="text-slate-600">The consumer scans the QR code to see the complete story of their food, ensuring trust.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );

const BenefitsSection: React.FC = () => {
    const benefits = [
        { icon: '🧑‍🌾', title: 'For Farmers', description: 'Get fair prices & direct market access.' },
        { icon: '🛒', title: 'For Consumers', description: 'Trust in quality & know your food\'s origin.' },
        { icon: '🏢', title: 'For Retailers', description: 'Ensure accountability & reduce fraud.' },
    ];
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-slate-800 mb-12">Benefits for Everyone</h2>
                <div className="grid md:grid-cols-3 gap-8">
                     {benefits.map(b => (
                        <div key={b.title} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <div className="text-5xl mb-4">{b.icon}</div>
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">{b.title}</h3>
                            <p className="text-slate-600 text-lg">{b.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialsSection: React.FC = () => {
    const testimonials = [
        { quote: "AgriChain helped me connect directly with buyers and get a 20% better price for my tomatoes. It's a game-changer.", name: "Ramesh K.", role: "Farmer", img: "https://picsum.photos/seed/farmer1/100/100" },
        { quote: "I love knowing exactly where my vegetables come from. Scanning the QR code is so easy and reassuring.", name: "Priya S.", role: "Consumer", img: "https://picsum.photos/seed/consumer1/100/100" },
        { quote: "Traceability is key for our business. AgriChain has helped us reduce losses and build customer trust.", name: "Anil M.", role: "Retail Partner", img: "https://picsum.photos/seed/retailer1/100/100" },
    ];
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">What Our Partners Say</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map(t => (
                        <div key={t.name} className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
                            <img src={t.img} alt={t.name} className="w-24 h-24 rounded-full mb-4 border-4 border-agri-green-light"/>
                            <p className="text-slate-600 italic mb-4">"{t.quote}"</p>
                            <h4 className="font-bold text-slate-800">{t.name}</h4>
                            <p className="text-sm text-slate-500">{t.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
    </>
  );
};

export default HomePage;
