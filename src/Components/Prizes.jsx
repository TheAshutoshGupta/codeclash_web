function PrizeCard({ prize_heading, cash_amount, goodies_amount }) {
    return (
      <div className="border-8 z-50 bg-purple-400 shadow-gray-500 rounded-lg shadow-2xl border-purple-600 m-2 max-w-sm lg:w-96 p-4  transition-transform duration-300 ease-in hover:scale-105">
        <h2 className="text-3xl font-bold">{prize_heading}</h2>
        <p className="text-yellow-btn-primary text-2xl font-semibold">
          Cash Prize: ₹{cash_amount}
        </p>
        <p className="text-lg italic">Goodies worth ₹{goodies_amount}+</p>
      </div>
    );
  }
  
  export default function Prizes() {
    const centering = {
      textAlign: 'center'
    };
  
    return (
      <main className="mt-4 flex justify-center gap-10 items-center flex-col">
            <span className='inline-flex uppercase mx-auto font-extrabold text-4xl sm:text-3xl lg:text-5xl animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent'>
    Prizes
  </span>
        <div className="flex flex-col">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center">
        <PrizeCard
            prize_heading="Winning Team"
            cash_amount="15000"
            goodies_amount="20000"
          />
        </div>
          <div  className="flex flex-col md:flex-row">
          <PrizeCard
            prize_heading="First Runner Up"
            cash_amount="8000"
            goodies_amount="20000"
          />
          <PrizeCard
            prize_heading="Second Runner Up"
            cash_amount="5000"
            goodies_amount="20000"
          />
          </div>
          <div  className="flex flex-col md:flex-row">
          <PrizeCard
            prize_heading="All Girls Team"
            cash_amount="1000"
            goodies_amount="20000"
          />
          <PrizeCard
            prize_heading="All Freshers Team"
            cash_amount="1000"
            goodies_amount="20000"
          />
          </div>
          <div className="flex flex-col md:flex-row md:justify-center md:items-center">
            <div className="border-4 z-50 bg-purple-400 shadow-gray-500 rounded-lg shadow-2xl border-purple-600 m-2 p-2 transition-transform duration-300 ease-in hover:scale-105">
              <p className="text-md italic">
                + Exciting{" "}
                <span className="font-bold text-lg" style={{ fontStyle: "normal" }}>
                  Goodies and Giveaways
                </span>{" "}
                for all participants
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }