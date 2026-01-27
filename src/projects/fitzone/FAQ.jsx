import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Do I need a long-term contract to join?",
      a: "No. While we offer discounted annual rates, we also provide month-to-month memberships with no long-term commitment."
    },
    {
      q: "Is there a trial period for new members?",
      a: "Yes! We offer a 3-day guest pass for local residents so you can experience the facility before committing."
    },
    {
      q: "Do you provide lockers and showers?",
      a: "Absolutely. Our facility includes premium locker rooms, digital locks, hot showers, and a complimentary towel service for Pro members."
    },
    {
      q: "Are personal trainers included in the membership?",
      a: "Basic plans include a gym orientation. Pro and Elite plans include monthly personal coaching sessions and custom workout plans."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-zinc-900 text-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black uppercase italic leading-none">
            Common <span className="text-orange-600">Questions</span>
          </h2>
          <div className="w-24 h-2 bg-orange-600 mx-auto mt-6"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-zinc-800 bg-black overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-zinc-950 transition-colors"
              >
                <span className="text-lg font-bold uppercase tracking-tight italic">
                  {faq.q}
                </span>
                <span className={`text-2xl font-black text-orange-600 transition-transform duration-300 ${openIndex === i ? 'rotate-45' : 'rotate-0'}`}>
                  +
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-zinc-400 border-t border-zinc-900 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;