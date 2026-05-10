import React from 'react';
import { Shield, CheckCircle, Award, Clock, Zap, Home, Users, Wrench } from 'lucide-react';
import { Theme } from '../types';

interface AboutPageProps {
  theme: Theme;
}

const AboutPage: React.FC<AboutPageProps> = ({ theme }) => (
  <div className="w-full pt-20">
    <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-5xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>About Riyadh Electronic</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-amber-400">Leading TV Repair Specialists in Dhaka</h2>
            <p className={`text-lg transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
              Riyadh Electronic is a premier television repair service provider based in Dhaka, Bangladesh. With over a decade of hands-on experience, we have established ourselves as the most reliable destination for LED, OLED, and Smart TV restoration. Our mission is to provide high-quality, transparent, and affordable repair solutions to the residents of Dhaka.
            </p>
            <p className={`text-lg transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
              In Dhaka's fast-paced environment, we understand that your television is more than just an appliance—it's your source of information and entertainment. That's why we offer a rapid 24/7 home service across all major neighborhoods including Uttara, Gulshan, Banani, Bashundhara, and Dhanmondi. Our team of certified technicians uses state-of-the-art diagnostic tools to ensure every repair meets international standards.
            </p>
            <p className={`text-lg transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
              Whether you're facing a broken screen, motherboard failure, or software glitches in your smart TV, Riyadh Electronic is here to help. We take pride in our 99% satisfaction rate and our commitment to using original spare parts for all major brands like Sony, Samsung, and LG.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { number: '2000+', label: 'TVs Repaired' },
              { number: '1000+', label: 'Happy Customers' },
              { number: '10+', label: 'Years Experience' },
              { number: '99%', label: 'Satisfaction Rate' }
            ].map((stat, i) => (
              <div key={i} className={`p-8 rounded-xl border text-center hover:border-amber-400/50 transition-all hover:scale-105 ${
                theme === 'dark' ? 'bg-gradient-to-br from-slate-900/50 to-black border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <div className="text-4xl font-bold text-amber-400 mb-2">{stat.number}</div>
                <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className={`rounded-2xl p-12 border transition-all ${
          theme === 'dark' ? 'bg-gradient-to-r from-amber-400/10 to-orange-500/10 border-amber-400/30' : 'bg-slate-50 border-slate-200'
        }`}>
          <h2 className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Mohammad Riyadh', role: 'Founder & Master Technician', exp: '15+ years' },
              { name: 'Ahmed Hassan', role: 'Senior Technician', exp: '12+ years' },
              { name: 'Karim Ali', role: 'Electronics Expert', exp: '10+ years' }
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-slate-900 shadow-xl">
                  {member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}
                </div>
                <h3 className={`text-xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{member.name}</h3>
                <p className="text-amber-400 font-semibold mb-1">{member.role}</p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-slate-500'}`}>{member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Trust Section */}
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Why Customers Trust Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: Shield, title: 'Expert Technicians', desc: 'Certified professionals with 10-15 years experience' },
            { icon: CheckCircle, title: 'Genuine Parts', desc: 'Only original parts used in all repairs' },
            { icon: Award, title: 'Quality Guaranteed', desc: '3-6 months warranty on all repairs' },
            { icon: Clock, title: '24/7 Service', desc: 'Always open for your emergency needs' },
            { icon: Zap, title: 'Quick Turnaround', desc: 'Most repairs completed within 24 hours' },
            { icon: Home, title: 'Home Service', desc: 'Free diagnosis and on-site repair available' },
            { icon: Users, title: 'Customer Focused', desc: '500+ five-star reviews from satisfied customers' },
            { icon: Wrench, title: 'All Brands', desc: 'Experience with Samsung, Sony, LG, and more' }
          ].map((reason, i) => (
            <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 hover:border-amber-400/50 transition-all flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-amber-400/20 to-orange-500/20 w-fit flex-shrink-0">
                <reason.icon size={24} className="text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{reason.title}</h3>
                <p className="text-gray-400">{reason.desc}</p>
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
