import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    localStorage.setItem('isAuthenticated', 'true');
    window.dispatchEvent(new Event('storage'));
    navigate('/dashboard');
  };

  return (
    <main className="min-h-screen grid lg:grid-cols-2 bg-surface-container-lowest font-body overflow-hidden">
      {/* Visual Section (Left) */}
      <section className="relative hidden lg:flex items-center justify-center p-12 bg-background">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20 blur-3xl animate-pulse" />
        <div className="relative z-10 space-y-12 max-w-lg text-center">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="relative aspect-square w-80 mx-auto">
             <div className="absolute inset-0 bg-primary/20 rounded-[4rem] rotate-6 border border-primary/20 shadow-2xl shadow-primary/10" />
             <div className="absolute inset-0 bg-surface-container/40 backdrop-blur-3xl rounded-[4rem] border border-white/10 flex flex-col items-center justify-center p-8 gap-4 shadow-2xl">
                <div className="w-20 h-2 bg-on-surface/10 rounded-full" />
                <div className="w-full h-32 bg-primary/10 rounded-3xl animate-pulse" />
                <div className="w-full flex gap-2">
                  <div className="w-1/3 h-12 bg-secondary/10 rounded-2xl" /><div className="w-2/3 h-12 bg-tertiary/10 rounded-2xl" />
                </div>
             </div>
          </div>
          <h1 className="text-6xl font-black text-on-background tracking-tighter leading-tight">Fast. Global.<br/><span className="text-primary italic">Limitless.</span></h1>
        </div>
      </section>

      {/* Form Section (Right) */}
      <section className="flex items-center justify-center p-8 lg:p-24 bg-surface-container-low/30">
        <div className="w-full max-w-md space-y-10 relative">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10" />
          <header className="space-y-2">
            <div className="text-xs font-black uppercase tracking-widest text-primary mb-6">Picksell Platform</div>
            <h2 className="text-5xl font-black tracking-tight">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
            <p className="text-on-surface-variant font-medium">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button 
                onClick={() => setIsLogin(!isLogin)} 
                className="ml-2 text-on-surface font-bold underline decoration-primary decoration-4 underline-offset-4 hover:text-primary transition-colors"
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </header>

          <form onSubmit={handleAuth} className="space-y-6">
            <AuthInput label="Business Email" type="email" placeholder="ceo@company.com" />
            <AuthInput label="Password" type="password" placeholder="••••••••" />
            <button className="w-full py-5 bg-primary text-on-primary font-black rounded-[2rem] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/20 text-lg">
              {isLogin ? 'Sign In to Dashboard' : 'Launch Your Platform'}
            </button>
          </form>

          <div className="flex gap-4">
            <button onClick={handleAuth} className="flex-1 py-4 bg-surface border border-outline/10 rounded-2xl font-bold hover:bg-surface-bright transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">google</span> Google
            </button>
            <button onClick={handleAuth} className="flex-1 py-4 bg-surface border border-outline/10 rounded-2xl font-bold hover:bg-surface-bright transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">laptop_mac</span> Apple
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

const AuthInput = ({ label, ...props }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-4">{label}</label>
    <input 
      {...props} 
      required 
      className="w-full px-8 py-5 bg-surface border border-outline/10 rounded-[2rem] outline-none focus:border-primary/50 transition-all font-semibold text-on-surface placeholder:opacity-30" 
    />
  </div>
);

export default AuthPage;