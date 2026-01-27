const Testimonials = () => {
  const reviews = [
    {
      name: "Amit",
      role: "Strength Training Member",
      text: "FitZone offers a motivating environment and well-maintained equipment. The overall atmosphere makes it easier to stay consistent with workouts.",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200"
    },
    {
      name: "Priya",
      role: "Cardio & Conditioning",
      text: "I like the structured layout and availability of cardio equipment. The trainers are approachable and always ready to help when needed.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
    },
    {
      name: "Raj",
      role: "Morning Batch Member",
      text: "The flexible timings and clean facilities make FitZone easy to fit into a busy routine. It feels organized and professionally managed.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200"
    }
  ];

  return (
    <section className="py-24 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-sm">
            Testimonials
          </span>
          <h2 className="text-5xl font-black uppercase mt-4">
            Member <span className="text-orange-600">Feedback</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="bg-zinc-900 p-10 border-t-4 border-orange-600 relative"
            >
              <span className="text-6xl text-orange-600/20 absolute top-4 right-8 font-serif">
                “
              </span>

              <p className="text-zinc-300 italic mb-8 relative z-10 leading-relaxed">
                {rev.text}
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={rev.img}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-600"
                />
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-wide">
                    {rev.name}
                  </h4>
                  <p className="text-orange-600 text-xs font-bold uppercase">
                    {rev.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
