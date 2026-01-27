const Programs = () => {
  const programs = [
    {
      title: "Strength Training",
      desc: "Structured strength workouts using free weights and machines, designed to support gradual progress and proper form.",
      icon: "🏋️",
    },
    {
      title: "Cardio Conditioning",
      desc: "Endurance-focused training sessions using treadmills, bikes, and functional movements to support overall fitness.",
      icon: "🏃",
    },
    {
      title: "Personal Coaching",
      desc: "One-on-one guidance with trainers to help plan workouts, track progress, and stay consistent.",
      icon: "💪",
    },
    {
      title: "Group Workouts",
      desc: "Instructor-led group sessions that encourage motivation, routine building, and community engagement.",
      icon: "👥",
    },
    {
      title: "Flexibility & Recovery",
      desc: "Mobility and recovery-focused sessions aimed at improving flexibility and reducing workout strain.",
      icon: "🧘",
    },
  ];

  return (
    <section id="programs" className="py-24 bg-zinc-900 text-white px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black uppercase mb-12 border-l-8 border-orange-600 pl-4">
          Our Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <article
              key={i}
              className="bg-zinc-800 p-8 hover:bg-orange-600 transition-colors group cursor-pointer"
              aria-label={p.title}
            >
              <div className="text-4xl mb-4" aria-hidden="true">
                {p.icon}
              </div>

              <h3 className="text-2xl font-bold uppercase mb-4">
                {p.title}
              </h3>

              <p className="text-zinc-200 group-hover:text-white leading-relaxed">
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
