const FitZoneContact = () => {
  return (
    <section id="contact" className="py-24 bg-orange-600 text-white px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-black uppercase leading-none mb-6">
            Start Your Fitness Journey.
          </h2>

          <p className="text-lg mb-4 font-bold">
            Have questions about our programs or memberships?
          </p>

          <p className="text-base text-white/90 leading-relaxed max-w-md">
            Fill out the form and our team will get in touch to help you choose
            the right training plan based on your goals and availability.
          </p>

          <div className="mt-6 text-sm font-bold uppercase tracking-widest text-white/80">
            Flexible schedules • Modern facilities • Expert guidance
          </div>
        </div>

        {/* FORM */}
        <div className="md:w-1/2 w-full bg-white p-8 shadow-2xl">
          <form className="space-y-4">
            
            <div>
              <label htmlFor="full-name" className="sr-only">
                Full Name
              </label>
              <input
                id="full-name"
                type="text"
                placeholder="Full Name"
                className="w-full p-4 border border-zinc-200 text-black outline-none focus:border-orange-600"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="w-full p-4 border border-zinc-200 text-black outline-none focus:border-orange-600"
                required
              />
            </div>

            <div>
              <label htmlFor="program-select" className="sr-only">
                Preferred Program
              </label>
              <select
                id="program-select"
                className="w-full p-4 border border-zinc-200 text-black outline-none bg-white"
              >
                <option>Preferred Program</option>
                <option>Strength Training</option>
                <option>Cardio Conditioning</option>
                <option>Group Workouts</option>
                <option>Personal Coaching</option>
                <option>Flexibility & Recovery</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 font-black uppercase tracking-widest hover:bg-zinc-800 transition-all"
            >
              Send Inquiry
            </button>

            <p className="text-xs text-zinc-500 text-center mt-2">
              This form is for inquiry purposes only. No payment required.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FitZoneContact;
