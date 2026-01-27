const Gallery = () => {
  const shots = [
    {
      url: "https://images.pexels.com/photos/17227607/pexels-photo-17227607.jpeg",
      span: "md:col-span-2",
    },
    {
      url: "https://images.pexels.com/photos/17211446/pexels-photo-17211446.jpeg",
      span: "md:col-span-2",
    },
    {
      url: "https://images.pexels.com/photos/7174396/pexels-photo-7174396.jpeg",
      span: "md:col-span-2",
    },
    {
      url: "https://images.pexels.com/photos/17227606/pexels-photo-17227606.jpeg",
      span: "md:col-span-2",
    },
    {
      url: "https://images.pexels.com/photos/3916766/pexels-photo-3916766.jpeg",
      span: "md:col-span-2",
    },
    {
      url: "https://images.pexels.com/photos/28320723/pexels-photo-28320723.jpeg",
      span: "md:col-span-2",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 border-b-2 border-zinc-900 pb-8">
          <h2 className="text-5xl font-black uppercase italic leading-none">
            The <span className="text-orange-600">Facility</span>
          </h2>
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm mt-4 md:mt-0">
            Premium Environment • 24,000 Sq Ft
          </p>
        </div>

        {/* Horizontal Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {shots.map((shot, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden bg-zinc-900 ${shot.span}`}
            >
              <img
                src={shot.url}
                alt="Gym Facility"
                loading="lazy"
                className="w-full h-full object-cover grayscale brightness-75 
                           group-hover:grayscale-0 group-hover:brightness-100 
                           group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 border-4 border-orange-600 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
