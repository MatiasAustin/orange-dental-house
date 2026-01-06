import React from 'react';
import { GeneratedImage } from '../components/GeneratedImage';

export const About: React.FC = () => {
  const doctors = [
      { id: 1, role: 'Orthodontist', prompt: 'Professional portrait of a male dentist, friendly smile, wearing white coat, soft grey pastel background, photorealistic, high quality' },
      { id: 2, role: 'Aesthetic Dentist', prompt: 'Professional portrait of a female dentist, friendly smile, wearing white coat, soft peach pastel background, photorealistic, high quality' },
      { id: 3, role: 'Oral Surgeon', prompt: 'Professional portrait of a young male dentist, confident smile, wearing white coat, clean white background, photorealistic, high quality' },
      { id: 4, role: 'Pediatric Dentist', prompt: 'Professional portrait of a senior female dentist, warm smile, wearing white coat, soft beige background, photorealistic, high quality' },
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
                        prompt="Modern dental clinic interior reception area, soft pastel orange and white color scheme, comfortable furniture, bright airy natural lighting, architectural photography, ultra realistic"
                        fallbackSrc="https://picsum.photos/600/600?random=about"
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
                        prompt={doc.prompt}
                        fallbackSrc={`https://picsum.photos/400/500?random=doc${doc.id}`}
                        alt={`Doctor ${doc.id}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-pastel-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                      <p className="text-white font-medium">{doc.role}</p>
                   </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-pastel-dark">drg. Name {doc.id}</h3>
                <p className="text-pastel-gray text-sm">General Practitioner</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};