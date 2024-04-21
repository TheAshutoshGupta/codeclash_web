import React from 'react'

const faqs = [
  {
    question: "What is a CodeClash?",
    answer:
      "CodeClash is a hackathon where developers from diverse backgrounds all over India collaborate to create innovative software or hardware solutions within a limited timeframe.",
  },
  {
    question: "Who can attend CodeClash?",
    answer:
      "Everyone is welcome to join the CodeClash family! Whether you're a student from any course or college, we're thrilled to have you on board.",
  },
  {
    question: "I am a first-time participant, what should I do?",
    answer:
      "Welcome aboard, newbie! Don't fret, we're all about supporting our first-timers. Dive into our exciting workshops and events designed to kickstart your hackathon journey with a bang!",
  },
  {
    question: "How does team formation work for CodeClash?",
    answer:
      "Teamwork makes the dream work at CodeClash! Gather your squad of up to four members, or if you're flying solo, fear not! We'll help you connect with like-minded hackers to form the ultimate dream team.",
  },
  {
    question: "Is there a registration fee for CodeClash?",
    answer:
      "Nope, zero, nil! CodeClash is all about breaking barriers, and that includes registration fees. It's free for all passionate participants!",
  },
  {
    question: "Will there be swags?",
    answer:
      "You betcha! Get ready to snag some cool CodeClash swag as you dive into the hackathon frenzy. Who knows? You might just walk away with some awesome goodies!",
  },
];

function FaqComponent() {
  return (<>
  <div class="relative h-full w-full my-10 bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(155,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(155,0,182,.15),rgba(255,255,255,0))]"></div></div>
    <section className="mx-auto  max-w-7xl px-10 py-10 md:px-3">
    
    <div>
      <div className="mx-auto max-w-2xl text-center lg:text-center">
        {/* <h2 className="text-4xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          FAQ
        </h2> */}
        <span className='inline-flex justify-self-center uppercase mx-auto font-bold text-4xl lg:text-5xl animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent'>
      FAQ
        </span>
        

      </div>
      <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
        {faqs.map((faq, i) => (
          <div key={i}>
            <h2 className="text-3xl font-semibold text-white">{faq.question}</h2>
            <p className="mt-6 p-4 leading-6 tracking-wide text-[#ccbaa9]">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  </section>
  </>
    
  )
}

export default FaqComponent
