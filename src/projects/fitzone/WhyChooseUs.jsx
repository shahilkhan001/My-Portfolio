const WhyChooseUs = () => {
  const features = [
    {
      title: "Modern Equipment",
      desc: "A wide range of well-maintained machines and free weights designed to support different training styles.",
      img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=75&w=800&auto=format&fm=webp"
    },
    {
      title: "Experienced Trainers",
      desc: "Knowledgeable trainers who focus on proper technique, guidance, and long-term fitness habits.",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=75&w=800&auto=format&fm=webp"
    },
    {
      title: "Flexible Scheduling",
      desc: "Training schedules designed to accommodate different routines and lifestyles.",
      img: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=75&w=800&auto=format&fm=webp"
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-zinc-900 text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-none mb-4">
              Not Just a Gym, <br />
              <span className="text-orange-600">A Lifestyle.</span>
            </h2>
          </div>

          <p className="text-zinc-200 font-medium uppercase tracking-widest text-sm">
            Experience the difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-zinc-800">
          {features.map((item, i) => (
            <article
              key={i}
              className="group relative overflow-hidden h-[400px] border-r border-zinc-800 last:border-r-0"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

              <div className="absolute bottom-0 p-8">
                <h3 className="text-2xl font-black uppercase mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase text-xs font-bold tracking-tighter">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
