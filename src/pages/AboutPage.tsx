import React from 'react';
import { Shield, CheckCircle, Award, Clock, Zap, Home, Users, Wrench } from 'lucide-react';
import { Theme } from '../types';

interface AboutPageProps {
  theme: Theme;
  setCurrentPage: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ theme, setCurrentPage }) => (
  <div className="w-full pt-20">
    <section className={`py-24 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-4xl sm:text-6xl font-black text-center mb-16 tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>The Riyadh Legacy</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-amber-500 uppercase leading-none">Engineering <br /> Perfection Since 2014</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
            </div>
            <p className={`text-xl leading-relaxed transition-colors duration-500 font-black tracking-tight ${theme === 'dark' ? 'text-gray-200' : 'text-slate-800'}`}>
              Riyadh Electronic doesn't just repair—we restore. Over a decade of defining technical excellence in Dhaka.
            </p>
            <p className={`text-lg leading-relaxed transition-colors duration-500 font-medium ${theme === 'dark' ? 'text-gray-500' : 'text-slate-500'}`}>
              What started as a boutique display workshop has evolved into Dhaka's premier electronics restoration facility. We've mastered the nuances of OLED chemistry, motherboard architecture, and micro-circuitry to ensure your vision remains crystal clear.
            </p>
            <div className="pt-6">
              <button 
                onClick={() => setCurrentPage('contact')} 
                className="px-10 py-5 rounded-2xl bg-amber-400 text-slate-900 font-black uppercase tracking-[0.2em] text-xs hover:shadow-2xl hover:scale-105 transition-all shadow-xl shadow-amber-400/20"
              >
                Meet the Engineering Team
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { number: '12K+', label: 'Master Repairs' },
              { number: '8500', label: 'Dhaka Clients' },
              { number: '10+', label: 'Industry Years' },
              { number: '100%', label: 'Quality Audit' }
            ].map((stat, i) => (
              <div key={i} className={`p-8 rounded-[2rem] border text-center group transition-all duration-500 hover:scale-[1.03] ${
                theme === 'dark' ? 'bg-slate-900/40 border-slate-800 hover:border-amber-400/50' : 'bg-white border-slate-100 hover:border-amber-400 shadow-xl shadow-slate-200/40'
              }`}>
                <div className="text-4xl font-black text-amber-400 mb-2 tracking-tighter group-hover:scale-110 transition-transform">{stat.number}</div>
                <p className={`font-black text-[10px] uppercase tracking-widest ${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className={`rounded-[2rem] p-10 sm:p-16 border transition-all ${
          theme === 'dark' ? 'bg-slate-900/20 border-slate-800' : 'bg-slate-50 border-slate-100 shadow-xl shadow-slate-200/30'
        }`}>
          <h2 className={`text-3xl sm:text-4xl font-black text-center mb-16 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Master Technicians</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: 'Mohammad Riyadh', role: 'Chief Technical Officer', exp: 'Micro-Electron Specialist' },
              { name: 'Ahmed Hassan', role: 'Lead Panel Architect', exp: 'OLED Restoration Expert' },
              { name: 'Karim Ali', role: 'Circuitry Specialist', exp: 'Motherboard Restoration' }
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-[100px] h-[100px] rounded-[2rem] bg-slate-900 mx-auto mb-8 flex items-center justify-center text-3xl font-black text-amber-500 border border-white/5 shadow-2xl group-hover:scale-110 transition-all duration-500">
                  {member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}
                </div>
                <h3 className={`text-xl font-black mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{member.name}</h3>
                <p className="text-amber-500 font-black text-[10px] uppercase tracking-widest mb-3">{member.role}</p>
                <div className="h-0.5 w-10 bg-slate-800 mx-auto mb-3 group-hover:w-16 transition-all"></div>
                <p className={`text-xs font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}`}>{member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Trust Section */}
    <section className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-6xl font-black text-white text-center mb-24 tracking-tight leading-none">Operational <br className="md:hidden" /> Standards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: 'Verified Experts', desc: 'Masters with a decade of specific display experience.' },
            { icon: CheckCircle, title: 'Vendor Spares', desc: 'Zero aftermarket components. Generic is forbidden.' },
            { icon: Award, title: 'Full Warranty', desc: 'Comprehensive technical insurance on all restores.' },
            { icon: Clock, title: '24/7 Deployment', desc: 'Emergency response logistics for priority needs.' },
            { icon: Zap, title: 'Express Restore', desc: 'Priority diagnostics completed within 120 minutes.' },
            { icon: Home, title: 'On-Site Repair', desc: 'Professional lab grade equipment deployed to your home.' },
            { icon: Users, title: 'Quality Audit', desc: 'Multi-stage validation on every single repair.' },
            { icon: Wrench, title: 'Brand Archive', desc: 'Extensive library of proprietary vendor firmware.' }
          ].map((reason, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-amber-400/30 hover:bg-white/10 transition-all duration-500 flex flex-col items-start gap-6 group">
              <div className="p-4 rounded-xl bg-white/5 group-hover:scale-110 transition-transform">
                <reason.icon size={28} className="text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tight">{reason.title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-gradient-to-r from-amber-400/10 to-orange-500/10 border-t border-amber-400/30 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Our Service?</h2>
        <p className="text-xl text-gray-300 mb-8">Contact us today for professional TV repair</p>
        <a href="tel:01726-725236" className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold hover:shadow-2xl hover:shadow-amber-400/50 transition-all">
          Call: 01726-725236
        </a>
      </div>
    </section>
  </div>
);

export default AboutPage;
