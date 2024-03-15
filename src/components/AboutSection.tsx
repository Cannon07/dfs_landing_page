"use client"

import { useState } from "react";
import { GiSprout } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";

const AboutSection = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<div className={"bg-white py-10 flex flex-col gap-8 items-center"}>
			<div className={"flex flex-col w-3/4 gap-8 md:gap-0 md:flex-row"}>
				<div className={"flex flex-col w-full md:w-2/4 md:items-center md:justify-center"}>
					<div className={"w-full md:w-3/4 font-medium text-3xl md:text-4xl"}>
						<h1>Prithvi is the Ai assistant for science.</h1>
					</div>
				</div>

				<div className={"w-full md:w-2/4"}>
					<div className={"flex flex-col gap-4"}>
						<div className={"text-xl flex flex-col gap-4"}>
							<h1>Deep Forest Sciences has built an AI assistant Prithvi to accelerate scientific discoveries. Prithvi is powered by DeepChem infrastructure on the inside.</h1>
							<h1>Prithvi technologies have been deployed on multiple drug discovery, energy and molecular design projects.</h1>
						</div>
						<div className={"flex justify-between items-center"}>
							<GiSprout size={50} className={"hidden md:block"}/>
							<GiSprout size={40} className={"block md:hidden"}/>
							<IoIosArrowRoundForward 
								onClick={() => {setToggle(!toggle)}}
								className={`cursor-pointer transistion duration-150 ease-in-out ${toggle && 'rotate-90'} hidden md:block`} 
								size={100} 
							/>
							<IoIosArrowRoundForward 
								onClick={() => {setToggle(!toggle)}}
								className={`cursor-pointer transistion duration-150 ease-in-out ${toggle && 'rotate-90'} block md:hidden`} 
								size={70} 
							/>
						</div>
					</div>
					
				</div>
				
			</div>
			{toggle &&
				<div className={"w-full flex justify-center"}>
					<div className={"w-3/4 text-xl"}>
						<h1>Prithvi is our next generation system for AI driven scientific discovery. Under the hood, Prithvi leverages large scientific foundation models paired with other cutting edge AI techniques trained on proprietary internal datasets to accelerate discovery of new molecules, materials, designs and more. Prithvi draws on years of open infrastructure development with DeepChem to expose a modular extensible AI design that allows for blending human intuition with machine intelligence.</h1>
					</div>
				
				</div>
			}

		</div>
	)
}

export default AboutSection;
