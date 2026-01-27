const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "From $30",
      features: [
        "Gym Floor Access",
        "Locker Room Facilities",
        "Standard Equipment Usage",
      ],
    },
    {
      name: "Performance",
      price: "From $60",
      features: [
        "Everything in Starter",
        "Group Training Sessions",
        "Monthly Trainer Guidance",
        "Recovery Zone Access",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "Custom",
      features: [
        "Unlimited Gym Access",
        "Personal Training Programs",
        "Nutrition & Progress Tracking",
        "Priority Support & Scheduling",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black uppercase mb-4">
          Membership Plans
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto mb-16">
          Flexible plans designed to match different training goals and
          commitment levels.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`p-10 border-2 transition-all ${
                plan.popular
                  ? "border-orange-600 bg-zinc-900 scale-105"
                  : "border-zinc-800"
              }`}
            >
              {plan.popular && (
                <div className="mb-4 text-orange-600 text-xs font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold uppercase mb-4">
                {plan.name}
              </h3>

              <div className="mb-6">
                <span className="text-4xl font-black text-white">
                  {plan.price}
                </span>
                <span className="text-zinc-400 uppercase tracking-widest ml-2 text-sm">
                  / month
                </span>
              </div>

              <ul className="mb-8 space-y-3 text-zinc-300 text-sm">
                {plan.features.map((f, j) => (
                  <li key={j}>• {f}</li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-3 font-bold uppercase tracking-wider transition-colors text-center ${
                  plan.popular
                    ? "bg-orange-600 hover:bg-orange-700"
                    : "bg-white text-black hover:bg-zinc-200"
                }`}
              >
                Contact Us
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
