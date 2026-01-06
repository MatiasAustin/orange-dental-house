import React from 'react';
import { MapPin, Navigation, Phone } from 'lucide-react';
import { Button } from '../components/Button';
import { ClinicLocation } from '../types';

const locations: ClinicLocation[] = [
  {
    id: '1',
    name: 'Orange Cipinang',
    address: 'Jl. Cipinang Jaya Raya No.23, Jakarta Timur',
    image: 'https://picsum.photos/400/300?random=101',
    mapsUrl: '#',
    waUrl: '#'
  },
  {
    id: '2',
    name: 'Orange Jatibening',
    address: 'Jl. Dr. Ratna No.88, Bekasi',
    image: 'https://picsum.photos/400/300?random=102',
    mapsUrl: '#',
    waUrl: '#'
  },
  {
    id: '3',
    name: 'Orange Antasari',
    address: 'Jl. Pangeran Antasari No.10, Jakarta Selatan',
    image: 'https://picsum.photos/400/300?random=103',
    mapsUrl: '#',
    waUrl: '#'
  },
  {
    id: '4',
    name: 'Orange Harapan Indah',
    address: 'Ruko Boulevard Hijau, Bekasi',
    image: 'https://picsum.photos/400/300?random=104',
    mapsUrl: '#',
    waUrl: '#'
  }
];

export const Locations: React.FC = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-4 bg-pastel-bg min-h-screen">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-pastel-clay font-bold text-sm tracking-widest uppercase mb-4 block">Our Presence</span>
        <h1 className="text-5xl font-heading font-medium text-pastel-dark mb-6">Find Your Clinic</h1>
        <p className="text-lg text-pastel-gray">Strategically located in Jakarta and Bekasi for your convenience.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((loc) => (
          <div key={loc.id} className="bg-white rounded-[32px] overflow-hidden hover:shadow-2xl hover:shadow-pastel-gray/20 transition-all duration-500 group border border-pastel-gray/5">
            <div className="h-56 overflow-hidden relative">
               <img src={loc.image} alt={loc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-3 rounded-full text-pastel-clay shadow-sm">
                 <MapPin size={20} />
               </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-heading font-bold text-pastel-dark mb-2">{loc.name}</h3>
              <p className="text-pastel-gray text-sm mb-8 flex items-start gap-2 h-10 leading-relaxed">
                 {loc.address}
              </p>
              
              <div className="flex gap-3">
                <Button variant="primary" size="sm" className="flex-1" icon={<Phone size={14}/>}>
                  WhatsApp
                </Button>
                <Button variant="secondary" size="sm" className="flex-1" icon={<Navigation size={14}/>}>
                  Maps
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};