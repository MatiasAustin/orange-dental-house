import React, { useState } from 'react';
import { Send, Calendar, Clock } from 'lucide-react';
import { Button } from '../components/Button';

export const Appointment: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    complaint: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate WhatsApp Redirect
    alert("Redirecting to WhatsApp with message: " + JSON.stringify(formData));
  };

  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center justify-center px-4 bg-orange-50/30">
       <div className="w-full max-w-4xl grid md:grid-cols-2 bg-white rounded-[40px] shadow-2xl overflow-hidden border border-white/50">
          
          {/* Left Side: Info */}
          <div className="p-10 bg-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-500/20 rounded-full blur-[80px]"></div>
             
             <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6">Buat Janji Temu</h2>
                <p className="text-slate-300 mb-8 leading-relaxed">Isi form singkat ini, dan admin kami akan segera menghubungi Anda via WhatsApp untuk konfirmasi jadwal.</p>
                
                <div className="space-y-6">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <Calendar className="text-orange-400" />
                      </div>
                      <div>
                        <p className="font-bold">Buka Setiap Hari</p>
                        <p className="text-sm text-slate-400">10:00 - 21:00 WIB</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <Clock className="text-orange-400" />
                      </div>
                      <div>
                        <p className="font-bold">Fast Response</p>
                        <p className="text-sm text-slate-400">Admin standby jam kerja</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="mt-12 relative z-10">
               <p className="text-sm text-slate-500">Orange Dental House</p>
             </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-10 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap</label>
                 <input 
                   type="text" 
                   required
                   className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                   placeholder="Contoh: Budi Santoso"
                   value={formData.name}
                   onChange={e => setFormData({...formData, name: e.target.value})}
                 />
               </div>

               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-2">Nomor WhatsApp</label>
                 <input 
                   type="tel" 
                   required
                   className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                   placeholder="0812..."
                   value={formData.phone}
                   onChange={e => setFormData({...formData, phone: e.target.value})}
                 />
               </div>

               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-2">Pilih Cabang</label>
                 <select 
                   required
                   className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                   value={formData.location}
                   onChange={e => setFormData({...formData, location: e.target.value})}
                 >
                    <option value="">Pilih Lokasi...</option>
                    <option value="cipinang">Cipinang</option>
                    <option value="jatibening">Jatibening</option>
                    <option value="antasari">Antasari</option>
                 </select>
               </div>

               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-2">Keluhan / Perawatan</label>
                 <textarea 
                   rows={3}
                   className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                   placeholder="Ingin pasang behel..."
                   value={formData.complaint}
                   onChange={e => setFormData({...formData, complaint: e.target.value})}
                 />
               </div>

               <Button type="submit" size="lg" className="w-full justify-center" icon={<Send size={18} />}>
                 Kirim ke WhatsApp
               </Button>
            </form>
          </div>
       </div>
    </div>
  );
};