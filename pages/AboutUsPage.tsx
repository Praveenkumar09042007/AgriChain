import React from 'react';

const TeamMemberCard: React.FC<{ name: string; role: string; imgSrc: string }> = ({ name, role, imgSrc }) => (
  <div className="text-center">
    <img src={imgSrc} alt={name} className="w-40 h-40 rounded-full mx-auto mb-4 shadow-lg border-4 border-white"/>
    <h3 className="text-xl font-bold text-slate-800">{name}</h3>
    <p className="text-slate-500">{role}</p>
  </div>
);

const AboutUsPage: React.FC = () => {
  const teamMembers = [
    { name: 'Founder 1', role: 'CEO & Co-Founder', imgSrc: 'https://picsum.photos/seed/team1/200/200' },
    { name: 'Founder 2', role: 'CTO & Co-Founder', imgSrc: 'https://picsum.photos/seed/team2/200/200' },
    { name: 'Founder 3', role: 'Head of Operations', imgSrc: 'https://picsum.photos/seed/team3/200/200' },
  ];

  return (
    <>
      <section className="bg-slate-100 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">About AgriChain</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-600">We are passionate about leveraging technology to create a more equitable and transparent food system.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Our Mission</h2>
            <p className="text-xl text-slate-600 leading-relaxed text-center">
              Our mission is to build a fair and transparent agricultural ecosystem for India. We aim to empower farmers with the tools and data they need to get the prices they deserve, while providing consumers with the confidence and knowledge to make informed choices about the food they eat. We believe blockchain technology can bridge the trust gap in the supply chain, benefiting everyone from the producer to the end consumer.
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-12">The Innovators Behind AgriChain</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {teamMembers.map(member => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
