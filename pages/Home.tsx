import React from 'react';
import { ArrowRight, Star, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { GeneratedImage } from '../components/GeneratedImage';

export const Home: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Reference-Inspired Hero Section */}
      <section className="relative min-h-screen pt-24 px-4 flex flex-col justify-center bg-pastel-bg">
        
        {/* Giant Background Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center select-none pointer-events-none z-0">
          <h1 className="text-[15vw] md:text-[18vw] font-heading font-bold text-white leading-none tracking-tighter opacity-60">
            DENTAL
          </h1>
          <h1 className="text-[15vw] md:text-[18vw] font-heading font-bold text-outline leading-none tracking-tighter absolute top-0 left-0 w-full h-full opacity-40 translate-x-1 translate-y-1">
            DENTAL
          </h1>
        </div>

        <div className="container mx-auto relative z-10 grid lg:grid-cols-12 gap-8 items-center h-full">
          
          {/* Left Text Content */}
          <div className="lg:col-span-4 space-y-8 mt-12 lg:mt-0 order-2 lg:order-1">
            <div className="space-y-2">
              <span className="text-pastel-gray text-xs font-bold tracking-[0.2em] uppercase">Est. 2024 Jakarta</span>
              <h2 className="text-4xl md:text-6xl font-heading font-light text-pastel-dark leading-tight">
                Your reliable <br/>
                <span className="font-bold text-pastel-clay">Smile Partner</span>
              </h2>
            </div>
            
            <p className="text-pastel-gray text-base leading-relaxed max-w-sm">
              Orange Dental laboratory concept that produces high-quality aesthetics. Modern solutions for your perfect smile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/appointment">
                 <Button className="w-full sm:w-auto">Get Started</Button>
              </Link>
              <Link to="/about">
                <Button variant="ghost" className="w-full sm:w-auto hover:bg-white" icon={<ArrowRight size={16}/>}>
                  About Us
                </Button>
              </Link>
            </div>

            <div className="pt-8 border-t border-pastel-gray/20 flex gap-12">
               <div>
                  <h4 className="text-3xl font-heading font-bold text-pastel-dark">12k+</h4>
                  <p className="text-xs text-pastel-gray mt-1 uppercase tracking-wider">Happy Patients</p>
               </div>
               <div>
                  <h4 className="text-3xl font-heading font-bold text-pastel-dark">15+</h4>
                  <p className="text-xs text-pastel-gray mt-1 uppercase tracking-wider">Specialists</p>
               </div>
            </div>
          </div>

          {/* Center Image (Overlapping Text) */}
          <div className="lg:col-span-5 relative h-[500px] md:h-[700px] order-1 lg:order-2 flex items-center justify-center">
             <div className="relative w-full h-full">
                {/* Main Hero Image - Generated via AI */}
                <div className="w-full h-full rounded-t-[100px] rounded-b-[40px] shadow-2xl z-10 relative overflow-hidden">
                    <GeneratedImage 
                        prompt="A friendly female dentist smiling warmly at a patient in a modern dental clinic, soft pastel orange and teal aesthetic, photorealistic, 8k, bright natural lighting, minimalist, professional photography"
                        fallbackSrc="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2787&auto=format&fit=crop"
                        alt="Dental Aesthetics"
                        className="w-full h-full object-cover"
                    />
                </div>
                
                {/* Floating Detail Markers */}
                <div className="absolute top-[30%] left-[-20px] z-20 animate-bounce delay-700">
                   <div className="glass-card p-2 rounded-full flex items-center gap-2 pr-4 cursor-pointer hover:scale-105 transition-transform">
                      <div className="w-8 h-8 rounded-full bg-pastel-clay flex items-center justify-center text-white">
                        <Plus size={16} />
                      </div>
                      <span className="text-xs font-bold text-pastel-dark">Whitening</span>
                   </div>
                </div>

                <div className="absolute bottom-[20%] right-[-20px] z-20 animate-bounce">
                   <div className="glass-card p-2 rounded-full flex items-center gap-2 pl-4 flex-row-reverse cursor-pointer hover:scale-105 transition-transform">
                      <div className="w-8 h-8 rounded-full bg-pastel-gray flex items-center justify-center text-white">
                        <Plus size={16} />
                      </div>
                      <span className="text-xs font-bold text-pastel-dark">Implants</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Contact Info */}
          <div className="lg:col-span-3 flex flex-col justify-end h-full pb-12 space-y-6 order-3">
             <div className="glass p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-pastel-clay">
                      <Star size={18} fill="currentColor" />
                   </div>
                   <div>
                      <p className="text-sm font-bold text-pastel-dark">4.9 Rating</p>
                      <p className="text-xs text-pastel-gray">Based on reviews</p>
                   </div>
                </div>
                <hr className="border-pastel-gray/20"/>
                <div className="space-y-1">
                   <p className="text-xs text-pastel-gray">Contact</p>
                   <p className="text-sm font-bold text-pastel-dark">hello@orangedental.com</p>
                   <p className="text-sm font-bold text-pastel-dark">+62 812-3456-7890</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Section - Minimal Grid */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-12 gap-12">
               <div className="md:col-span-4">
                  <span className="text-pastel-clay font-bold text-sm tracking-widest uppercase mb-4 block">Services</span>
                  <h3 className="text-4xl font-heading font-medium text-pastel-dark mb-6">
                     Comprehensive <br/> Dental Care
                  </h3>
                  <p className="text-pastel-gray mb-8">
                     We analyze competitors in a niche, identify weak points in their design. Based on analysis, we design the site in a style characteristic of the subject.
                  </p>
                  <Link to="/treatments">
                    <Button variant="outline">View All Services</Button>
                  </Link>
               </div>
               
               <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
                  {[
                     { num: '01', title: 'Orthodontics', desc: 'Alignment and straightening of teeth with modern braces.' },
                     { num: '02', title: 'Aesthetics', desc: 'Veneers and whitening for a brighter, confident smile.' },
                     { num: '03', title: 'Prosthetics', desc: 'Implants and dentures designed for natural function.' },
                     { num: '04', title: 'Surgery', desc: 'Painless removal and surgical procedures by experts.' },
                  ].map((item, i) => (
                     <div key={i} className="group p-8 bg-pastel-bg rounded-[32px] hover:bg-pastel-clay hover:text-white transition-all duration-500 cursor-pointer">
                        <span className="text-xl font-heading font-light opacity-50 mb-4 block group-hover:text-white">{item.num}</span>
                        <h4 className="text-2xl font-heading font-medium text-pastel-dark mb-2 group-hover:text-white">{item.title}</h4>
                        <p className="text-pastel-gray text-sm group-hover:text-white/80">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Font/Design Showcase Section */}
      <section className="py-24 bg-pastel-bg">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
           <div className="relative">
              <img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2574&auto=format&fit=crop" className="rounded-3xl shadow-xl w-full max-w-md mx-auto" alt="Doctor" />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg max-w-xs hidden md:block">
                 <p className="font-heading font-bold text-lg text-pastel-dark mb-2">Modern Lab</p>
                 <p className="text-sm text-pastel-gray">Our team includes qualified dental technicians constantly improving skills.</p>
              </div>
           </div>
           <div>
              <span className="text-pastel-clay font-bold text-sm tracking-widest uppercase mb-4 block">About The Project</span>
              <h3 className="text-4xl font-heading font-medium text-pastel-dark mb-6">
                 Aesthetics Studio is a modern dental laboratory
              </h3>
              <p className="text-pastel-gray leading-loose mb-8">
                 Terms of the project: A period of 2 weeks was agreed to complete the design. We prioritize clean lines, soft pastel colors, and a trustworthy environment for our patients.
              </p>
              <div className="grid grid-cols-2 gap-8">
                 <div className="p-6 bg-white rounded-xl">
                    <p className="font-heading text-2xl text-pastel-dark mb-1">Jost</p>
                    <p className="text-xs text-pastel-gray uppercase tracking-wider">Headings Font</p>
                 </div>
                 <div className="p-6 bg-white rounded-xl">
                    <p className="font-sans text-2xl text-pastel-dark mb-1">Manrope</p>
                    <p className="text-xs text-pastel-gray uppercase tracking-wider">Body Font</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};