import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';

export const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-pastel-bg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-pastel-clay font-bold text-sm tracking-widest uppercase mb-4 block">Transparent Pricing</span>
          <h1 className="text-5xl font-heading font-medium text-pastel-dark mb-6">No Hidden Costs</h1>
          <p className="text-lg text-pastel-gray">We believe you have the right to know the estimated costs upfront.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Card */}
          <div className="bg-white rounded-[32px] p-10 shadow-sm hover:shadow-xl transition-all relative border border-pastel-gray/10">
            <h3 className="text-xl font-heading font-bold text-pastel-dark mb-2">Prevention</h3>
            <div className="text-3xl font-heading font-medium text-pastel-clay mb-8">Starts Rp 350k</div>
            <ul className="space-y-6 mb-10">
              {[
                { name: 'Scaling (Full)', price: 'Rp 350k - 500k' },
                { name: 'Consultation', price: 'Free via WA' },
                { name: 'General Checkup', price: 'Rp 100k' },
              ].map((item, idx) => (
                <li key={idx} className="flex justify-between items-start border-b border-dashed border-pastel-gray/20 pb-4">
                   <div className="flex items-start gap-3">
                     <CheckCircle2 size={18} className="text-pastel-gray mt-0.5" />
                     <span className="text-pastel-dark text-sm">{item.name}</span>
                   </div>
                   <span className="font-bold text-pastel-dark text-sm">{item.price}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full">Book Now</Button>
          </div>

          {/* Featured Card */}
          <div className="bg-pastel-dark rounded-[32px] p-10 shadow-2xl relative transform lg:-translate-y-6">
             <div className="absolute top-6 right-6 bg-pastel-clay text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">Popular</div>
            <h3 className="text-xl font-heading font-bold text-white mb-2">Orthodontic</h3>
            <div className="text-3xl font-heading font-medium text-white mb-8">Starts Rp 5.5m</div>
            
            <ul className="space-y-6 mb-10">
              {[
                { name: 'Metal Braces (USA)', price: 'Rp 5.5jt' },
                { name: 'Ceramic Braces', price: 'Rp 8.0jt' },
                { name: 'Sapphire Braces', price: 'Rp 11.0jt' },
                { name: 'Self Ligating', price: 'Rp 15.0jt' },
              ].map((item, idx) => (
                <li key={idx} className="flex justify-between items-start border-b border-white/10 pb-4">
                   <div className="flex items-start gap-3">
                     <CheckCircle2 size={18} className="text-pastel-clay mt-0.5" />
                     <span className="text-pastel-bg text-sm">{item.name}</span>
                   </div>
                   <span className="font-bold text-white text-sm">{item.price}</span>
                </li>
              ))}
            </ul>
            <Button variant="primary" className="w-full bg-pastel-clay hover:bg-white hover:text-pastel-dark border-0">Book Now</Button>
          </div>

           {/* Aesthetic Card */}
           <div className="bg-white rounded-[32px] p-10 shadow-sm hover:shadow-xl transition-all relative border border-pastel-gray/10">
            <h3 className="text-xl font-heading font-bold text-pastel-dark mb-2">Aesthetic</h3>
            <div className="text-3xl font-heading font-medium text-pastel-clay mb-8">Starts Rp 3.0m</div>
            <ul className="space-y-6 mb-10">
              {[
                { name: 'Bleaching In-Office', price: 'Rp 3.0jt' },
                { name: 'Home Bleaching Kit', price: 'Rp 2.5jt' },
                { name: 'Veneer Composite', price: 'Rp 800k /tooth' },
                { name: 'Veneer Porcelain', price: 'Rp 4.0jt /tooth' },
              ].map((item, idx) => (
                <li key={idx} className="flex justify-between items-start border-b border-dashed border-pastel-gray/20 pb-4">
                   <div className="flex items-start gap-3">
                     <CheckCircle2 size={18} className="text-pastel-gray mt-0.5" />
                     <span className="text-pastel-dark text-sm">{item.name}</span>
                   </div>
                   <span className="font-bold text-pastel-dark text-sm">{item.price}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full">Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};