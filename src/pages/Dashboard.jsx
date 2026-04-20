import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName') || 'User';

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userName');
    window.dispatchEvent(new Event('storage'));
    navigate('/');
  };

  return (
    <div className="flex min-h-screen bg-surface-container-low text-on-surface font-body overflow-hidden">
      <aside className="w-72 fixed inset-y-0 bg-surface/80 backdrop-blur-3xl border-r border-white/5 p-10 flex flex-col gap-12 z-50">
        <h1 className="text-3xl font-black text-primary tracking-tighter italic">Picksell</h1>
        <nav className="flex-1 space-y-3">
          <NavItem icon="dashboard" label="Overview" active />
          <NavItem icon="account_balance_wallet" label="My Wallet" />
          <NavItem icon="leaderboard" label="Analytics" />
          <NavItem icon="settings" label="System" />
        </nav>
        <button onClick={logout} className="flex items-center gap-4 p-4 text-error font-black hover:bg-error/10 rounded-[2rem] transition-all group">
          <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">logout</span> Sign Out
        </button>
      </aside>

      <main className="ml-72 flex-1 p-16 relative">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] -z-10" />
        <header className="flex justify-between items-end mb-16 px-4">
          <div className="space-y-2"><h2 className="text-6xl font-black tracking-tightest">Vitals</h2>
          <p className="text-on-surface-variant text-lg font-bold">Welcome back, <span className="text-on-surface capitalize">{userName}!</span></p></div>
          <button className="px-8 py-4 bg-surface-container/60 backdrop-blur-xl border border-white/10 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">March 2024</button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <Card className="bg-gradient-to-br from-primary to-primary-dim text-on-primary"><Stat label="Net Worth" value="$9.2M" trend="+12.5%" isMain /></Card>
          <Card className="bg-surface-container/40 backdrop-blur-2xl border border-white/5"><Stat label="Revenue" value="$84k" trend="+4.2%" color="text-tertiary" /></Card>
          <Card className="bg-surface-container/40 backdrop-blur-2xl border border-white/5"><Stat label="Expenses" value="$12k" trend="-2.5%" color="text-error" /></Card>
        </div>

        <section className="bg-surface-container/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-12 shadow-2xl">
          <h3 className="text-3xl font-black italic tracking-tighter mb-10">Flow</h3>
          <div className="space-y-8">
            <Tx name="Global Payout" date="Mar 12" price="+$4k" icon="payments" pos />
            <Tx name="Server Infra" date="Mar 10" price="-$1k" icon="hub" />
            <Tx name="Marketing" date="Mar 05" price="-$3k" icon="campaign" />
          </div>
        </section>
      </main>
    </div>
  );
};

const NavItem = ({ icon, label, active }) => (
  <a href="#" className={`flex items-center gap-4 p-4 rounded-[1.5rem] font-bold transition-all ${active ? 'bg-primary text-on-primary shadow-xl shadow-primary/20' : 'text-on-surface/40 hover:bg-surface-container hover:text-on-surface'}`}>
    <span className="material-symbols-outlined">{icon}</span> {label}
  </a>
);

const Card = ({ children, className }) => (
  <div className={`p-10 rounded-[3.5rem] shadow-2xl hover:translate-y-[-8px] transition-all duration-500 cursor-pointer ${className}`}>{children}</div>
);

const Stat = ({ label, value, trend, color, isMain }) => (
  <div className="space-y-4">
    <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${isMain ? 'opacity-80' : 'opacity-40'}`}>{label}</p>
    <div className="flex justify-between items-end"><h3 className="text-3xl font-black tracking-tighter">{value}</h3>
    <span className={`text-xs font-black ${isMain ? 'text-on-primary' : color} px-3 py-1 bg-white/5 rounded-full`}>{trend}</span></div>
  </div>
);

const Tx = ({ name, date, price, icon, pos }) => (
  <div className="flex justify-between items-center group cursor-pointer p-2 hover:translate-x-2 transition-all">
    <div className="flex items-center gap-6">
      <div className="w-16 h-16 bg-surface-on-variant/5 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all shadow-inner"><span className="material-symbols-outlined text-2xl">{icon}</span></div>
      <div><p className="text-xl font-black tracking-tight">{name}</p><p className="text-xs opacity-30 font-black uppercase tracking-widest">{date}</p></div>
    </div>
    <p className={`text-2xl font-black tracking-tighter ${pos ? 'text-tertiary' : 'text-on-surface'}`}>{price}</p>
  </div>
);

export default Dashboard;