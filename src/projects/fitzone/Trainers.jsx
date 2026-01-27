const Trainers = () => {
  const trainers = [
    { name: "Nathan Dumlao", specialty: "Strength & Conditioning", img: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwdHJhaW5lcnxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Ryan Mitchell", specialty: "HIIT & Fat Loss", img: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=800" },
    { name: "Daniel Brooks", specialty: "Mobility & Yoga", img: "https://images.unsplash.com/photo-1745329532611-03818982ed31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGd5bSUyMHRyYWluZXJ8ZW58MHwxfDB8fHww" },
  ];

  return (
    <section id="trainers" className="py-24 bg-zinc-900 text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-black uppercase leading-none italic border-l-8 border-orange-600 pl-6">
            Meet the <span className="text-orange-600">Pros</span>
          </h2>
          <p className="mt-4 text-zinc-100 font-bold uppercase tracking-widest text-sm">
            Work with the best in the industry
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {trainers.map((t, i) => (
            <article key={i} className="group relative">
              <div className="relative overflow-hidden aspect-[3/4] bg-zinc-800">
                <img
                  src={t.img}
                  alt={`Trainer ${t.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-600 translate-x-16 translate-y-16 rotate-45 group-hover:scale-150 transition-transform duration-500" />
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-black uppercase tracking-tighter italic">
                  {t.name}
                </h3>
                <p className="text-orange-500 font-bold uppercase text-xs tracking-[0.2em] mt-1">
                  {t.specialty}
                </p>
                <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button aria-label={`${t.name} Instagram`} className="text-xs font-bold uppercase text-white hover:text-orange-600 transition-colors">Instagram</button>
                  <button aria-label={`${t.name} Twitter`} className="text-xs font-bold uppercase text-white hover:text-orange-600 transition-colors">Twitter</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;