import React from 'react';
import { Sparkles, Activity, Smile, Settings, Search, Syringe, ArrowRight } from 'lucide-react';
import { Treatment } from '../types';
import { Button } from '../components/Button';

const treatments: Treatment[] = [
  { id: '1', title: 'Basic Care', description: 'Regular checkups and scaling for healthy teeth maintenance.', iconName: 'Sparkles' },
  { id: '2', title: 'Orthodontic', description: 'Modern braces including metal, ceramic, and sapphire options.', iconName: 'Settings' },
  { id: '3', title: 'Aesthetics', description: 'Bleaching and Veneers designed for the perfect smile.', iconName: 'Smile' },
  { id: '4', title: 'Conservation', description: 'Aesthetic fillings and root canal treatments.', iconName: 'Activity' },
  { id: '5', title: 'Oral Surgery', description: 'Wisdom teeth removal and minor surgical procedures.', iconName: 'Syringe' },
  { id: '6', title: 'Prosthetics', description: 'High quality dentures and implants.', iconName: 'Search' },
];

const IconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles size={28} />,
  Settings: <Settings size={28} />,
  Smile: <Smile size={28} />,
  Activity: <Activity size={28} />,
  Syringe: <Syringe size={28} />,
  Search: <Search size={28} />,
};

export const Treatments: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-pastel-clay font-bold text-sm tracking-widest uppercase mb-4 block">Services</span>
          <h1 className="text-5xl font-heading font-medium text-pastel-dark mb-6">Curated Treatments</h1>
          <p className="text-lg text-pastel-gray">Experience dental care reimagined with precision and comfort.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {treatments.map((item) => (
             <div key={item.id} className="bg-pastel-bg p-10 rounded-[40px] hover:bg-white hover:shadow-2xl hover:shadow-pastel-gray/10 transition-all duration-500 group border border-transparent hover:border-pastel-gray/10">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-pastel-clay mb-8 group-hover:bg-pastel-clay group-hover:text-white transition-colors duration-500 shadow-sm">
                  {IconMap[item.iconName]}
                </div>
                <h3 className="text-2xl font-heading font-medium text-pastel-dark mb-4">{item.title}</h3>
                <p className="text-pastel-gray leading-relaxed mb-8 text-sm">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-pastel-dark font-bold text-sm group-hover:text-pastel-clay transition-colors">
                  Learn More <ArrowRight size={14} />
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};