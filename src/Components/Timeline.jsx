import React from 'react'
import ButtonRotatingBackgroundGradient from './ButtonRotatingBackgroundGradient'

function Timeline() {
  return (
    <div className='flex flex-col gap-6 sm:p-10 p-6 justify-center items-center'>
        <span className='inline-flex uppercase mx-auto font-extrabold text-4xl lg:text-5xl sm:text-3xl animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent'>
      TimeLine
    </span>
    <div className="relative mt-10 max-w-4xl sm:max-w-2xl mx-auto overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl">
    <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
    <div className='inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 px-3 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
	<ul className="space-y-12 p-8">
		<li className="flex items-start space-x-4">
			<p className="flex flex-col mb-1 justify-center p-2 rounded-xl bg-purple-800 h-full flex-wrap text-xl hover:underline">
            <span className=' text-3xl font-bold'>6</span>
            <span className='text-lg mt-2 justify-self-end'>April</span>
            </p>
			<div className="flex-1 space-y-2">
				<div className="flex items-center justify-between space-x-4 dark:text-white">
                <ButtonRotatingBackgroundGradient title={"0:00"}/>
				</div>
				<div>
					<p className='font-semibold text-3xl'>Registration Starts</p>
				</div>
			</div>
		</li>
        <li className="flex items-start space-x-4">
			<p className="flex flex-col mb-1 justify-center p-2 rounded-xl bg-purple-800 h-full text-xl hover:underline">
            <span className=' text-3xl font-bold'>19</span>
            <span className='text-lg mt-2 justify-self-end'>MAY</span>
            </p>
			<div className="flex-1 space-y-2">
				<div className="flex items-center justify-between space-x-4 dark:text-white">
                <ButtonRotatingBackgroundGradient title={"23:59"}/>
				</div>
				<div>
					<p className='font-semibold text-3xl'>Registration Ends</p>
				</div>
			</div>
		</li>
        <li className="flex items-start space-x-4">
			<p className="flex flex-col mb-1 justify-center p-2 rounded-xl bg-purple-800 h-full flex-wrap text-xl hover:underline">
            <span className=' text-3xl font-bold'>24</span>
            <span className='text-lg mt-2 justify-self-end'>MAY</span>
            </p>
			<div className="flex-1 space-y-2">
				<div className="flex items-center justify-between space-x-4 dark:text-white">
                <ButtonRotatingBackgroundGradient title={"09:30"}/>
				</div>
				<div>
					<p className='font-semibold text-3xl'>Hackathon Starts</p>
				</div>
			</div>
		</li>
        <li className="flex items-start space-x-4">
			<p className="flex flex-col mb-1 justify-center p-2 rounded-xl bg-purple-800 h-full flex-wrap text-xl hover:underline">
            <span className=' text-3xl font-bold'>25</span>
            <span className='text-lg mt-2 justify-self-end'>MAY</span>
            </p>
			<div className="flex-1 space-y-2">
				<div className="flex items-center justify-between space-x-4 dark:text-white">
                <ButtonRotatingBackgroundGradient title={"17:00"}/>
				</div>
				<div>
					<p className='font-semibold text-3xl'>Hackathon Ends</p>
				</div>
			</div>
		</li>	
	</ul>
    </div>
</div>
    </div>
    
  )
}

export default Timeline







