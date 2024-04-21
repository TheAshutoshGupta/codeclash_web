import React from 'react'

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
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i}>
            <h2 className="text-3xl font-semibold text-white">How do I get started?</h2>
            <p className="mt-6 p-4 leading-6 tracking-wide text-[#ccbaa9]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci
              iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?
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
