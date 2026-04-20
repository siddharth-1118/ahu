import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-surface font-body overflow-hidden selection:bg-primary selection:text-on-primary">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-20 px-8 flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-mesh-gradient opacity-10 animate-pulse pointer-events-none" />
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        
        <header className="relative z-10 space-y-6 max-w-4xl">
          <div className="inline-flex px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-black uppercase tracking-widest text-primary">
            Revolutionizing Global Commerce
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] text-on-surface">
            SELL TO THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">WHOLE WORLD.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto font-medium leading-relaxed">
            Picksell is the hyper-growth engine for modern brands. Scale globally with zero friction and elite design.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-10">
            <button onClick={() => navigate('/')} className="px-10 py-5 bg-primary text-on-primary text-lg font-extrabold rounded-full hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30">
              Launch Your Store
            </button>
            <button className="px-10 py-5 bg-surface-container border border-outline/10 text-lg font-extrabold rounded-full hover:bg-surface-on-variant transition-all backdrop-blur-xl">
              Explore Network
            </button>
          </div>
        </header>

        {/* Floating Feature bar */}
        <div className="relative z-10 mt-32 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl">
          <Feature label="99.9% Uptime" icon="bolt" />
          <Feature label="Global Payouts" icon="public" />
          <Feature label="Zero Fee Scale" icon="trending_down" />
          <Feature label="Enterprise API" icon="code" />
        </div>
      </section>

      {/* Decorative Gradient Blob */}
      <div className="fixed bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-tertiary/20 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );
};

const Feature = ({ label, icon }) => (
  <div className="p-8 bg-surface-container/40 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] flex flex-col items-center gap-4 hover:border-primary/30 hover:bg-surface-container/60 transition-all cursor-default group">
    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-all">
      <span className="material-symbols-outlined text-3xl font-bold">{icon}</span>
    </div>
    <span className="text-sm font-black uppercase tracking-widest text-on-surface/60 group-hover:text-primary transition-colors">{label}</span>
  </div>
);

export default Landing;