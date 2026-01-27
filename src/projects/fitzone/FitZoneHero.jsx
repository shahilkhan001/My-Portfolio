const FitZoneHero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=75&w=1600&auto=format&fit=crop" 
          alt="Gym training environment"
          className="w-full h-full object-cover opacity-40"
          fetchpriority="high"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
          Push Your <span className="text-orange-600">Limits</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-100 mb-8 max-w-2xl mx-auto font-medium uppercase tracking-widest">
          Premium equipment. Expert trainers. Elite community.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 uppercase transition-all tracking-wider text-center"
          >
            Join Now
          </a>

          <a
            href="#programs"
            className="border-2 border-white hover:bg-white hover:text-black text-white font-bold py-4 px-10 uppercase transition-all tracking-wider text-center"
          >
            View Schedule
          </a>
        </div>
      </div>
    </section>
  );
};

export default FitZoneHero;
