import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-pastel-gray/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 rounded-full bg-pastel-clay flex items-center justify-center text-white font-heading font-bold">O</div>
               <div className="flex flex-col">
                 <span className="font-heading font-bold text-xl text-pastel-dark leading-none">ORANGE</span>
                 <span className="text-[10px] text-pastel-gray uppercase tracking-widest leading-none">Dental House</span>
               </div>
             </div>
             <p className="text-pastel-gray text-sm leading-relaxed">
               Modern dental clinic with premium service and transparent pricing for Indonesian families.
             </p>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-pastel-dark mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-pastel-gray">
              <li><a href="#" className="hover:text-pastel-clay transition-colors">Orthodontic</a></li>
              <li><a href="#" className="hover:text-pastel-clay transition-colors">Bleaching</a></li>
              <li><a href="#" className="hover:text-pastel-clay transition-colors">Scaling</a></li>
              <li><a href="#" className="hover:text-pastel-clay transition-colors">Veneer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-pastel-dark mb-4">Locations</h4>
            <ul className="space-y-2 text-sm text-pastel-gray">
              <li>Jakarta Timur</li>
              <li>Jakarta Selatan</li>
              <li>Bekasi Barat</li>
              <li>Bekasi Utara</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-pastel-dark mb-4">Social Media</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-pastel-bg flex items-center justify-center text-pastel-gray hover:bg-pastel-clay hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-pastel-bg flex items-center justify-center text-pastel-gray hover:bg-blue-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-pastel-bg flex items-center justify-center text-pastel-gray hover:bg-red-600 hover:text-white transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-pastel-gray/10 pt-8 text-center text-pastel-gray text-sm flex flex-col md:flex-row justify-between items-center gap-2">
          <span>&copy; {new Date().getFullYear()} Orange Dental House. All rights reserved.</span>
          <span className="font-medium text-pastel-clay">Created by Matias Austin</span>
        </div>
      </div>
    </footer>
  );
};