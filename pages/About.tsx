import React from 'react';
import { GeneratedImage } from '../components/GeneratedImage';

export const About: React.FC = () => {
  // Using curated Unsplash images that match the previous AI prompts for a consistent, static look
  const doctors = [
      { 
        id: 1, 
        role: 'Orthodontist', 
        name: 'drg. Adi Nugroho',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop' 
      },
      { 
        id: 2, 
        role: 'Aesthetic Dentist', 
        name: 'drg. Sarah Wijaya',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea86b48e?q=80&w=1000&auto=format&fit=crop' 
      },
      { 
        id: 3, 
        role: 'Oral Surgeon', 
        name: 'drg. Rizky Pratama',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop' 
      },
      { 
        id: 4, 
        role: 'Pediatric Dentist', 
        name: 'drg. Maya Putri',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop' 
      },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
           <div className="order-2 md:order-1">
              <div className="relative">
                 <div className="absolute inset-0 bg-pastel-clay rounded-[40px] rotate-3 opacity-20"></div>
                 <div className="relative rounded-[40px] shadow-2xl overflow-hidden aspect-square">
                    <GeneratedImage 
                        prompt="ignored"
                        fallbackSrc="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop"
                        alt="Clinic Interior"
                        className="w-full h-full object-cover"
                    />
                 </div>
              </div>
           </div>
           <div className="order-1 md:order-2">
              <h2 className="text-4xl font-heading font-bold text-pastel-dark mb-6">More than just a clinic.</h2>
              <p className="text-lg text-pastel-gray mb-6 leading-relaxed">
                Orange Dental is here to change the stigma that going to the dentist is scary and expensive. We carry the concept of <span className="font-bold text-pastel-clay">fun, friendly, & transparent</span>.
              </p>
              <p className="text-lg text-pastel-gray leading-relaxed">
                Every corner of the clinic is designed for your comfort, with soothing aromas and friendly staff. We believe a healthy smile is the beginning of a happy life.
              </p>
           </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
           <h2 className="text-3xl font-heading font-bold text-pastel-dark">Our Medical Team</h2>
           <p className="text-pastel-gray mt-2">Professional, experienced, and friendly.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
           {doctors.map((doc) => (
             <div key={doc.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-[32px] aspect-[3/4] mb-4 bg-pastel-bg">
                   <GeneratedImage
                        prompt="ignored"
                        fallbackSrc={doc.image}
                        alt={doc.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-pastel-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                      <p className="text-white font-medium">{doc.role}</p>
                   </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-pastel-dark">{doc.name}</h3>
                <p className="text-pastel-gray text-sm">{doc.role}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};